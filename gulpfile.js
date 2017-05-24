 /**
 * This script is based on https://github.com/shakyShane/jekyll-gulp-sass-browser-sync
 * Created by rodrigopavezi on 10/6/14.
 */
var env = process.env.NODE_ENV || "dev"
//platform independence
var platform = process.platform === "win32" ? true : false;

var gulp        = require('gulp');
var gutil       = require('gulp-util');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var uglify      = require("gulp-uglify");
var usemin      = require("gulp-usemin");
var sourcemaps  = require('gulp-sourcemaps');
var minifyCss   = require('gulp-minify-css');
var cp          = require('child_process');
var bower       = require('gulp-bower');
var del         = require('delete');
var argv        = require('minimist')(process.argv.slice(2));
var rename      = require("gulp-rename");
var modRewrite  = require('connect-modrewrite');
var factory     = require("widget-tester").gulpTaskFactory;
var runSequence = require("run-sequence");

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

//------------------------- Bundle Install ------------------------------
/**
 * Install jekyll and its plugins
 */
gulp.task('bundle-install', function (done) {
  if( platform){
    return cp.spawn('bundle.bat', ['install'], {stdio: 'inherit'})
        .on('exit', function (code) {
            if (code) {
                console.log("BUNDLE INSTALL ERROR:" + code);
                process.exit(code);
            }
            done();
        });
  } else {
    return cp.spawn('bundle', ['install'], {stdio: 'inherit'})
        .on('exit', function (code) {
            if (code) {
                console.log("BUNDLE INSTALL ERROR:" + code);
                process.exit(code);
            }
            done();
        });
  }
});



//------------------------- Jekyll Build --------------------------------

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
  browserSync.notify(messages.jekyllBuild);

  var config = '';
  if( env === "prod"){
    config = '--config=_config.yml,_config_prod.yml';
  }else if(env === "prod2"){
    config = '--config=_config.yml,_config_prod2.yml';

  }else if(env === "stage"){
    config = '--config=_config.yml,_config_stage.yml';

  }else if(env === "test"){
    config = '--config=_config.yml,_config_test.yml';

  }else {
    config = ''
  }
  if (platform){
    return cp.spawn('bundle.bat', ['exec','jekyll.bat', 'build', config, '--trace'], {stdio: 'inherit'})
        .on('exit', function (code) {
            if (code) {
                console.log("JEKYLL BUILD ERROR:" + code);
                process.exit(code);
            }
            done();
        });
  }
  else {
    return cp.spawn('bundle', ['exec','jekyll', 'build', config, '--trace'], {stdio: 'inherit'})
      .on('exit', function (code) {
            if (code) {
                console.log("JEKYLL BUILD ERROR:" + code);
                process.exit(code);
            }
            done();
      });
  }
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild-dev', ['build'], function () {
    browserSync.reload();
});

//------------------------- Browser Sync --------------------------------

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'build'], function() {
    browserSync({
        startPath: '/index.html',
        server: {
            baseDir: '_site',
            middleware: [
                modRewrite([
                    '!\\.html|\\.js|\\.css|\\.png|\\.jpg|\\.eot|\\.woff|\\.htm|\\.svg|\\.otf|\\.ttf|\\.gif$ /index.html [L]'
                ])
            ]
        },
        port: 8000
    });
});

//------------------------- Sass --------------------------------

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('_scss/main.scss')
        .pipe(sass({
            includePaths: ['scss'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/assets/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css'));
});


//------------------------- Bower --------------------------------

/**
 * Install bower dependencies
 */
gulp.task('bower-install', ['bower-rm'], function(cb){
    return bower().on('error', function(err) {
        console.log(err);
        cb();
    });
});


/**
 *  Remove all bower dependencies
 */
gulp.task('bower-rm', function(){
    return del.sync('bower_components');
});

//------------------------- Watch --------------------------------
/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('_sass/*.scss', ['sass', 'jekyll-rebuild-dev']);
    gulp.watch(['*.yml','index.html', '_layouts/*.html', '_includes/*.html', '_posts/**/*.md', 'assets/**/*', 'documentation/**/*', 'user/**/*', '404.md'], ['jekyll-rebuild-dev']);
});

//------------------------- Deployment --------------------------------

gulp.task("html", function() {
  return gulp.src(["./_site/index.html"])
    .pipe(usemin({
      css: [minifyCss, 'concat'],
      // html: [function() {return minifyHtml({empty: true})} ],
      js: [
        sourcemaps.init({largeFile: true}),
        'concat',
        uglify({ compress: {
          sequences     : false,  //-- join consecutive statemets with the “comma operator”
          properties    : true,   // optimize property access: a["foo"] → a.foo
          dead_code     : true,   // discard unreachable code
          drop_debugger : true,   // discard “debugger” statements
          unsafe        : false,  // some unsafe optimizations (see below)
          conditionals  : false,  //-- optimize if-s and conditional expressions
          comparisons   : true,   // optimize comparisons
          evaluate      : false,  //-- evaluate constant expressions
          booleans      : false,  //-- optimize boolean expressions
          loops         : true,   // optimize loops
          unused        : false,  //-- drop unused variables/functions
          hoist_funs    : true,   // hoist function declarations
          hoist_vars    : false,  // hoist variable declarations
          if_return     : true,   // optimize if-s followed by return/continue
          join_vars     : true,   // join var declarations
          cascade       : true,   // try to cascade `right` into `left` in sequences
          side_effects  : false,  // drop side-effect-free statements
          warnings      : true,   // warn about potentially dangerous optimizations/code
          global_defs   : {}      // global definitions
        }}),
        sourcemaps.write('.')
      ]
    }))
    .pipe(gulp.dest("./_site/"))
    .on('error',function(e){
      console.error(String(e));
    });
});

gulp.task("fonts", function() {
  return gulp.src("./bower_components/rv-common-style/dist/fonts/**/*")
    .pipe(gulp.dest("./_site/fonts"));
});

/**
 * Copy and rename CNAME file depending on the target environment
 */
gulp.task("CNAME", function() {
  gulp.src("./cname-config/CNAME-"+env)
  .pipe(rename("CNAME"))
  .pipe(gulp.dest("./_site"));  
});

gulp.task("build", function(cb) {
  runSequence('jekyll-build', ['html', 'fonts', 'CNAME'], cb);
});

//-------------------------- Test ----------------------------------
gulp.task("server", ['build'], factory.testServer({
  rootPath: "./_site",
  html5mode: true
}));
gulp.task("server-close", factory.testServerClose());
gulp.task("test:webdrive_update", factory.webdriveUpdate());
gulp.task("test:e2e:core", ["test:webdrive_update"], factory.testE2EAngular({
    browser: "chrome"
}));
gulp.task("test:e2e", function (cb) {
    runSequence("server", "test:e2e:core", "server-close", cb);
});

/**
 * Do a bower clean install
 */
gulp.task('bower-clean-install', ['bower-rm', 'bower-install']);

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);

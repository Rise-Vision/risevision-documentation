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
var cp          = require('child_process');
var bower       = require('gulp-bower');
var del         = require('delete');
var deploy      = require('gulp-gh-pages');
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
  }else if(env === "stage"){
    config = '--config=_config.yml,_config_stage.yml';

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
gulp.task('jekyll-rebuild-dev', ['jekyll-build'], function () {
    browserSync.reload();
});

//------------------------- Browser Sync --------------------------------

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
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
    return del.sync('assets/components');
});

//------------------------- Watch --------------------------------
/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('_sass/*.scss', ['sass', 'jekyll-rebuild-dev']);
    gulp.watch(['*.yml','index.html', '_layouts/*.html', '_includes/*.html', '_posts/**/*.md', 'assets/**/*', 'developer/**/*', 'user/**/*'], ['jekyll-rebuild-dev']);
});

//------------------------- Deployment --------------------------------
var options = {
            prod: {
                remoteUrl: "https://github.com/Rise-Vision/rv-doc-prod.git"
            },
            stage: {
                remoteUrl: "https://github.com/Rise-Vision/rv-doc-stage.git"
            }
        };

/**
 *  Deploy to gh-pages
 */
gulp.task("deploy", function () {

    // Remove temp folder created by gulp-gh-pages
    if (argv.clean) {
        var os = require('os');
        var path = require('path');
        var repoPath = path.join(os.tmpdir(), 'tmpRepo');
        gutil.log('Delete ' + gutil.colors.magenta(repoPath));
        del.sync(repoPath, {force: true});
    }
    gutil.log('Repository ' + options[env]["remoteUrl"]);

    return gulp.src("./_site/**/*")
        .pipe(deploy(options[env]));
});

/**
 * Copy and rename CNAME file depending on the target environment
 */
gulp.task("build", ['jekyll-build'], function() {
    gulp.src("./cname-config/CNAME-"+env)
    .pipe(rename("CNAME"))
    .pipe(gulp.dest("./_site"));
});

//-------------------------- Test ----------------------------------
gulp.task("server", ['jekyll-build'], factory.testServer({rootPath: "./_site"}));
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




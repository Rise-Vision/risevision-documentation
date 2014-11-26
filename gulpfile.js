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
var bower       = require('bower');
var del         = require('delete');
var deploy      = require('gulp-gh-pages');
var argv        = require('minimist')(process.argv.slice(2));
var rename      = require("gulp-rename");
var karma       = require('karma').server;
var gp          = require("gulp-protractor");
var modRewrite  = require('connect-modrewrite');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build',
    bundleInstall: '<span style="color: grey">Running:</span> $ bundle install'
};

//------------------------- Bundle Install ------------------------------
/**
 * Install jekyll and its plugins
 */
gulp.task('bundle-install', function (done) {
    browserSync.notify(messages.bundleInstall);

	  if( platform){
		    return cp.exec('bundle install')
          .stdout.on('data', function(data){
            console.log(data);
          })
          .stderr.on('data', function(data){
            console.log('stderr: ' + data);
          })
			    .on('close', done);
	  } else {
		    return cp.spawn('bundle', ['install'], {stdio: 'inherit'})
			    .on('close', done);
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
      config = "";
    }
	  if (platform){
      console.log("hello again");
      return cp.spawn('jekyll.bat', ['build'], {stdio: 'inherit'})
        .on('close',done);
	  }
	  else {
		    return cp.spawn('bundle', ['exec','jekyll', 'build', config, '--trace'], {stdio: 'inherit'})
	          .on('close',done);
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
                    '!\\.\\w+$ /index.html [L]'
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
gulp.task('bower-install', ['bower-clean-cache', 'bower-rm'], function(){
    return bower.commands.install([], {save: true}, {});
        /*.on('end', function(installed){
            cb(); // notify gulp that this task is finished
        });*/
});

/**
 * Clean bower cache
 */
gulp.task('bower-clean-cache', function(){
    return bower.commands.cache.clean([], {}, {});
        /*.on('end', function(clened){
            cb(); // notify gulp that this task is finished
        });*/
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
                remoteUrl: "git@github.com:Rise-Vision/rv-doc-prod.git"
            },
            stage: {
                remoteUrl: "git@github.com:Rise-Vision/rv-doc-stage.git"
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


/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);
});

// Downloads the selenium webdriver
gulp.task('webdriver_update', ['browser-sync'], gp.webdriver_update);

// Setting up the test task
gulp.task('protractor', ['webdriver_update','browser-sync'], function(cb) {
    gulp.src(['./tests/e2e/**/*.js']).pipe(gp.protractor({
        configFile: 'protractor.conf.js'
    })).on('error', function(e) {
        browserSync.exit();
        console.log(e);
        cb();
    }).on('end', function() {
        browserSync.exit();
        cb();
    });
});

gulp.task('e2e-test', ['browser-sync','protractor']);

/**
 * Do a bower clean install
 */
gulp.task('bower-clean-install', ['bower-rm', 'bower-clean-cache','bower-install']);

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);




var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function(done) {
    browserSync.init({
        server: {
            proxy:"localhost:8010",
            baseDir: './',
            open:true,
            online: false,
            ghostMode: {
                scroll: true
            },
            logLevel: 'info', // 'debug', 'info', 'silent', 'warn'
            logConnections: false,
            logPrefix: "Browser-Sync",
            notify: true
        },
    });
    done();
});

gulp.task('sass', function(){
  	return gulp.src('./assets/sass/**/*.scss')
    	.pipe(sass().on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
    	.pipe(gulp.dest('./assets/css'))
    	.pipe(browserSync.reload({
      		stream: true
	    }))
});

gulp.task('watch', ['sass', 'browserSync'], function(){
    gulp.watch('./assets/sass/**/*.scss', ['sass']);
    gulp.watch('./**/*.html', browserSync.reload); 
    gulp.watch('./assets/js/customs.js', browserSync.reload);
})

// skip if error occured
function swallowError(error) {
    console.log(error.toString())
    this.emit('end')
}
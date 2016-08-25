var gulp = require('gulp'), 							// gulp
	util = require('gulp-util'), 					// gulp常用的工具库——gulp-util
	// CSS预处理任务
	sass = require('gulp-sass'), 					// sass编译——gulp-sass
	watchPath = require('gulp-watch-path'); 		// watch监控——gulp-watch-path

// Sass编译任务
gulp.task('sass', function() {
  gulp.src('./src/sass/*.sass')
  	//错误输出
  	.pipe(sass().on('error', sass.logError))
  	//样式控制
    .pipe(sass({ style: 'nested' }))
		// 输出位置
    .pipe(gulp.dest('./src/css'))
});


// 在命令行使用 gulp watch 启动此任务
gulp.task('watch', function() {
    // 监听文件修改，当文件被修改则执行 sass 任务
    gulp.watch('./src/sass/*.sass', ['sass']);
});

//执行顺序
gulp.task('default', ['sass','watch'])

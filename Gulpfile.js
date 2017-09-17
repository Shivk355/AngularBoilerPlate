// [1] Require gulp
var gulp = require('gulp');

// [2] Load plug-ins
var $ = require('gulp-load-plugins')();

// [3] Default task - run with 'gulp'
// 'connect' task for starting web server
gulp.task('connect', function () {
	var connect = require('connect');
	var app = connect()
	.use(require('connect-livereload')({ port: 35729 }))
	.use(connect.static('app')) 
	.use(connect.directory('app'));
  require('http').createServer(app) 
	  .listen(7000)
	  .on('listening', function () { 
	  console.log('Started connect web server on http://localhost:7000'); 
  });
});

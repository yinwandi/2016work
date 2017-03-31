var gulp = require("gulp");
var less=require("gulp-less");
var clean=require("gulp-clean-css")
var uglify=require("gulp-uglify")
var imagemin=require("gulp-imagemin")
gulp.task("less",function(){
	return gulp.src("src/style/*.less")
	.pipe(less())
	.pipe(gulp.dest("public/style"))
})
gulp.task("clean",function(){
	return gulp.src("src/style/*.css")
	.pipe(clean())
	.pipe(gulp.dest("public/style"))
})
gulp.task("uglify",function(){
	return gulp.src("src/script/*js")
	.pipe(uglify())
	.pipe(gulp.dest("public/script"))
})
gulp.task('imagemin',function(){
    return gulp.src('src/images/*.*')
    .pipe(imagemin({
            progressive:true
            // use: [pngquant({quality: '65-80'})]
        }))
        .pipe(gulp.dest('public/images'))
})
gulp.task("watch",function(){
	gulp.watch("src/style/*.less",["less"])
	gulp.watch("src/style/*.css",["clean"])
	gulp.watch("src/script/*.js",["uglify"])
	gulp.watch("src/images/*.*",["imagemin"])
})
gulp.task("default",["less","clean","uglify","imagemin","watch"])
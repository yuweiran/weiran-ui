const path = require('path')
const fs = require('fs')


const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const minifyCss = require("gulp-clean-css");
const rename = require("gulp-rename");

let DIST_PATH=path.join(__dirname,'../../lib/')

// gulp创建任务
let handleSass =function () {
    return gulp.src("./index.scss") // 编写的scss文件路径
        .pipe(sass()) //将scss编译成css
        .pipe(gulp.dest(path.join(DIST_PATH))) //未压缩的css存放目录
        .pipe(minifyCss()) //压缩css
        .pipe(rename("index.min.css")) //重命名压缩后的css
        .pipe(gulp.dest(DIST_PATH)); //压缩后的css存放位置
}

let handleFont= function (){
    let fontDirPath = path.join(DIST_PATH,'./icons')
    fs.rmdir(fontDirPath,()=>{console.log('=======icons文件目录删除成功！打包程序继续执行...')})
    return gulp.src('./icons/**')
    .pipe(gulp.dest(fontDirPath))
}

let gulpAll =  gulp.parallel(handleSass,handleFont)

module.exports.font = handleFont
module.exports.sass = handleSass
module.exports.all = gulpAll
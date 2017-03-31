//
var gulp = require('gulp');
//
var autoprefixer = require('gulp-autoprefixer');//    flex兼容时引入
//
// var cssnano = require('gulp-cssnano');//         压缩css代码
//
var htmlmin = require('gulp-htmlmin');          //压缩html
//
var uglify = require('gulp-uglify');        //js


// var imagemin = require('gulp-imagemin')    //压缩图片
// //默认执行任务
gulp.task('default', function () {

        // gulp.src('居然之家/img/*.{png,jpg,gif,ico}')
        //     .pipe(imagemin())
        //     .pipe(gulp.dest('dist1/img'));

    //    flex兼容

    //到src目录下app.css，为其补全浏览器兼容的css
    // return gulp.src(['居然之家/css/homePage.css','居然之家/css/updata-info.css','居然之家/css/shopping.css','居然之家/css/order.css','居然之家/css/login.css','居然之家/css/message.css','居然之家/css/my.css','居然之家/css/myLove.css','居然之家/css/my-info.css'])
    //     .pipe(autoprefixer({
    //        "Major Browsers": ['iOS or ios_saf for iOS Safari.','Chrome'],
    //         cascade: false
    //     }))
    //     //输出到dist文件夹
    //     .pipe(gulp.dest('dist1/css'));


    //         压缩css代码
    //     gulp.src([
    //             './dist/css/test1.css',
    //             './dist/css/test2.css',
    //             './dist/css/test3.css',
    //             './dist/css/test4.css',
    //             './dist/css/test5-1.css'
    //     ])
    //         .pipe(cssnano())
    //         .pipe(gulp.dest('dist/css'));



            //压缩html
            // gulp.src([
            //     // 'ionic/ionic/test2.html',
            //     // 'ionic/ionic/test3.html',
            //     // 'ionic/ionic/test4.html',
            //     // 'ionic/ionic/test5.html'
            //     '居然之家/test/homePage.html'
            // ])
            //     .pipe(htmlmin({
            //         collapseWhitespace: true,
            //         removeComments: true
            //     }))
            //     .pipe(gulp.dest('dist1/test'));


            //压缩js
            gulp.src(['三门峡app/js/common/*.js'])
                .pipe(uglify())
                .pipe(gulp.dest('dist/common'));

});

// 'use strict';
//
// var gulp = require('gulp');

//压缩html
// var htmlmin = require('gulp-htmlmin');
// gulp.task('html', function(){
//     gulp.src('./*.html')
//         .pipe(htmlmin({
//             collapseWhitespace: true,
//             removeComments: true
//         }))
//         .pipe(gulp.dest('dist'));
// });

// //压缩css
// var cssnano = require('gulp-cssnano');
// gulp.task('style', function(){
//     gulp.src(['./dist/src/test1.css','./dist/src/test2.css','./dist/src/test3.css','./dist/src/test4.css','./dist/src/test5-1.css'])
//         .pipe(cssnano())
//         .pipe(gulp.dest('dist/css1'));
// });

//压缩js
// var uglify = require('gulp-uglify');
// gulp.task('script', function(){
//     gulp.src(['./js/common.js','./js/piano.js'])
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });
//
// //同步代码变化
// gulp.task('dist', function(){
//     gulp.watch('./*.html', ['html']);
//     gulp.watch(['./css/style.css','./css/piano.css'], ['style']);
//     gulp.watch(['./js/common.js','./js/piano.js'], ['script']);
// });





//          以下代码来源网络    未经测试

//////////////////////////////////////
// var gulp = require('gulp'),
//     eslint = require('gulp-eslint'),
//     minify = require('gulp-minify-css'),//css压缩
//     concat = require('gulp-concat'),//文件合并
//     uglify = require('gulp-uglify'),//js压缩
//     rename = require('gulp-rename'),//文件重命名
//     var imagemin = require('gulp-imagemin')    //压缩图片
//     clean = require('gulp-clean'),//清空文件夹
//     rev = require('gulp-rev'),//更改版本号
//     revCollector = require('gulp-rev-collector');//gulp-rev插件，用于html模板更改引用路径



// // -----------------------------------------
// //     更新-------------------------------------
//     upload = require('gulp-qndn').upload,//七牛上传
//     cdn = require('gulp-cdn-replace'),//替换CDN链接



// //   1.文件压缩

// // gulp文件压缩使用插件如下：
// //
// // css文件压缩：gulp-minify-css
// //
// // js文件压缩：gulp-uglify
// //
// // image文件压缩：gulp-imagemin
// //
// // 配置如下：
//
// //   压缩css

// gulp.task('minifyCss', function(){
//     return gulp.src('public/css/*.css')
//         .pipe(rename({suffix: '.min'}))
//         .pipe(minify())
//         .pipe(concat('main.css'))
//         .pipe(gulp.dest('dist/css'));
// });
//
// //   压缩js

// gulp.task('minifyJs', function(){
//     return gulp.src('public/js/*.js')
//         .pipe(uglify())
//         .pipe(gulp.dest('dist/js'));
// });
//
// //   压缩图片

// gulp.task('minifyImg', function(){
//     return gulp.src('居然之家/img/*')
//         .pipe(imagemin())
//         .pipe(gulp.dest('dist1/img'));
// });
// gulp.src()      //里面是需要压缩文件的目标地址
// gulp.dest()     //里面是压缩文件存放地址
//         //rename可以更改压缩文件的名字，根据需要进行设置


//
// //   2.文件合并

// // gulp-concat实现文件合并，以合并css文件为例

// gulp.task('minifyCss', function(){
//     return gulp.src('public/css/*.css')
//         .pipe(minify())
//
//         .pipe(concat('main.css'))
//
//         .pipe(gulp.dest('dist/css'));
// });
// concat()        //里面是合并后文件名
//


// //    3.版本

// gulp.task('minifyCss', function(){
//     return gulp.src('public/css/*.css')
//     // .pipe(rename({suffix: '.min'}))
//         .pipe(minify())
//         .pipe(concat('main.css'))
//         .pipe(rev())
//         .pipe(gulp.dest('dist/app/css'))
//         .pipe(rev.manifest())
//         .pipe(gulp.dest('dist/css'));
// });
// rev.manifest()      //会生成一个manifest.json文件
//
//     .pipe(rev())        //会自动在原先文件名上添加随机序号


// //
// //
// //     4.自动上传cdn（七牛）

// // 首先，你要有七牛账号，因为需要七牛的accesskey等信息
//
// var qnOptions = {
//     accessKey: '**',
//     secretKey: '**',
//     bucket: '存放资源的容器名',
//     domin:'你的cdn链接',
//     delete: false       //(每次上传,如果你要删除同名文件就改为true)
// }
// // accessKey和secretKey都能在账号中找到
// //
// // 以上传压缩合并后js文件为例
//
// gulp.task('minifyJs', function(){
//     return gulp.src('public/js/*.js')
//         .pipe(uglify())
//         .pipe(concat('main.js'))
//         .pipe(upload({qn: qnOptions}))
//         .pipe(gulp.dest('dest/js'));
// });


// var gulp = require('gulp');
// var px2rem = require('gulp-px2rem-plugin');
//
// gulp.task('default', function() {
//     gulp.src('居然之家/css/homePage.css')
//         .pipe(px2rem())
//         .pipe(gulp.dest('居然之家/homePage'));
// });
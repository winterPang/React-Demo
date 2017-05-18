//引入gulp  
var gulp = require('gulp');  
  
//自动加载gulp插件
var plugins = require('gulp-load-plugins')();  
var connect_reload = require('connect-livereload');//单独起livereload
var amdOptimize = require('amd-optimize');         //amd优化配置处理
//var polyfill = require('babel-polyfill')

//脚本检查
//angular-hint
gulp.task('lint', function () {  
    gulp.src('./src/js/**/*.js')
        .pipe(plugins.plumber())
        .pipe(plugins.jshint())  
        .pipe(plugins.jshint.reporter('default'));
});  


// plugins.util.log(plugins);
//clean
gulp.task('clean', function () {
  return gulp.src('./oasis/**/*.js', {read: false})
    .pipe(plugins.clean());
});

// 起始目录和目标目录，据说只支持相对路径，不过也够用了 
gulp.task('copyChanged', function () {
    return gulp.src(['./src/**/*.*','!./src/init/**/*.json','!./src/**/*.less'])
        .pipe(plugins.plumber())  
        .pipe(plugins.changed('./oasis/web'))  
        .pipe(gulp.dest('./oasis/web'));  
}); 

// 起始目录和目标目录，据说只支持相对路径，不过也够用了 
gulp.task('copyInitData', function () {
    return gulp.src(['./src/init/**/*.json'])
        .pipe(plugins.plumber())  
        .pipe(plugins.changed('./oasis/init'))  
        .pipe(gulp.dest('./oasis/init'));  
}); 
 
//less处理 css压缩  
gulp.task('less', function () {
  return gulp.src(['./src/**/less/*.less','!./src/frame/libs/**/*.less'])
    .pipe(plugins.plumber())
    .pipe(plugins.less())
    .pipe(gulp.dest('./oasis/web/'));
}); 
  
//css压缩  
gulp.task('css-min', function () {  
    gulp.src('./dist/css/dream.css') 
        .pipe(plugins.plumber()) 
        .pipe(plugins.minifyCss())  
        .pipe(plugins.rename("dream.min.css"))  
        .pipe(gulp.dest('./dist/css'));  
}); 

//es6 语法处理
gulp.task('es6', function() {
    //var polyfill = './node_modules/gulp-babel/node_modules/babel-core/browser-polyfill.js';
    return gulp.src(['./src/**/*.js','!./src/frame/libs/**/*.js'])
        .pipe(plugins.plumber())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.babel({
            presets: [
                ['es2015',{modules:'amd'}]
            ]
            //plugins:['transform-es2015-modules-amd','transform-es2015-arrow-functions']
        }))
        .pipe(plugins.sourcemaps.write('.'))
        .pipe(gulp.dest('./oasis/web/'));
});


// 图片处理  
gulp.task('img', function () {  
    gulp.src('src/img/**/*')
        .pipe(plugins.plumber())  
        .pipe(plugins.imagemin())  
        .pipe(gulp.dest('./oasis/web/'));  
});    

//require合并   js处理 通过amd插件处理requriejs问题 
gulp.task('rjs', function () {  
    gulp.src(['./src/frame/**/*.js','!./src/frame/libs/**/*.js'])
        .pipe(plugins.plumber())  
        .pipe(amdOptimize("main", { 
 			//require config  
            paths: {  
                "main": "src/frame/js/main"
            },  
            shim: { 
            }  
        }))  
        .pipe(plugins.concat("index.js"))           //合并  
        .pipe(gulp.dest("dist/js"))          //输出保存  
        .pipe(plugins.rename("index.min.js"))          //重命名  
        .pipe(plugins.uglify())                        //压缩  
        .pipe(gulp.dest("dist/js"));         //输出保存  
});  

gulp.task('connect',function(){
    var connect = require('connect');
    var serveStatic = require('serve-static'); 
    var directory = require('serve-index');
    var app = connect()
    .use(connect_reload({port:35729}))
    .use(serveStatic('oasis'))
    .use(directory('oasis'));

    var http = require('http');

    http.createServer(app).listen(9000).on('listening',function(){
        plugins.util.log('Started connect web server on http://localhost:9000');
    })

});

gulp.task('watch',function(){
    //在默认端口35729启动 livereload
    plugins.livereload.listen();
    
    //监听文件变化 livereload
    gulp.watch([
        'src/**/*.html',
        'src/**/*.less',
        'src/**/*.js'
    ]).on('change',function(file){
        plugins.livereload.changed(file.path);
     });
    

     //监听js变化  
    gulp.watch('./src/**/*.js', function () {       //当js文件变化后，自动检验 压缩  
        //gulp.run('lint', 'scripts');  
        gulp.run('lint', 'es6');  
    });  

    //监听less变化  
    gulp.watch(['./src/**/*.less','!./src/frame/libs'], function () {  
        gulp.run('less','copyChanged');  
    });  
  
    //监听css变化  
    gulp.watch('dist/css/dream.css', function () {  
        gulp.run('css-min');  
    });  
  
    //监听图片变化  
    gulp.watch('src/img/**/*', function () {  
        gulp.run('img','copyChanged');  
    });

    //监听图片变化  
    gulp.watch('src/**/*.html', function () {  
        gulp.run('copyChanged');  
    }); 

    //监听假数据变化  
    gulp.watch('src/init/**/*.json', function () {  
        gulp.run('copyInitData');  
    }); 

})
  
gulp.task('default', ['connect','watch','copyChanged','copyInitData','less','es6'] , function () {  
   require('opn')(
        'http://localhost:9000/web/frame/index.html',
        {app:'chrome'});
}); 


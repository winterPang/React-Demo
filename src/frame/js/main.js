require.config({
    baseUrl: '../',
    waitSeconds: 0,
    paths: {
        "jquery":  "frame/libs/jquery/jquery-1.11.3.min",

        "jquery.twbsPagination":"frame/libs/jquery/jquery.twbsPagination",

        "async":"frame/libs/async/2.0.1/async.min",

        "echarts":  "frame/libs/echarts/echarts-all",

        "echarts3": "frame/libs/echarts/echarts.min",

        "angular":  "frame/libs/angularjs/angular.min",

        "angular-messages": "frame/libs/angularjs/angular-messages",

        "angular-ui-router":  "frame/libs/ui-router/angular-ui-router.min",

        "angularAMD": "frame/libs/angularjs/angularAMD",

        "babel-polyfill":"frame/libs/babel-polyfill/dist/polyfill",
        
        "bootstrap": "frame/libs/bootstrap/js/bootstrap",

        "bootstrapTable":"frame/libs/bootstrap-table/bootstrap-table",

        "bootstrap-table-CN": "frame/js/empty",

        "select2":"frame/libs/select2-4.0.3/js/select2.min",

        "select2-cn":"frame/libs/select2-4.0.3/js/i18n/zh-CN",

        "layer": "frame/libs/layer/layer",

        "bootstrapValidator":"frame/libs/bootstrap-validator/js/bootstrapValidator",

        "bootstrapValidatorCN": "frame/libs/bootstrap-validator/js/language/zh_CN",

        "jqueryZtree": "frame/libs/ztree/js/jquery.ztree.all.min",

        "jqueryTreetable": "frame/libs/treetable/jquery-treetable",

        'require-plugin-async': "frame/libs/requirejs/plugins/async",

        "moment": "frame/libs/bootstrap-daterangepicker/moment",

        "moment2_1": "frame/libs/bootstrap-daterangepicker/moment2_1",

        "bootstrap-daterangepicker": "frame/libs/bootstrap-daterangepicker/daterangepicker",
       
        "bootstrap-daterangepicker-1_2": "frame/libs/bootstrap-daterangepicker/daterangepicker1_2",
       
        "bootstrapDatepicker": "frame/libs/bootstrap-datepicker/js/bootstrap-datepicker.min",
       
        "bootstrapDatetimepicker": "frame/libs/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min",
       
        "bootstrapDatepickerCN": "frame/libs/bootstrap-datepicker/js/bootstrap-datepicker.zh-CN.min",
       
        "fullcalendar": "frame/libs/fullcalendar-3.0.1/js/fullcalendar",
       
        "jqueryValidator":"frame/libs/jquery-validator/jquery.validate.min",
      
        "jqueryValidatorAddMethods": "frame/libs/jquery-validator/additional-methods.min",
        
        "notice": "frame/libs/notice/jquery-notice",
        
        'bootmodal': 'frame/libs/bootmodal/bootModal',
        
        "sprintf":"frame/libs/sprintf/1.0.3/sprintf.min",
       
        'rangepicker': 'frame/libs/rangepicker/rangepicker',
        
        //CSS配置 -- zhangfq
        bootstrap_css: 'frame/libs/bootstrap/css/bootstrap.min',

        bootstrap_table_css: 'frame/libs/bootstrap-table/bootstrap-table.min',

        fontAwesome_css: 'frame/libs/font-awesome-4.7.0/css/font-awesome.min',

        bootstrap_daterangepicker_css: "frame/libs/bootstrap-daterangepicker/daterangepicker",
        
        reset_css : 'frame/less/reset',
        //主要入口文件
        'app': 'frame/js/app',
     
        'utils': 'frame/js/utils',
        
        'socketio': '../../../v3/web/chat/js/socket.io',
       
        'xiaobeichat': '../../../v3/web/chat/xiaobeichat',
       
        //component define
        oasisMenu: "frame/component/menu/oasis-menu",
        oasisRow: "frame/component/layout/oasis-row",
        oasisCol: "frame/component/layout/oasis-col",
        oasisBox: "frame/component/layout/oasis-box",
        oasisBoxHeader: "frame/component/layout/oasis-box-header",
        oasisBoxBody: "frame/component/layout/oasis-box-body",
        oasisBoxFooter: "frame/component/layout/oasis-box-footer",
        oasisButton: "frame/component/button/oasis-button",
        oasisTable: "frame/component/table/bs_table",
        oasisModal:'frame/component/modal/bs_modal',
        //service
        $alert: './frame/service/alert'

    },
    shim: {
        "angular": {
            exports: "angular"
        },
        "angular-ui-router": {
            deps: ['angular'],
            exports: "angular-ui-router"
        },
        "angular-messages": {
            deps: ["angular"]
        },
        'socketio': {
            exports: "socket"
        },
        'xiaobeichat': {
            deps: ['socketio', 'jquery'],
            exports: "xiaobeichat"
        },
        "angularAMD": {
            deps: ["angular"],
            exports: "angularAMD"
        },
        "bootstrap": {
            deps: ["jquery",'css!bootstrap_css','css!fontAwesome_css'],
            exports: '$'
        },
        "echarts": {
            exports: 'echarts'
        },
        "bootstrapTable": {
            deps: ["bootstrap"],
            exports: '$'
        },
        'bootstrapValidator': {
            deps: ['bootstrap'],
            exports: '$'
        },
        'bootstrapValidatorCN': {
            deps: ['bootstrapValidator'],
            exports: '$'
        },
        'jqueryValidator': {
            deps: ["jquery"],
            exports: '$'
        },
        'jqueryValidatorAddMethods': {
            deps: ["jqueryValidator"],
            exports: '$'
        },
        "jquery.twbsPagination": {
            deps: ["jquery"],
            exports: '$'
        },
        'bootstrapDatepicker': {
            deps: ['bootstrap'],
            exports: '$'
        },
        "bootstrap-daterangepicker": {
            deps: ["bootstrap", "moment"]
        },
        "bootstrap-daterangepicker-1_2": {
            deps: ["bootstrap", "moment2_1"]
        },
        'bootstrapDatepickerCN': {
            deps: ['bootstrapDatepicker'],
            exports: '$'
        },
        "notice": {
            deps: ["jquery"],
            exports: '$'
        },
        "bootmodal": {
            deps: ["bootstrap"],
            exports: '$'
        },
        "layer": {
            deps: ["jquery"]
        },
        "jqueryTreetable": {
            deps: ["jquery"],
            exports: '$'
        },
        "fullcalendar": {
            deps: ["jquery", "moment"],
            exports: '$'
        },
        "select2-cn": {
            deps: ['select2']
        },
        'oasisBox':{
            deps:['oasisRow','oasisCol','oasisBoxHeader','oasisBoxBody','oasisBoxFooter']
        }
    },
    map: {
        '*': {
            // 加载css文件的配置
            css: 'frame/libs/requirejs/css.min',
        }
    },
    deps: [
        'bootstrap',
        //  启动加载的css文件
        'css!reset_css',
        //  启动加载的js文件
        //  I think 'jquery' must be loaded first,set angular.element === $.
        'app', '$alert','oasisMenu','oasisBox','oasisButton','oasisTable','oasisModal'

    ]
});
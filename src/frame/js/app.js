/**
 * app.js
 * created by panglidong@20160919
 * modified by zhaotinghai@20160919
 */
import angularAMD from 'angularAMD';
//import  $ from 'jquery';
import Utils from 'utils';
import 'angular-ui-router';
//ES6 语法扩展糖
require("babel-polyfill");

const TPL_BASE = "../";
const URL_ROUTE = '../../init/routes.json';
const URL_HOME = "/header/content/menus";

let mainApp = angular.module("mainApp", ['ui.router']);

function configAndRunAngular() {
    mainApp.config(function($stateProvider, $urlRouterProvider, $controllerProvider, $httpProvider) {
        console.log("==========angularjs config 函数====================");
        $.ajax({
            type: "GET",
            url: URL_ROUTE,
            dataType: 'json',
            async: false
        }).success(function(routes) {
            angular.forEach(routes.routes,
                function(route, key) {
                    route.templateUrl = route.templateUrl.split("views");
                    route.templateUrl.splice(1, 0, 'views/', Utils.getLang())
                    route.templateUrl = route.templateUrl.join('');
                    var cfg = {
                        url: route.url,
                        templateUrl: TPL_BASE + route.templateUrl
                    };
                    route.controller_id = "controller" + key;
                    route.controller_id && (cfg.controller = route.controller_id);
                    (route.controller || route.dependencies.length > 0) && (cfg.resolve = {
                        init: function($q, $rootScope) {
                            var deferred = $q.defer();
                            require([route.controller].concat(route.dependencies),
                                function(controller) {
                                    $controllerProvider.register(route.controller_id, controller.default);
                                    $rootScope.$apply(function() {
                                        deferred.resolve();
                                    })
                                });
                            return deferred.promise;
                        }
                    });
                    $stateProvider.state(route.state, cfg);
                });
        })
        $urlRouterProvider.when("", URL_HOME);
        $httpProvider.interceptors.push(['$q', '$rootScope', function($q, $rootScope) {
            $rootScope.loading = 0;
            return {
                response: function(resp) {
                    return resp;
                },
                request: function(req) {
                    return req;
                },
                responseError: function(reject) {
                    return reject;
                },
                requestError: function(reject) {
                    return reject;
                }
            };
        }]);

    }).run(function($rootScope, $state, $http) {
        console.log("==========angularjs run 函数====================");
         $rootScope.modalInfo = {count: 0};
        // 切换侧边栏菜单的折叠和展开
        $rootScope.toggleLeftMenu = function(evt) {
            var me = $(evt.target);
            var menu = $('.left-menu');
            // 如果页面有侧边菜单，点击显示，否则点击无效。
            if (menu.length) {
                if (me.html() == '&lt;') {
                    menu.animate({
                        right: 0
                    }, 300);
                    me.html('&gt;').animate({
                        right: 130
                    }, 300);
                } else {
                    menu.animate({
                        right: -130
                    }, 300);
                    me.html('&lt;').animate({
                        right: 0
                    }, 300);
                }
            }
        };

        // 代理摸态框事件
        $('body').delegate('.modal-content', 'show.bs.modal', function() {
            // console.log('show_modal..............');
            if ($rootScope.$$phase) {
                $rootScope.modalInfo.count++;
            } else {
                $rootScope.$apply(function() {
                    $rootScope.modalInfo.count++;
                });
            }
        }).delegate('.modal-content', 'hidden.bs.modal', function() {
            // console.log('hidden_modal..............');
            if ($rootScope.$$phase) {
                $rootScope.modalInfo.count--;
            } else {
                $rootScope.$apply(function() {
                    $rootScope.modalInfo.count--;
                });
            }
        });

        $rootScope.$watch('modalInfo.count', function(v) {
            var $modalDom = $('.modal-backdrop');
            $modalDom.length == 0 && ($modalDom = $('<div class="modal-backdrop"></div>').appendTo('body'));
            v > 0 ? $modalDom.show() : $modalDom.hide();
        }, true);

        // 路由状态修改后隐藏折叠的侧边栏菜单，防止出现菜单为空白的情况
        $rootScope.$on('$stateChangeSuccess',
            function(e, v) {
                var menu = $('.left-menu');
                menu.css({
                    right: -130
                });
                $('.btn-show-submenu').html('&lt;').css({
                    right: 0
                });
            });
    });
}

configAndRunAngular();

angularAMD.bootstrap(mainApp);

export default mainApp;

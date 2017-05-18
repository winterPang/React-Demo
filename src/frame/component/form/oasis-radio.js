define(['angularAMD', 'jquery', 'utils', 'css!./frame/component/form/less/form'], function (angularAMD, $, Utils) {
    angularAMD.directive('oasisRadio', [function () {
        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                ngDisabled: '='
            },
            template: '<div class="oasis-radio"><label class="unchecked"></label><label ng-transclude></label></div>',
            replace: true,
            transclude: true,
            controller: function ($scope, $element, $attrs, $transclude) {
            },
            link: function ($scope, $element, $attr, controller) {
                var $ele = $($element.find("label")[0]);
                $ele.bind("click", function () {
                    $scope.$apply(function () {
                        $scope.ngModel = $attr.value;
                    });
                });
                $scope.$watch("ngModel", function (v) {
                    if (v == $attr.value) {
                        $ele.removeClass("unchecked").addClass("checked");
                    } else {
                        $ele.removeClass("checked").addClass("unchecked");
                    }
                }, true);
                $scope.$watch("ngDisabled", function (v) {
                    if (v) {
                        $ele.unbind("click");
                        $ele.addClass("disabled");
                    } else {
                        $ele.unbind("click").bind("click", function () {
                            $scope.$apply(function () {
                                $scope.ngModel = $attr.value;
                            });
                        });
                        $ele.removeClass("disabled");
                    }
                }, true);
            }
        }
    }])
});
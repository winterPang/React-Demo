define(["utils"], function (Utils) {
    // body...
    return ['$scope', function ($scope) {
        $scope.radio = {
            checked: "checked",
            disabled: true
        };
        $scope.checkbox = {
            checked: ["checked"],
            disabled: true
        };
        $scope.codeCopy = function(e){
            var codeCopy = Utils.copyToClipboard(e.target.parentElement);
            if(codeCopy){
                alert("复制成功");
            }else{
                alert("复制失败");
            }
        }
    }]
});
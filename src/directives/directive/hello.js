import angularAMD from 'angularAMD';

angularAMD.directive('hello', [() => {
    // let directiveObj = {
    //     restrict:'AECM',
    //     template:'<button>click me</button>'
    //  }
    // let directiveObj = {
    //     restrict:'AECM',
    //     replace:true,
    //     template:'<button ng-click="sayhello()" style="background-color: {{color}}">click me</button>',
    //     scope:{ color:'@color'}，
    //     link: function (scope,elements,attrs) {
    //      elements.bind('click', function () {
    //       elements.css('background-color','blue');
    //      })
    // };

    // let directiveObj = {
    //     restrict: 'AECM',
    //     replace: true,
    //     template: '<button style="background-color: {{color}}">click me</button>',
    //     scope: {
    //         color: '='
    //     },
    //     link: function(scope, elements, attrs) {
    //         elements.bind('click', function() {
    //             elements.css('background-color', 'blue');
    //             scope.$apply(function() {
    //                 scope.color = 'pink';
    //             })
    //         })
    //     }
    // };


    return directiveObj;
}])

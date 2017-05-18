import angularAMD from 'angularAMD';

angularAMD.service('modalsTestService', ['$http', function($http) {

    function TestModal(params) {
        this.apName = params.apName;
        this.apModel = params.apModel;
        this.apSN = params.apSN;
        this.apGroupName = params.apGroupName;
        this.macAddr = params.macAddr;
        this.ipv4Addr = params.ipv4Addr;
    }
    
    //ES5定义类
    // function Point(x, y) {
    //   this.x = x;
    //   this.y = y;
    // }

    // Point.prototype.toString = function () {
    //   return '(' + this.x + ', ' + this.y + ')';
    // };

    var p = new Point(1, 2);

    //定义类
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }

        toString() {
            return '(' + this.x + ', ' + this.y + ')';
        }
    }

    // $http.get('/init/tables/test.json').then(function(data){
    // 	let 
    // })


}])

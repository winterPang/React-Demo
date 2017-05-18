
import Utils from 'utils'; 
import 'css!../less/content';

function ctrlCallback($scope,$http){
   var MENU_URL = Utils.getUrl('get','','/a/b','/init/menus/menu.json')
    //define menu data
    $http.get(MENU_URL.url).success(function(res){
      //debugger
     // console.log(res);
      $scope.opts = res;
   })
}

export default ['$scope','$http',ctrlCallback];

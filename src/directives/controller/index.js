
import '../directive/hello';
import '../directive/form';
let ctrlCb = ($scope) =>{

  $scope.color='red';

}

export default ['$scope',ctrlCb]
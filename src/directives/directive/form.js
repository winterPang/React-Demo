import angularAMD from 'angularAMD';

angularAMD.directive('formDire',[() => {
	let obj = {
        restrict:'E',
        templateUrl:'../directives/directive/form.html'
        
     }
	return obj;
}])
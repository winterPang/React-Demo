import angularAMD from 'angularAMD';
import Utils from 'utils';
import 'css!./frame/component/layout/less/layout';

angularAMD.directive('oasisCol',[function () {
		// body...
		return{
			restrict: 'E',
	        scope:{},
	        template: '<div class="oasis-col" ng-transclude></div>',
	        replace: true,
	        priority:50,
	        transclude:true,
	        link:function($scope,$element,attr,controller) {
	         	// body...
	         	//debugger
	         	if(attr.md) $element.addClass("col-md-"+attr.md);
	         	if(attr.xs) $element.addClass("col-xs-"+attr.xs);
	         	if(attr.sm) $element.addClass("col-sm-"+attr.sm);
	         	if(attr.lg) $element.addClass("col-lg-"+attr.lg);
	         	// if(attr.border) $element.css({
	         	// 	'border':attr.border+"px solid #e7e7e9"
	         	// });
	         	
	        }
		} 
}])

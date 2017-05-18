import angularAMD from 'angularAMD';
import Utils from 'utils';
import 'css!./frame/component/layout/less/layout';

angularAMD.directive('oasisRow',[function () {
		// body...
		return{
			restrict: 'E',
	        scope:{},
	        template: '<div class="oasis-row" ng-transclude></div>',
	        replace: true,
	        priority:49,
	        transclude:true,
	        link:function($scope,$element,attr,controller) {
	         	// body...
	         	// if(attr.gutter) $element.css({
	         	// 	'padding-left':attr.gutter+"px",
	         	// 	'padding-right':attr.gutter+"px",
	         	//  })
	        }
		} 
}])

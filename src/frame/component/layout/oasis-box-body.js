import angularAMD from 'angularAMD';
import Utils from 'utils';
import 'css!./frame/component/layout/less/layout';

angularAMD.directive('oasisBoxBody',[function () {
		// body...
		return{
			restrict: 'E',
	        scope:{},
	        template: '<div class="oasis-box-body box-body" ng-transclude></div>',
	        replace: true,
	        priority:48,
	        transclude:true,
	        controller:function($scope,$element,$attrs,$transclude){
	        	//debugger
	        	 // $transclude($scope,function (clone) {              
	          //     //  debugger
	          //       var header = $(".box-footer",$element);
	          //       var body = $(".box-body",$element)
	          //       header.append($('div[name="header"]',$(clone)))
	          //       body.append($('div[name="body"]',$(clone)))
	          //    });
	        },
	        link:function($scope,$element,$attr,controller){
	         	// body...
	         	// debugger
	         	if($attr.height) $element.css({'height':$attr.height+"px"});
	         	if($attr.heightAuto ==""||$attr.heightAuto) {
	         		$element.addClass('no-height');
	         	}
	        }
		} 
	}])

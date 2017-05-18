import angularAMD from 'angularAMD';
import Utils from 'utils';
import 'css!./frame/component/button/less/button';
import 'sprintf';

const drawElement = (scope,ele,attr,$compile) => {
		//debugger
		const iconEleTpl = "<i class='%s'></i>";
		const textEleTpl = "<span>%s</span>";
		const dropdownTpl = "<span>%s</span> <span class='caret'></span>"
		if(attr.icon && (attr.type&&attr.type != "button")) return false;
		if(attr.icon && attr.iconRight != "") ele.append(sprintf(iconEleTpl,attr.icon))
		if(attr.text)  ele.append(sprintf(textEleTpl,attr.text));
		if(attr.icon && attr.iconRight == "") ele.append(sprintf(iconEleTpl,attr.icon))
		attr.nativeType?ele.attr('type',attr.nativeType):ele.attr('type',"button")
		
		// if(attr.dropdown){
		// 	let dropdownValue = attr.dropdownvalue.split(",");
		// 	ele.addClass('dropdown-toggle');
		// 	ele.click(function(){
		// 		scope.show ? scope.show = false :scope.show = true;
		// 		scope.$apply();
		// 	});
		// 	$(document).click(function(event){
		// 		if(event.target == ele[0] || event.target.parentNode == ele[0]) return false;
		// 		scope.show = false;
		// 		scope.$apply();
		// 	});
		// 	ele.append("<span class='caret' ></span>");
		// 	let ulEleTpl = "<ul ng-show='show' class='dropdown-menu'>%s</ul>";
		// 	let liArr = [];
		// 	for (let i = 0; i < dropdownValue.length;i++) {
		// 		liArr.push(sprintf('<li><a>%s</a><li>',dropdownValue[i]));
		// 	}

		// 	for (let elem of ['a', 'b'].values()) {
		// 	  console.log(elem);
		// 	}
		// 	ele.append($compile(sprintf(ulEleTpl,liArr.join("")))(scope));
		// }
		//按钮类型
		if(attr.type == "link"){
			ele.addClass('btn-link');
		}else if(attr.type == "text"){
			ele.addClass('btn-text');
		}else if(attr.type == "hover"){
			ele.addClass('hover');
		}else{
			ele.addClass('btn');
		}
		//情景场景
		if(attr.scene=="warning"){
			ele.addClass('btn-warning');
		}else if(attr.scene=="success"){
			ele.addClass('btn-success');
		}else if(attr.scene=="danger"){
			ele.addClass('btn-danger');
		}else{
			ele.addClass('btn-default');
		}

	}

	angularAMD.directive('oasisButton',["$compile",function ($compile) {
		// body...
		return{
			restrict: 'E',
	        scope:{},
	        template:'<botton class="oasisButton"></botton>',
	        replace: true,
	        priority:48,
	        transclude:true,
	        controller:function($scope,$element,$attrs,$transclude){
	        	//debugger
	        },
	        link:function($scope,$element,$attr,controller){
	         	// body...
	         	 //debugger
	         	 drawElement($scope,$element,$attr,$compile);
	         	 // if($attr.icon) $element.append('<i class="'+$attr.icon+'"></i>');
	         	 // if($attr.text) $element.append('<span >'+$attr.text+'</span>');
	         	
	        }
		} 
}])

/*
* @无状态组件
*
*/

// 声明组件顺序

// 加载依赖
import React , {PropTypes} from 'react';
 
 //属性验证
 const propTypes = {
 	item : PropTypes.object.isRequired,
 	onClick:PropTypes.func.isRequired
 } 
//组件主体，这里是stateless function,所以直接就是一个函数

function ListItem ({item,onClick}){
	//返回jsx结构（虚拟DOM）
	let formatTime = '未知时间';
	if (item.time) {
	    formatTime = new Date(item.time).toISOString().match(/(\d{4}-\d{2}-\d{2})/)[1];
	 }
	return (
		<a href="#"
		   className="list-group-item item-component"
		   onClick={onClick}>
		   <span className="label label-default label-pill pull-xs-right">
		   	{formatTime}
		   </span>
		  <span className="item-title">
		  	{item.title}
		  </span>
		</a>
	)
}

///添加验证
ListItem.propTypes = propTypes;

//导出组件
export default ListItem;
/*
* @author panglidong
* @des profile test
*/
import React from 'react';

export default Class Profile  extends React.Component {
	//render 是这个组件的Vritural Dom 结构
	render(){
		return (
			<div className = "profile-component">
				{/*this.props 就是待传入的属性*/}
				<h1>我的名字叫{this.props.name}</h1>
				<h2>我今年{this.props.age}岁</h2>
			</div>
		)
	}
}
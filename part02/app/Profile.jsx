/*
* @author panglidong
* @des profile test
*/
import React , {PropTypes} from 'react';
import Hobby from './Hobby'

//需要验证的属性

const propTypes = {
	name : PropTypes.string.isRequired,
	age : PropTypes.number.isRequired
};

class Profile  extends React.Component {
	/*
	* state状态
	* 构造函数中定义初始化组件state,通过state变化渲染不同UI
	* 调用this.setState方法组件再次调用render方法
	*/
	constructor(props){
		super(props);
		//定义初始化state
		this.state  = {
			liked : 0,
			hobbies:['rock music','ball']
		}
		//由于ES6 class类型的component组件声明方式中，
		//不会把一些自定义的callback函数绑定到实例.
		//需要手动在constructor绑定。
		this.likedCallback = this.likedCallback.bind(this);
		this.addHobbyCallback = this.addHobbyCallback.bind(this);
	}
	/*
	*componentWillMount搜索 组件出现前 就是dom还没有渲染到html文档里面
	*componentDidMount 组件render渲染完成且组件装载完成之后调用
	*/
	componentDidMount(){
		setTimeout(() => {
			this.likedCallback();
		},1000);
	}

	likedCallback(){
		let liked = this.state.liked;
		liked ++;
		this.setState({liked});
	}

	addHobbyCallback(){
		//通过this.refs.name 获取Dom节点
		let hobbyInput = this.refs.hobby;
		let hobbyVal = hobbyInput.value;

		if(hobbyVal){
			let hobbies = this.state.hobbies;
			//添加值到数组
			hobbies = [...hobbies,hobbyVal];

			this.setState(
			{
				hobbies
			},() => {
				hobbyInput.value = "";
			})
		}
	}

	//render 是这个组件的Vritural Dom 结构
	render(){
		return (
			<div className = "profile-component">
				{/*this.props 就是待传入的属性*/}
				<h1>我的名字叫{this.props.name}</h1>
				<h2>我今年{this.props.age}岁</h2>
				<button onClick={this.likedCallback}>给我点赞</button>
				<h2>总的点赞数：{this.state.liked}</h2>
				<h2>我的爱好：</h2>
				<ul>
					{this.state.hobbies.map((hobby,i) =>
						<Hobby key={i} hobby={hobby} />
					)}
				</ul>
				<input type="text" ref="hobby" />
				<button onClick={this.addHobbyCallback}>添加爱好</button>
			</div>
		)
	}
}

///将验证赋值给这个组件的propTypes属性
Profile.propTypes = propTypes

export default Profile;
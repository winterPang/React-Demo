import React,{PropTypes} from 'react';

const propTypes = {
	hobby : PropTypes.string.isRequired
}

/*
*   无状态函数式组件，大部分组件式无状态的
*	职责单一只是输入生成组件
*/
function Hobby(props) {
  return <li>{props.hobby}</li>;
}

///需要定义state
/*class Hobby extends React.Component{
	render() {
			return (<li>{this.props.hobby}</li>)
	}
}*/



///
Hobby.propTypes = propTypes;
export default Hobby;
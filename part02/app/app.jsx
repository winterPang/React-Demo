import  {render} from 'react-dom';
import Profile from './Profile';

/*render (
	<Profile name='viking' age = 20 />,
	document.getElementById('container')
);*/

/*或者可以使用... 属性扩展*/
const ele = document.getElementById('container');
document.body.appendChild(ele);
const props = {
	name : "viking",
	age : 20
};

render(<Profile  {...prps}/>,ele);


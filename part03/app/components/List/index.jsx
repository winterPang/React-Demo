import React , {PropTypes} from 'react';
import ListItem from '../ListItem'

const propTypes = {
	items : PropTypes.array.isRequired,
	onSelect : PropTypes.func.isRequired
}


function List({items,onSelect}){
	//虚拟DOM
	const itemsContent  = items.map(
		 item => (
		      <ListItem
		        item={item}
		        key={item.id}
		        onClick={() => onSelect(item.id)}
		      />
		    )
		);

	return (
		<div className="list-component">
      		{itemsContent}
    	</div>
	)
}

///校验属性赋值
List.propTypes = propTypes;

export default List;
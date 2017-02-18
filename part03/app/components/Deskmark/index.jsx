/*
* 类似无状态组件都已经创建
* 乐高积木组合这些无状态组件
* 整合所有无状态组件的综合合数
*
*/

import React from 'react';
import uuid from 'uuid';

import CreateBar from '../CreateBar';
import ItemEidtor from '../ItemEidtor';
import ItemShowLayer from '../ItemShowLayer';
import List from '../List';

import './style.scss';

class App extends React.Component{
	constructor(props){
		super(props);
		/*
	    * state设计原则：尽量简化数据
	    *   
	    **/
		this.state = {
			items : [],       //需要数组存储所有的文章
			selectedId :null, //需要一个数据来展示选中的文章。需要selectI索引检索就好
			editing:false  	  //需要一个数据来表示编辑状态
		};

		/*添加组件交互设计*/
		this.selectItem = this.selectItem.bind(this);
		this.saveItem =  this.saveItem.bind(this);
		this.createItem = this.createItem.bind(this);
		this.editItem = this.editItem.bind(this);
		this.cancelEdit = this.cancelEdit.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}
	
	//添加
	saveItem(item){
		//item 是编辑器放回的对象，里面应该包括标题和内容
		let items  = this.state.items;
		
		if(!item.id){
			item.id = uuid.v4();
			item.time = new Date().getTime();

			//新的state 尝试用扩展符号
			items = [...items, item];
		}
		// existed item
		else
		{
			items = items.map(
				exist => exist.id === item.id? exist=item: exist
			)
		}
		
		//更新新的state
		this.setState({
			items : items,
			selectedId: item.id,
      		editing: false
		})
	}

	//选择文章
	selectItem(id){
		if(id === this.state.selectedId){
			return
		}

		this.setState({
			selectedId:id,
			editing:false
		})
	}

	//delete 文章
	deleteItem(id){
		if(!id){
			return
		}

		this.setState({
			items : this.state.items.filter(
				item => item.id !== id
			)
		})

	}

	//新建文章
	createItem(){
		this.setState({
			selectedId : null,
			editing:true
		})
	}

	//更新文章
	editItem(id){
		this.setState({
			selectedId : id,
			editing : true
		})
	}

	//取消编辑
	cancelEdit(){
		this.setState(
		{
			editing:false
		})

	}

	render(){
		const {items,selectedId,editing}  = this.state;
		const selected = selectedId && items.find( item => item.id === selectedId);
		const mainPart = editing 
		? (
			<ItemEidtor  
				item = {selected}
				onSave = {this.saveItem}
				onCancel = {this.cancelEdit} 
			>
			</ItemEidtor>
		) 
		: (
			<ItemShowLayer
				item = {selected}
				onEdit = {this.editItem}
				onDelete = {this.deleteItem}
			>
			</ItemShowLayer>
			
		);

		return (
			<section className = "deskmark-compent">
				<div className = "container">
					<div className = "row">
						<div className ="col-md-4 list-group">
							<CreateBar onClick = {this.createItem}/>
							<List 
								items = {this.state.items} 
								onSelect = {this.selectItem}
							/>
						</div>
						{mainPart}
					</div>
				</div>
			</section>
		
		);
	}
};

export default App;

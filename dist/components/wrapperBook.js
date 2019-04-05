import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form from './form';
import {create, edit} from '../action/';

class WrapperBook extends Component {
	handleSubmit=(value)=>{
		const {id} = this.props;
		if(id){
			this.props.editBook(value, id)
		}else{
			this.props.createBook(value)
		}
	}
	render(){
		return(
			<div>
				<h1>{this.props.count}</h1>
				<Form onSubmit={this.handleSubmit}/>
			</div>
			)
	}
}

export default connect(null,
	{createBook:create,
	 editBook: edit}
	)(WrapperBook)

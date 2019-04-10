import React, {Component} from 'react';
import {connect} from 'react-redux';
import Form from './form';
import {create, edit, bookHaveCreated} from '../action/';
import {Redirect} from 'react-router';

class WrapperBook extends Component {
	state = {
		redirect: false
	}
	handleSubmit=(value)=>{
		const {id} = this.props;
		if(id){
			this.props.editBook(value, id)
			this.props.toggleEdit()

		}else{
			this.props.createBook(value)
			this.props.bookHaveCreated()

			this.setState({
				redirect: true
			})
		}
	}
	render(){
		const {redirect} = this.state;
		if(redirect){ 
			return <Redirect to="/bookList"/>
		}else{
			return(
				<div>
					<h1>{this.props.count}</h1>
					<Form onSubmit={this.handleSubmit}
						  id={this.props.id}
						  toggleEdit={this.props.toggleEdit}
					/>
				</div>
				)
		}
	}
}

export default connect(null,
	{createBook:create,
	 editBook: edit,
	 bookHaveCreated: bookHaveCreated
	}
	)(WrapperBook)

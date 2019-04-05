import React, {Component} from 'react'
import WrapperBook from './wrapperBook'

export default class BookEdit extends Component {
	state = {
		edit: true
	}
	render(){
		return(
			<div className="item edit">
				<div className="delete" onClick={this.props.toggle}>&times;</div>
				<WrapperBook id={this.props.id}/>
			</div>
		)
	}
}


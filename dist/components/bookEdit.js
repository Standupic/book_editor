import React, {Component} from 'react'
import Create from './create'

class BookEdit extends Component {
	state = {
		edit: false
	}
	render(){
		return(
			<div className="item edit">
				<div className="delete">&times;</div>
				<Create />
			</div>
		)
	}
}

module.exports = BookEdit;
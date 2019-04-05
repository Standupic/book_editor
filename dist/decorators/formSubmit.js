import React, {Component} from 'react';

export default (OriginalComponent) => 
	class FormSibmit extends Component {
		state = {

		}
		handleSubmit=(value)=>{
			console.log(value)
		}
		render(){
			return(
				<OriginalComponent
					{...this.props}
					onSubmit={this.handleSubmit}
				/>
			)
		}
	}

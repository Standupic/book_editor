import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import App from '../components/app'
import {HashRouter} from 'react-router-dom';


class MyUploader extends Component {
	state = {
		img: ""
	}
	onChange=(e)=>{
		const file = e.target.files;
		const reader = new FileReader();
		reader.readAsDataURL(file[0])

		reader.onload=(e)=>{
			this.setState({
				img: e.target.result
			})
		}

	}
	render() {
		return (
			<div>
				<img src={this.state.img}/>
				<input type="file" name="sampleFile" onChange={(e)=>{this.onChange(e)}}/>
			</div>
		);
	}
}

ReactDOM.render(<HashRouter><App/></HashRouter>,document.getElementById('app'));
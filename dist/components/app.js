import React, {Component} from 'react'
import BookList from './bookList'
import Create from './create'
import Home from './home'
import Nav from './nav'
import Menu from './menu'

class App extends Component{
	state= {
		
	}
	render(){
		return(
			<div class="wrap_main">
				<Menu/>
				<div class="content">
				 <Nav create={Create} bookList={BookList} home={Home}/>
			   </div>
			</div>
		)
	}
}

module.exports = App;
import React, {Component} from 'react'
import BookList from './bookList'
import WrapperBook from './WrapperBook'
import Home from './home'
import Nav from './nav'
import Menu from './menu'

export default class App extends Component{
	render(){
		return(
			<div class="wrap_main">
				<Menu/>
				<div class="content">
				 <Nav create={WrapperBook} bookList={BookList} home={Home}/>
			   </div>
			</div>
		)
	}
}

import React,{Component} from 'react'
import Book from './book'

class BookList extends Component{
	state = {
		books: [{
			title: "Secret of the JavaScript Ninja",
			autor: "by John Resig, Bear Bibeault",
			year: "2008",
			page: "370",
			published: "14.01.2008",
			isbn: "193398869X (ISBN13: 9781933988696)",
			publishing_house: "Manning"
		},{
			title: "Secret of the JavaScript Ninja",
			autor: "by John Resig, Bear Bibeault",
			year: "2008",
			page: "370",
			published: "14.01.2008",
			isbn: "193398869X (ISBN13: 9781933988696)",
			publishing_house: "Manning"
		},
		{
			title: "Secret of the JavaScript Ninja",
			autor: "by John Resig, Bear Bibeault",
			year: "2008",
			page: "370",
			published: "14.01.2008",
			isbn: "193398869X (ISBN13: 9781933988696)",
			publishing_house: "Manning"
		}]
	}
	render(){
		return(
			<div className="wrap_books">
			<h1>Your Books:</h1>
				<div class="wrap_items">
					{this.state.books.map((item, key)=>{
						return(
							<Book book={item}/>
						)
					})}
				</div>
			</div>
		)
	}
}

module.exports = BookList;
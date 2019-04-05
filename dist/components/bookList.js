import React,{Component} from 'react'
import Book from './book'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

class BookList extends Component{
	render(){
		console.log(this.props.books.length)
		if(!this.props.books.length){
			return(
				<div className="wrap_books">
					<h2>Your Books:</h2>
					<p>
						There is not books. You have to create one. Link to  
						<a><Link to='/create'>Create book</Link></a>
					</p>
				</div>
			)
		}else{
			return(
				<div className="wrap_books">
				<h1>Your Books:</h1>
				<h1>{this.props.count}</h1>
					<div class="wrap_items">
						{this.props.books.map((item, key)=>{
							return(
								<Book book={item} key={item.id}/>
							)
						})}
					</div>
				</div>
			)
		}
	}
}

export default connect(state =>({
	books: state.books,
	count: state.count
}))(BookList);
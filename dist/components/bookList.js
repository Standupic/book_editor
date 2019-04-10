import React from 'react'
import Book from './book'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Filter from './filter'

const BookList=({books})=>{
	if(!books.length){
		return(
			<div className="wrap_books">
				<h2>Your Books:</h2>
					<p>
						There is not books. You have to create one. Link to  
						<NavLink to='/create'>Create book</NavLink>
					</p>
			</div>
		)
	}else{
		return(
			<div className="wrap_books">
				<h1>Your Books:</h1>
				<Filter />
				<div class="wrap_items">
					{books.map((item, key)=>{
						return(
							<Book book={item} key={item.id}/>
						)
					})}
				</div>
			</div>
		)
	}
}

export default connect((state)=>{
	const {selected} = state.filter;
	const filteredBook = state.books.filter((book)=>{
		return !selected.length || selected.find((select) => select.value === book.id)
	})
	return {
		books: filteredBook
	}
})(BookList)


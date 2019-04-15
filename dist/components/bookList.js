import React from 'react'
import Book from './book'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Filters from './filters'

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
				<Filters />
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
	const {selected, dataRange:{from, to}} = state.filter;
	const filteredBook = state.books.filter((book)=>{
		const published = Date.parse(book.date)
		return(
			   (!selected.length || selected.find((select) => select.value.toLocaleLowerCase() === book.title.toLocaleLowerCase())) && 
			   (!from || !to || (published >= from && published <= to))  
		)
	})
	return {
		books: !filteredBook.length ? state.books : filteredBook 
	}
})(BookList)


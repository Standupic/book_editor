import React from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {bookFilter} from '../action'



const Filter = ({books, filter, handleFiltred,isClearable})=> {
	const options = books.map((book) => ({
		label: book.title,
		value: book.id
	}))

 	return <Select 
 			value={filter} 
 			onChange={handleFiltred} 
 			options={options}
 			isClearable={isClearable}
 			/>
}

export default connect((state)=>({
	books: state.books,
	filter: state.filter.selected,
	isClearable: state.filter.isClearable
}),{handleFiltred: bookFilter})(Filter)
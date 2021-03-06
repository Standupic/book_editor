import React from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {bookFilter} from '../../action'
import uniqBy from 'lodash/uniqBy'

const Filter = ({books, filter, handleFiltred,isClearable})=> {
	const options = books.map((book) => ({
		label: book.title,
		value: book.title
	}))

 	return(
 		<div className="wrap_select">
 			<Select 
 				value={filter} 
 				onChange={handleFiltred} 
 				options={uniqBy(options,"value")}
 				isClearable={isClearable}
 			/>
 		</div>
 		)
}

export default connect((state)=>({
	books: state.books,
	filter: state.filter.selected,
	isClearable: state.filter.isClearable
}),{handleFiltred: bookFilter})(Filter)
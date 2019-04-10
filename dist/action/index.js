let idBook = 1;
export const create = (book)=>({
	type: "CREATE",
	payload: {book,id:idBook++}
})

export const edit = (book, id)=>({
	type: "EDIT",
	payload: {book},
	id: id
})

export const deleteBook = (id)=>({
	type: "DELETE",
	id: id
})

export const bookHaveCreated = ()=>({
	type: "BOOK_HAVE_CREATED"
})

export const bookFilter = (selected)=>({
	type: "BOOK_FILTER",
	payload: {selected}
})

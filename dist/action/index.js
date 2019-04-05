export const create = (book)=>({
	type: "CREATE",
	payload: {book}
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
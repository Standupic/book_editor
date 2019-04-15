import  {v4} from 'node-uuid';

export const create = (book)=>({
	type: "CREATE",
	payload: {book,id:v4()}
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

export const loadImg = (img, id)=>({
	type: "IMG_LOAD",
	payload: {img},
	id: id
})

export const changeDataRange = (dataRange)=>({
	type: "CHANGE_DATE_RANGE",
	payload: {dataRange}
})
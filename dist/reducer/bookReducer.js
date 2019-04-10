export default (state=[], action) =>{
	const {type, payload} = action
	switch(type){
		case "CREATE":
			payload.book.id = payload.id;
			return state.concat(payload.book)
		case "EDIT":
			return state.map((book, index)=>{
				if(book.id == action.id){
					return{
						...book,
						...payload.book
					}
				}
			})
		case "DELETE":
			return state.filter((book) => book.id !== action.id)
		default:
			return state
	}
	
}
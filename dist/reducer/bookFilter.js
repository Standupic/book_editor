const defaultState = {
	selected: [],
	isClearable: true
}

export default (state = defaultState, action) => {
	const {type, payload} = action
	console.log(type, payload)
	switch(type){
		case "BOOK_FILTER":
			return {...state, selected: payload.selected ? [{...payload.selected}] : []}

		default: 
		return state
	}
}
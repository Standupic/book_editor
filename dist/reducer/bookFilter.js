const defaultState = {
	selected: [],
	isClearable: true,
	dataRange: {
		from: null,
		to: null
	}
}
export default (state = defaultState, action) => {
	const {type, payload} = action
	console.log(type)
	switch(type){
		case "BOOK_FILTER":
			return {...state, selected: payload.selected ? [{...payload.selected}] : []}
		
		case "CHANGE_DATE_RANGE":
			return {...state, dataRange: payload.dataRange}

		default: 
			return state
	}
}
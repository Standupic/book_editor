import {reducer as formReducer} from 'redux-form';

export default formReducer.plugin({
	create: (state, action) =>{
		switch(action.type){
			case "BOOK_HAVE_CREATED":
				return undefined;
			default:
				return state;
		}
	} 
})
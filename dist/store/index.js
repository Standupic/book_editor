import {createStore, combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'
import reducer from '../reducer'

const rootReducer = combineReducers({
	form: formReducer,
	books: reducer
})

const initialState = {
		fieldErrors: {},
		books: [],
		requiredFields: false,
		count: 1
	};
	
const store = createStore(rootReducer)

console.log(store.getState())

export default store
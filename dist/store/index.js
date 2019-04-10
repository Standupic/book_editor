import {createStore, combineReducers} from 'redux'
import books from '../reducer/bookReducer'
import form from '../reducer/formReducer'
import filter from '../reducer/bookFilter'

const rootReducer = combineReducers({
	  form,
	  books,
	  filter
})

const store = createStore(rootReducer)

console.log(store.getState())

export default store
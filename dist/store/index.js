import {createStore, combineReducers} from 'redux'
import {loadState, saveState} from '../localStorage'
import books from '../reducer/bookReducer'
import form from '../reducer/formReducer'
import filter from '../reducer/bookFilter'
import throttle from 'lodash/throttle';

const getStateLocalStorage = loadState()

const rootReducer = combineReducers({
	  form,
	  books,
	  filter
})

const store = createStore(rootReducer,getStateLocalStorage)

// store.subscribe(throttle(()=>{
// 	saveState(store.getState());
// }),1000)

export default store
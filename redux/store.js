import {combineReducers,createStore} from 'redux';
import {productReducer} from './reducer/productReducers';
import {SuggestionReduser} from './reducer/suggestionReducer';

const Reducers = combineReducers({
 productlist : productReducer,
 suggestion : SuggestionReduser
})

const store = createStore(Reducers);

export {store};
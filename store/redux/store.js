import {combineReducers,createStore} from 'redux';
import {productReducer} from './reducer/productReducers';
import {SuggestionReduser} from './reducer/suggestionReducer';
import {CategoriesReduce} from './reducer/CategoriesReducer';
import {ProductDetailsReducer} from './reducer/ProductDetailsReducer';
import {Cartcount} from './reducer/CartReducer';

const Reducers = combineReducers({
 productlist : productReducer,
 suggestion : SuggestionReduser,
 categoreis : CategoriesReduce,
 details: ProductDetailsReducer,
 CartCount : Cartcount
})

const store = createStore(Reducers);

export {store};
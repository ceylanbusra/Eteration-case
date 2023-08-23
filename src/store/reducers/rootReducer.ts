import {combineReducers} from 'redux';
import BasketReducer from './basketReducer';
import productReducer from './productReducer';
import FavoriteListReducer from './favoriteListReducer';

export default combineReducers({
  product: productReducer,
  basketList:BasketReducer,
  favoriteList:FavoriteListReducer
});


import {combineReducers} from 'redux';
import StoreStateType from './storeStateType';
import missionReducer from './Mission/missionReducer';

export default combineReducers<StoreStateType>({
     missions:  missionReducer
})

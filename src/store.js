import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';

const prevUserInfo = (state = {
    isFetching: false,
    isEmpty: false,
    isError:false,
    errorMessage:'',
    tokens: []
  },action) => {
    switch(action.type) {
        case 'GET_TOKENS_REQUEST': 
          return { ...state, isFetching: true };
        case 'GET_TOKENS_SUCCESS': 
          return { ...state, isFetching: false, tokens: action.tokens, isEmpty:action.tokens.length===0?true:false };
        case 'GET_TOKENS_FAILURE': 
          return { ...state, isFetching: false, errorMessage: action.message, isError:true };
        default: 
          return state;
    }
}
const userInfo = (state = {
    isFetching: false,
    isEmpty: false,
    isError:false,
    errorMessage:'',
    user: {}
  },action) => {
    switch(action.type) {
        case 'GET_USERINFO_REQUEST': 
          return { ...state, isFetching: true };
        case 'GET_USERINFO_SUCCESS': 
          return { ...state, isFetching: false, user: action.user, isEmpty:action.user===undefined?true:false };
        case 'GET_USERINFO_FAILURE': 
          return { ...state, isFetching: false, errorMessage: action.message, isError:true };
        default: 
          return state;
    }
}

const logger = store => next => action => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state',store.getState());
    return result;
}
export default compose(applyMiddleware(logger,thunk))(createStore)(combineReducers({userInfo:userInfo, prevUserInfo: prevUserInfo}));
//export default createStore(combineReducers({userInfo:userInfo, prevUserInfo: prevUserInfo}), applyMiddleware(logger,thunk));
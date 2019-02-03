import axios from 'axios';
import store from './store';

const loadTokens = () => {
    // return {
    //     type:"LOAD_TOKENS",
    //     tokens: [{email:'emailprueba',token:'tokenprueba'}]
    // };
    store.dispatch({ type: 'GET_TOKENS_REQUEST' });
    const profile = {};
    //...fill your object like this for example
    profile['email'] = 'kevin@karaokesmart.co';
    return dispatch => {
        return axios.post("https://api2.karaokesmart.co/v2/user/search/",profile)
            .then(response => {
                console.log('response',response);
                dispatch({
                    type:"GET_TOKENS_SUCCESS",
                    tokens: response.data.data.users
                })
            });
    };
};
const loadUser = token => {
    console.log('token',token);
    store.dispatch({ type: 'GET_USERINFO_REQUEST' });
    const authorization = 'token ' + token;
    return dispatch => {
        return axios.get('https://api2.karaokesmart.co/v2/customer/info/user/', {
            headers: {
                "content-type": "application/x-www-form-urlencoded",
                "Authorization": authorization
            }
        }).then(response => {
                console.log('response',response);
                dispatch({
                    type:"GET_USERINFO_SUCCESS",
                    user: response.data.data
                })
            });
    };
};
const addToCart = product => {
    return {
        type:"ADD_TO_CART",
        product: product
    };
};
const removeFromCart = product => {
    return {
        type: "REMOVE_FROM_CART",
        product: product
    };
};

export { addToCart, removeFromCart, loadTokens, loadUser };
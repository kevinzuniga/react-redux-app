import React, { Component } from 'react';
import {addToCart} from '../actionCreators';
import {connect} from 'react-redux';

export class UserInfo extends Component {
  //console.log('userInfo',userInfo);
  componentDidUpdate(prevProps) {
    //store.dispatch(loadUser(tokens[0].token));
  }
  renderSwitch = ({isFetching,isEmpty,isError,errorMessage,user}) =>{
    console.log('user',user);
    return;
    //{isFetching,isEmpty,isError,errorMessage,user}
    if (isFetching) return <h2>Loading...</h2>;
    if (isError) return <h2>{errorMessage}</h2>;
    if (isEmpty) return <h2>Empty.</h2>
    else return user===undefined?<h2>Sin datos...</h2>:
      <div key={0}>
        <h2>{user.id}</h2>
        <h2>{user.name}</h2>
        <h2>{user.email}</h2>
        <h2>{user.country}</h2>
        <h2>{user.os}</h2>
        <h2>{user.platform}</h2>
        <h2>{user.brand}</h2>
        <h2>{user.date_created}</h2>
        <h2>{user.premium}</h2>
        <h2>{user.email_valid}</h2>
        <h2>{user.facebook_id}</h2>
        <h2>{user.was_premium}</h2>
      </div>
  }
  render(){
    return (
      <div>   
        {this.renderSwitch(this.props.userInfo)}
      </div>
    );
  }
  
}

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo
    };
};
const mapDispatchToProps = dispatch => {
    return {
      addToCart(product){
        dispatch(addToCart(product))
      }
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(UserInfo);

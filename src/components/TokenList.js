import React, { Component } from 'react';
import {loadUser} from '../actionCreators';
import {connect} from 'react-redux';
import { Button } from 'react-bootstrap';
import store from '../store';
import { UserInfo } from './InfoUser';

const styles = {
  tokens: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  token: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};



export class TokenList extends Component {
  //console.log('prevUserInfo',loadUser);
  //if (prevUserInfo.tokens.length===1) store.dispatch(loadUser(prevUserInfo.tokens[0].token));
  componentDidUpdate(prevProps) {
    console.info('this.prevProps',this.prevProps);
    console.info('this.props',this.props);
    if (this.props.prevUserInfo.tokens && this.props.prevUserInfo.tokens.length === 1)store.dispatch(this.props.loadUser(this.props.prevUserInfo.tokens[0].token));
  }
  renderSwitch = ({isFetching,isEmpty,isError,errorMessage,tokens},loadUser) =>{
    //console.log('isFetching',isFetching);
    //console.log('tokens',tokens);
    if (isFetching) return <h2>Loading...</h2>;
    if (isError) return <h2>{errorMessage}</h2>;
    if (isEmpty) return <h2>Empty.</h2>
    else switch(tokens.length) {
      case 0:
        return <h2>Sin datos...</h2>;
      case 1:
        //store.dispatch(loadUser(tokens[0].token));
        return <div key={0}>
          <h4>{tokens[0].email}</h4>
          <h4>{tokens[0].token}</h4>
        </div>;
      default:
        return tokens.map((user,index)=>
        <div key={index}>
          <h4>{user.email}</h4>
          <h4>{user.token}</h4>
        </div>
      );
    }
  }
  render(){
    return (
      <div style={styles.tokens}>   
        {this.renderSwitch(this.props.prevUserInfo,this.props.loadUser)}
      </div>
    );
  }
  
}

const mapStateToProps = state => {
    return {
      prevUserInfo: state.prevUserInfo
    };
};
const mapDispatchToProps = dispatch => {
    return {
      loadUser(token){
        dispatch(loadUser(token))
      }
    };
  };
export default connect(mapStateToProps,mapDispatchToProps)(TokenList);

import React, { Component } from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';
import TokenList from './components/TokenList';
import InfoUser from './components/InfoUser';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse staticTop>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Ecommerce</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <Grid>
          <Row>
            <TokenList/>
          </Row>
          <Row>
            <InfoUser />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;

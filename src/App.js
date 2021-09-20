import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Feedback from './pages/Feedback';
import HomeServices from './pages/HomeServices';
import RoadServices from './pages/RoadServices';
import Requests from './pages/Requests';
import { Row, Col, Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Container>
            <Switch>
              <Route exact path='/'>
                <Row>
                  <Col style={{ marginTop: 10 }} md={{ span: 15, offset: 0 }}>
                    <Home />
                  </Col>
                </Row>
              </Route>
              <Route exact path='/HomeServices'>
                <HomeServices />
              </Route>
              <Route exact path='/RoadServices'>
                <RoadServices />
              </Route>
              <Route exact path='/Requests'>
                <Requests />
              </Route>
              <Route path='/Feedback'>
                <Feedback />
              </Route>
              <Route exact path='/AboutUs'>
                <AboutUs />
              </Route>
            </Switch>
          </Container>
        </Router>
        <Footer />
      </div>
    );
  }
}

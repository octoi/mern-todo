import React from 'react';
import Chakra from './components/Chakra';
import { Context } from './context/Context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@chakra-ui/react';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';

export default function App() {
  return (
    <Chakra>
      <Context>
        <Container mt={10} maxW="container.xl">
          <Router>
            <Header />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
            </Switch>
          </Router>
        </Container>
      </Context>
    </Chakra>
  )
}

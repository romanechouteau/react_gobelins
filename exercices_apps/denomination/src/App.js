import {Component} from 'react'
// import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import './App.css'
import Denomination from './components/Denomination'

const denominations = [1, 5, 10, 20, 50, 100, 200]

class App extends Component {
  render() {
    return (
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/denomination" >Dénomination</Link>
            </li>
            <li>
              <Link to="/result/1" >Result 1</Link>
            </li>
            <li>
              <Link to="/result/2" >Result 2</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <h1>Dénomination</h1>
            <p>Cliquer sur dénomination pour commencer</p>
          </Route>
          <Route exact path="/denomination" component={ ({location}) => <Denomination denominations={denominations} location={location} /> } />
          <Route exact path="/result/:id" component={ (props) => {
            const { params: {id} } = props.match
            return (
              <p>Post {id}</p>
            )
          } } />
          <Route path="*">
            <h1>Erreur 404</h1>
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App

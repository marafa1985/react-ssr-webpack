import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, Job } from './pages'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route path='/job/:id' >
          <Job />
        </Route>
        <Route path='/' >
          <Home />
        </Route>

      </Switch>
    )
  }
}

export default App
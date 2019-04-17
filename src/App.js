import React, { Component } from 'react';
//Import the routing module.
import {BrowserRouter,Switch, Route} from 'react-router-dom';
//Let's import the navbar function in the file
import Navbar from './components/layout/Navbar';
//Let's import the Dashboard function in the file
import Dashboard from './components/dashboard/Dashboard'
//Let's import the ProjectDetails function in the file
import ProjectDetails from './components/projects/ProjectDetails'

import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import CreateProject from './components/projects/CreateProject'

class App extends Component {
  render() {
    return (
      //other components must be included in the BrowserRouter component
      <BrowserRouter>
        <div className="App">
        <Navbar />
        {/* we keep the routing routing together with the switch. */}
        <Switch>
            <Route exact path='/'component={Dashboard} />
            {/* we are routing to the page when referring to the id. */}
            <Route path='/project/:id' component={ProjectDetails} />
            {/* required settings for routing */}
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateProject} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

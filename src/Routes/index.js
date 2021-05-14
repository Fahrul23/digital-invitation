import React from 'react';
import {Switch,Route} from "react-router-dom";
import LandingPage from '../LandingPage';
import Login from '../Login';
import Register from '../Register';
  

function Routes(props) {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <LandingPage />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
            </Switch>
        </div>
    );
}

export default Routes;
import React from 'react';
import {Switch,Route} from "react-router-dom";
import { Dashboard, LandingPage, Login, Pasangan, Register, TamuUndangan } from '../../pages';

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
                    <Register />
                </Route>
                <Route path="/admin">
                    <Dashboard />
                </Route>
                <Route path="/pasangan">
                    <Pasangan />
                </Route>
                
                <Route path="/tamuundangan">
                    <TamuUndangan />
                </Route>
            </Switch>
        </div>
    );
}

export default Routes;
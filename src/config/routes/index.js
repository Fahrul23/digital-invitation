import React from 'react';
import {Switch,Route} from "react-router-dom";
import { Acara, Dashboard, Galeri, LandingPage, Login, Pasangan, PerjalananCinta, Register, TamuUndangan } from '../../pages';

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
                <Route path="/admin/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/admin/pasangan">
                    <Pasangan />
                </Route>
                <Route path="/admin/tamuundangan">
                    <TamuUndangan />
                </Route>
                <Route path="/admin/acara">
                    <Acara/>
                </Route>
                
                <Route path="/admin/galeri">
                    <Galeri/>
                </Route>
                <Route path="/admin/perjalanancinta">
                    <PerjalananCinta/>
                </Route>
                
            </Switch>
        </div>
    );
}

export default Routes;
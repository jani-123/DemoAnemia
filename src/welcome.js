import React, { Component } from 'react';
import logo from './logo.svg';
import './welcome.css';
import imagen from './img/tiernos-retonos-7.jpg';


import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
    NavNavLink,
    Redirect
} from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="container welcome">
            <h1>Mis chispitas</h1>
            <div className="row">
                <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                    <center><img src={imagen} className="img-responsive bbgorrita" alt="Responsive image" /></center>
                </div>
                </div>
                <div className="textobb">
                    <p>Hola querida mamita, soy tu bebe Manolito, con esta aplicacioón no te olvidaras de darme mis chispitas y te ayudara a llevar el control para que yo, tu niño crezca sano y fuerte, #sinAnemia. COMO SUPERMAN</p>
                </div>
                <div className="next text-center">
                    <NavLink to={'/home'} className="btn btn-default btn-lg"><span className="glyphicon glyphicon-chevron-right"></span></NavLink>
                </div>
            </div>
            );
}

export default Welcome;
import React, { Component } from 'react';
import Utils from './Utils.js';
import './login.css';

import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom'

const Login = () => {
    return (
        <center>
            <div className="container login">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <i className="fa fa-question-circle" id="ayuda" aria-hidden="true"></i>
                        <img src="https://s-media-cache-ak0.pinimg.com/originals/56/46/4d/56464d61a65d71268b245c52485280c7.gif" className="img-responsive bebe-logo" alt="" />
                        <div className="img-transparent">
                            <h1 className="letra-1">Mis Chispitas</h1>
                        </div>
                        <hr className="hr" />
                        <h3 className="letra-2">"Mi niño saludable"</h3>
                        <h3 className="iniciar">Iniciar Sesión</h3>
                        <form>
                            <div className="form-group">
                                <input type="number" className="form-control input-1" id="input-1" name="dni" placeholder="D.N.I" />
                            </div>
                            <div className="col-md-12 checket">
                            <div className=" col-md-6 col-xs-6">
                                <div className="form-check valida">
                                    <label className="form-check-label">
                                        <input type="checkbox" />Mamá
                                </label>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-xs-6">
                                <div className="form-check valida">
                                    <label className="form-check-label">
                                        <input type="checkbox" />Enfermera
                                </label>
                                </div>
                            </div>
                            </div>
                            {<NavLink to={'/welcome'} type="submit" className="btn btn-default shake" id="button">ENTRAR</NavLink>}
                        </form>
                    </div>
                </div>
            </div>
        </center>

    )
}


export default Login;
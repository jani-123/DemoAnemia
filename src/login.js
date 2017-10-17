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

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numDni: null,
            activeMom: false,
            activeNurse: false
        }
    }

    inputDni(e) {
        this.setState({
            numDni: e.target.value
        });
        console.log(this.state.numDni);
    }
    checkMom(e) {
        this.setState({
            activeMom: e.target.checked
        });
        console.log("mama", this.state.activeMom);
    }
    checkNurse(e) {
        this.setState({
            activeNurse: e.target.checked
        });
        console.log("nurse", this.state.activeNurse);
    }

    render() {
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
                            <div className="row ">
                                <div className="col-lg-12">
                                    <div className="input-group buscador">
                                        <div className="input-group-btn">
                                            <button  type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Action <span className="caret" /></button>
                                            <ul className="dropdown-menu">
                                                <li><a href="#">Madre</a></li>
                                                <li role="separator" className="divider" />
                                                <li><a href="#">Enfermera</a></li>
                                            </ul>
                                        </div>
                                        <input  type="text" className="form-control" aria-label="..." />
                                    </div>
                                    <NavLink to={'/welcome'} type="submit" className="btn btn-default shake" id="button">Iniciar Sesión</NavLink>
                                </div>
                            </div>

                            </div>
                        </div>
                    </div>
            </center>
                )
    }
}
export default Login;
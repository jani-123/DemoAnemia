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
                            <img src="./img/bb6.gif" className="img-responsive bebe-logo" alt="" />
                            <div className="img-transparent">
                                <h1 className="letra-1">Mis Chispitas</h1>
                            </div>
                            <hr className="hr" />
                            <h3 className="letra-2">"Mi niño saludable"</h3>
                            <h3 className="iniciar">Iniciar Sesión</h3>
                            <form>
                                <div className="form-group">
                                    <input type="number" className="form-control input-1" id="input-1" name="dni" placeholder="D.N.I" onChange={(e) => this.inputDni(e)} required />
                                </div>
                                <div className="col-md-12 checket">
                                    <div className=" col-md-6 col-xs-6">
                                      <div className="form-check valida">
                                        <label className="form-check-label">
                                            <input type="checkbox" onChange={(e) => this.checkMom(e)} />Mamá
                                        </label>
                                       </div>
                                      </div>
                                      <div className="col-sm-6 col-md-6 col-xs-6">
                                        <div className="form-check valida">
                                          <label className="form-check-label">
                                             <input type="checkbox" onChange={(e) => this.checkNurse(e)} />Enfermera</label>
                                          </label>
                                        </div>
                                      </div>
                                  </div>
                            {
                                   this.state.activeMom ? 
                                    <NavLink to={'/welcome'} type="submit" className="btn btn-default shake" id="button">ENTRAR</NavLink>
                                    :
                                    <NavLink to={'/welcome'} type="submit" className="btn btn-default shake" id="button" disabled>ENTRAR</NavLink> 

                                }
                                 {
                                   this.state.activeNurse? 
                                    <NavLink to={'/home'} type="submit" className="btn btn-default shake" id="button">ENTRAR</NavLink>
                                    :
                                    <NavLink to={'/home'} type="submit" className="btn btn-default shake" id="button" disabled>ENTRAR</NavLink> 

                                }
                        </form>

                        </div>
                    </div>
                </div>
            </center>
        )
    }
}
export default Login;
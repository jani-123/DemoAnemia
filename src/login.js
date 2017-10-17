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
			active: false,
			user: null
		}
	}

	getUsers(e) {
		if ((e.target.value.length === 8 && this.state.user === 'Madre' || this.state.user === 'Enfermera')) {
			this.setState({
				active: true
			});
		}
		else
			this.setState({
				active: false
			});
	}

	selectUsers(e) {
		let n = e.currentTarget.id;
		this.setState({
			user: n
		})
		console.log(this.state.user);
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
											<button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User: {this.state.user}<span className="caret" /></button>
											<ul className="dropdown-menu">
												<li><a href="#" onClick={(e) => this.selectUsers(e)} id="Madre">Madre</a></li>
												<li role="separator" className="divider" />
												<li><a href="#" onClick={(e) => this.selectUsers(e)} id="Enfermera">Enfermera</a></li>
											</ul>
										</div>
										<input type="text" onChange={(e) => this.getUsers(e)} className="form-control" aria-label="..." placeholder="Dni" />
									</div>
									{
										this.state.active ?
											<NavLink to={'/welcome'} type="submit" className="btn btn-default shake" id="button">Iniciar Sesión</NavLink>
											:
											<NavLink to={'/welcome'} type="submit" className="btn btn-default shake" id="button" disabled>Iniciar Sesión</NavLink>
									}
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
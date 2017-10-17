import React, { Component } from 'react';
import Utils from './Utils.js';
import './nurse.css';
import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
    Redirect
} from 'react-router-dom'

const Nav = () => {
    const logoutSession = (e) => {
        e.preventDefault(); document.getElementById('logout-form').submit();
    }
    return (
        <nav className="navbar navbar-menu">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand title" href="home">MisChispitas</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li className="active"><NavLink to={"/home"}>Home<span className="sr-only">(current)</span></NavLink></li>
                        <li><NavLink to={"/reminder"}>Recordatorios</NavLink></li>
                        <li><NavLink to={"/login"}>Salir</NavLink></li>
                        <li><NavLink to={"/nurse"}>Nurse</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

const Reminders = () => {
    let title = "Usuarios";
    let recordatorios = [
        {
            fecha: "Maria",
            estado: 'green'
        },
        {
            fecha: "Magadalena",
            estado: 'green'
        },
        {
            fecha: "Frida",
            estado: 'orange'
        },
        {
            fecha: "Angelica",
            estado: 'green'
        },
        {
            fecha: "Eva",
            estado: 'danger'
        },
        {
            fecha: "Carla",
            estado: 'green'
        }, {
            fecha: "Rebeca",
            estado: 'orange'
        }, {
            fecha: "Maria",
            estado: 'green'
        },
        {
            fecha: "Magadalena",
            estado: 'green'
        },
        {
            fecha: "Frida",
            estado: 'orange'
        },
        {
            fecha: "Angelica",
            estado: 'green'
        },
        {
            fecha: "Eva",
            estado: 'danger'
        },
        {
            fecha: "Carla",
            estado: 'green'
        }, {
            fecha: "Rebeca",
            estado: 'orange'
        }, {
            fecha: "Maria",
            estado: 'green'
        },
        {
            fecha: "Magadalena",
            estado: 'green'
        },
        {
            fecha: "Frida",
            estado: 'orange'
        },
        {
            fecha: "Angelica",
            estado: 'green'
        },
        {
            fecha: "Eva",
            estado: 'danger'
        },
        {
            fecha: "Carla",
            estado: 'green'
        }, {
            fecha: "Rebeca",
            estado: 'orange'
        },
    ];
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="col-xs-3"><b>Buscar</b></div>
                    <input className="inp col-xs-9" type="text" />
                </div>
                <div id="mes" className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
                    <h3>
                        {title}
                    </h3>
                    <div className="row">
                        {
                            recordatorios.map((item, index) => {
                                return (
                                    <Reminder key={Utils.uuid()} item={item} index={index + 1} />

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
const Reminder = ({ item, index }) => {

    return (
        <div>

            {
                item.estado === 'green' ? <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 diasemana test-center verde">
                    <div className="col-xs-2">
                        <img src='./img/noty.png' className="noty" />
                    </div>
                    <div className="col-xs-10">
                        <h4 className="flechitas"><b>{item.fecha}</b></h4>
                        <p>Hola....</p>
                    </div>
                </div>
                    :
                    item.estado === 'orange' ? <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 diasemana test-center naranja">
                        <div className="col-xs-2">
                            <img src='./img/noty.png' className="noty" />
                        </div>
                        <div className="col-xs-10">
                            <h4 className="flechitas"><b>{item.fecha}</b></h4>
                            <p>Hola....</p>
                        </div>
                    </div>
                        :
                        item.estado === 'danger' ? <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 diasemana test-center rojo">
                            <div className="col-xs-2">
                                <img src='./img/noty.png' className="noty" />
                            </div>
                            <div className="col-xs-10">
                                <h4 className="flechitas"><b>{item.fecha}</b></h4>
                                <p>Hola....</p>
                            </div>
                        </div>
                            :
                            false
            }

        </div>
    )


}

const ReminderApp = () => {
    return (
        <div className="reminder">
            <Nav />
            <Reminders />
        </div>
    )
}

export default ReminderApp;
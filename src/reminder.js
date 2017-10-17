import React, { Component } from 'react';
import Utils from './Utils.js';
import './reminder.css';
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
                    </ul>
                </div>
            </div>
        </nav>
    );
}

const Reminders = () => {
    let title = "Recordatorios";
    let recordatorios = [
        {
            nota: "Cuida y alimenta a tu niño",
            semaforo: 1 //verde
        },
        {
            nota: "Tu niño necesita alimentarse",
            semaforo: 2//orange
        },
        {
            nota: "Una receta muy nutritiva para tu bb",
            semaforo: 1//rojo
        },
        {
            nota: "Sabes que tu niño necesita alimentarse...",
            semaforo: 2
        },
        {
            nota: "Si tu niño se siente mal, rápido al centro de salud",
            semaforo: 3
        },
        {
            nota: "Recuerda alimentar a tu niño",
            semaforo: 1
        }, {
            nota: "Cuida y alimenta a tu niño",
            semaforo: 1
        },
        {
            nota: "Tu niño necesita alimentarse",
            semaforo: 2
        },
        {
            nota: "Una receta muy nutritiva",
            semaforo: 1
        },
        {
            nota: "Sabes que tu niño necesita alimentarse...",
            semaforo: 2
        },
        {
            nota: "Si tu niño se siente mal, rápido al centro de salud",
            semaforo: 3
        },
        {
            nota: "Recuerda alimentar a tu niño",
            semaforo: 1
        }, {
            nota: "Cuida y alimenta a tu niño",
            semaforo: 2
        },
        {
            nota: "Tu niño necesita alimentarse",
            semaforo: 1
        }
    ];
    return (
        <div className="container">
            <div className="row recort">
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
                item.semaforo === 1 ? <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 diasemana test-center green">
                    <div className="col-xs-3">
                    <center><img src='https://d2gg9evh47fn9z.cloudfront.net/thumb_COLOURBOX5447029.jpg' className="noty" /></center>
                    </div>
                    <div className="col-xs-9">
                        <h4 className="flechitas"><b>{item.nota}</b></h4>
                        <p>Hola....</p>
                    </div>
                </div>
                    :
                    item.semaforo === 2 ? <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 diasemana test-center orange">
                        <div className="col-xs-3">
                        <center><img src='https://d2gg9evh47fn9z.cloudfront.net/thumb_COLOURBOX5447029.jpg' className="noty" /></center>
                        </div>
                        <div className="col-xs-9">
                            <h4 className="flechitas"><b>{item.nota}</b></h4>
                            <p>Hola....</p>
                        </div>
                    </div>
                        :
                        item.semaforo === 3 ? <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 diasemana test-center danger">
                            <div className="col-xs-3">
                                <center><img src='https://d2gg9evh47fn9z.cloudfront.net/thumb_COLOURBOX5447029.jpg' className="noty" /></center>
                            </div>
                            <div className="col-xs-9">
                                <h4 className="flechitas"><b>{item.nota}</b></h4>
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
import React, { Component } from "react";
import Utils from "./Utils.js";
import "./reminder.css";
import * as firebase from "firebase";
import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
    <nav className="navbar navbar-menu">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand title" href="home">
            Mis Chispitas
          </a>
        </div>
        <div
          className="collapse navbar-collapse deslizar"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav">
            <li className="active">
              <NavLink to={"/home"}>
                Home<span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={"/reminder"}>Recordatorios</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Salir</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Reminders = () => {
  let title = "Recordatorios";
  let recordatorios = [
    {
      note: "Cuida y alimenta a tu niño",
      semaforo: 1 //verde
    },
    {
      note: "Tu niño necesita alimentarse",
      semaforo: 2 //orange
    },
    {
      note: "Una receta muy nutritiva para tu bb",
      semaforo: 1 //rojo
    },
    {
      note: "Sabes que tu niño necesita alimentarse...",
      semaforo: 2
    },
    {
      note: "Si tu niño se siente mal, rápido al centro de salud",
      semaforo: 3
    },
    {
      note: "Recuerda alimentar a tu niño",
      semaforo: 1
    },
    {
      note: "Cuida y alimenta a tu niño",
      semaforo: 1
    },
    {
      note: "Tu niño necesita alimentarse",
      semaforo: 2
    },
    {
      note: "Una receta muy nutritiva",
      semaforo: 1
    },
    {
      note: "Sabes que tu niño necesita alimentarse...",
      semaforo: 2
    },
    {
      note: "Si tu niño se siente mal, rápido al centro de salud",
      semaforo: 3
    },
    {
      note: "Recuerda alimentar a tu niño",
      semaforo: 1
    },
    {
      note: "Cuida y alimenta a tu niño",
      semaforo: 2
    },
    {
      note: "Tu niño necesita alimentarse",
      semaforo: 1
    }
  ];
  return (
    <div className="container">
      <div className="row recort">
        <div id="mes" className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
          <h3>{title}</h3>
          <div className="row">
            {recordatorios.map((item, index) => {
              return (
                <Reminder key={Utils.uuid()} item={item} index={index + 1} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
const Reminder = ({ item, index }) => {
  return (
    <div>
      {item.semaforo === 1 ? (
        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 diasemana test-center green">
          <div className="col-xs-3">
            <center>
              <img
                src="https://image.flaticon.com/icons/png/128/417/417625.png"
                className="noty"
              />
            </center>
          </div>
          <div className="col-xs-9 textalrt">
            <h4 className="flechitas">
              <b>{item.note}</b>
            </h4>
            <p>Hola....</p>
          </div>
        </div>
      ) : item.semaforo === 2 ? (
        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 diasemana test-center orange">
          <div className="col-xs-3">
            <center>
              <img
                src="https://image.flaticon.com/icons/png/128/417/417625.png"
                className="noty"
              />
            </center>
          </div>
          <div className="col-xs-9 textalrt">
            <h4 className="flechitas">
              <b>{item.note}</b>
            </h4>
            <p>Hola....</p>
          </div>
        </div>
      ) : item.semaforo === 3 ? (
        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 diasemana test-center danger">
          <div className="col-xs-3">
            <center>
              <img
                src="https://image.flaticon.com/icons/png/128/417/417625.png"
                className="noty"
              />
            </center>
          </div>
          <div className="col-xs-9 textalrt">
            <h4 className="flechitas">
              <b>{item.note}</b>
            </h4>
            <p>Hola....</p>
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
};

const ReminderApp = () => {
  return (
    <div className="reminder">
      <Nav />
      <Reminders />
    </div>
  );
};

export default ReminderApp;

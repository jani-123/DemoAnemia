import React, { Component } from 'react';
import Utils from './Utils.js';
import './App.css';
import {
  BrowserRouter,
  Route,
  Switch,
  NavLink,
  Redirect
} from 'react-router-dom'

// class CalendarModel extends Component{
//   constructor(props){
//      super(props);
//      this.state = {
//         active : false
//      }
//   }
//   render(){
//     const dias = () =>{
//       let dias = [];
//     }
//   }


// }
const Nav = () => {
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
          <a className="navbar-brand title" href="#">MisChispitas</a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Home<span className="sr-only">(current)</span></a></li>
            <li><a href="#">Recordatorios</a></li>
            <li><a href="#">Ayudar</a></li>
            <li><a href="#">Salir</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

const Avatar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12">
          <img src="https://static.guiainfantil.com/pictures/84-4-la-evolucion-del-bebe-y-su-entorno-primer-mes.jpg" className="logo" />
        </div>
      </div>
    </div>
  )
}

const Calendar = () => {
  let title = "Octubre";
  let dias = [{
    fecha: "20-2017",
    estado: true
  },
  {
    fecha: "21/2017",
    estado: true
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "21/2017",
    estado: true
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "21/2017",
    estado: true
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "21/2017",
    estado: true
  },
  {
    fecha: "22/2017",
    estado: false
  }
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 mes">
          <h3>{title}</h3>
          <div className="row">
            {
              dias.map((item, index) => {
                console.log(index);
                return (
                  <Dias key={Utils.uuid()} item={item} index={index} />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}
const Dias = ({ item, index }) => {
  const eventDia = (e) => {
    console.log(e);
  }
  console.log("segundo", index);
  return (
    <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 dias">
      <span key={index} onClick={eventDia}>{index}</span>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <Nav />
      <Avatar />
      <Calendar />
    </div>
  )
}

export default Home;
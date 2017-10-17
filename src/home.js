import React, { Component } from 'react';
import Utils from './Utils.js';
import './home.css';
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
    <nav className="navbar navbar-menu sandwish">
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
        <div className="collapse navbar-collapse deslizar" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="active"><NavLink to={"/welcome"}>Welcome<span className="sr-only">(current)</span></NavLink></li>
            <li><NavLink to={"/reminder"}>Recordatorios</NavLink></li>

            <li><NavLink to={"/login"}>Salir</NavLink>

            </li>
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
          <center><img src="https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/14294954_553269731540490_94757999_n.jpg?ig_cache_key=MTMzNDg0MzI2NjIzOTI3NzAyMA%3D%3D.2" className="logo" /></center>
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
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  },
  {
    fecha: "22/2017",
    estado: false
  }
  ];
  return (
    <div className="container">
      <div className="row">
        <div id="mes" className="col-md-12 col-sm-12 col-xs-12 col-lg-12 mes">
          <h3>
            <span className="cmpd glyphicon glyphicon-chevron-left pull-left"></span>
            {title}
            <span className="cmpd glyphicon glyphicon-chevron-right pull-right"></span>
          </h3>
          <div className="row fecha">
            {
              dias.map((item, index) => {
                return (
                  <Dias key={Utils.uuid()} item={item} index={index + 1} />
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
    console.log(index);
    return(
      <div>
        { index ?
          <span key={index} id="span" data-toggle="modal" data-target="#myModal" className="color">{index}</span>
          :
          <span key={index} id="span" data-toggle="modal" data-target="#myModal">{index}</span>
        }
      </div>
    )
    
  }

  return (
    <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 dias test-center">

      <span key={index} id="span" data-toggle="modal" data-target="#myModal">{index}</span>
      <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel">Recordatorio</h4>
            </div>
            <div className="modal-body">
              Recuerda Darle los micro nutrientes a tu niño #sinAnemia
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Avatar />
      <Calendar />
      <div className="row news">
        <div className="col-xs-2">
          <img src="./img/noty.png" className="noty" />
        </div>
        <div className="col-xs-10">
          <p>Eres una mamá que se preocupa por su niño, sigue así.</p>
        </div>
      </div>
    </div>
  )
}

export default Home;
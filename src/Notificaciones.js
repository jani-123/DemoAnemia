import React, { Component } from 'react';
import logo from './logo.svg';
import './Notificaciones.css';


import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
    NavNavLink,
    Redirect
} from 'react-router-dom'

const ninos = [
    {
        url: "https://pbs.twimg.com/profile_images/548093274913640449/SZ7iTmc3_400x400.jpeg",
        title: "dfcgvhjklñlkjhgffgbhnjkml,ñlkjhg",
        parraf: "If you’ve never built a website before and you have no coding or design experience, this is the place to start. In this project, we learn how to build a modern portfolio website for desktops, tablets, and mobile devices. We start with basic HTML and CSS syntax. Next, we learn how to build custom web pages with an image gallery and contact page. Finally, we walk through how to share a website live on the web.",
    },
    {
        url: "https://pbs.twimg.com/profile_images/548093274913640449/SZ7iTmc3_400x400.jpeg",
        title: "dfcgvhjklñlkjhgffgbhnjkml,ñlkjhg",
        parraf: "The web is a two-way communication medium. There’s lots of HTML elements for displaying data and producing output, and conversely, there’s also lots of HTML elements for accepting input. Accepting input from the user means creating web forms. In this course, we’ll learn about all the most important form elements that web professionals use on a daily basis.",
    },
    {
        url: "https://pbs.twimg.com/profile_images/548093274913640449/SZ7iTmc3_400x400.jpeg",
        title: "dfcgvhjklñlkjhgffgbhnjkml,ñlkjhg",
        parraf: "Scalable Vector Graphics (SVG) is an XML markup language for creating two-dimensional images using vectors. This is different from traditional raster-based image formats that use pixels, like JPEG and PNG. When used on web pages, SVG images provide an infinite level of detail, so they look sharp regardless of screen size or pixel density. ",
    },
    {
        url: "https://pbs.twimg.com/profile_images/548093274913640449/SZ7iTmc3_400x400.jpeg",
        title: "dfcgvhjklñlkjhgffgbhnjkml,ñlkjhg",
        parraf: "Text and images have always been the foundation of web content, but more than ever, video and audio are also a part of that content mix. Fortunately, we can now create standards-based video and audio players that don't require the use of plugins. Adding video and audio to a webpage is almost as easy as adding an image or formatting some text.",
    }

];
const Notificaciones = () => {
    return (ninos.map((item, index) => {
        return (
            <div>
                <nav className="navbar navbar-menu recort">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <a className="navbar-brand title" href="#">Mis Chispitas</a>
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
                <div className="row" key={index}>
                    <div className="col-md-12 ">
                        <div className="col-md-2">
                            <center><img className="media-object imgbb" src={item.url} /></center>
                        </div>
                        <div className="col-md-10 found">
                            <h4 class="media-heading">{item.title}</h4>
                            <p>{item.parraf}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    )
}
export default Notificaciones;
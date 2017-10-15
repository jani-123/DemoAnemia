import React, { Component } from 'react';
import logo from './logo.svg';
import './welcome.css';


import {
    BrowserRouter,
    Route,
    Switch,
    NavLink,
    NavNavLink,
    Redirect
} from 'react-router-dom'

const Welcome = () => {
    return (
        <div className="container ">
            <h1>Mis chispitas</h1>
            <div className="row">
                <div className="col-md-12 col-xs-12 col-sm-12 col-lg-12">
                    <center><img src="http://imagenwhatsapp.com/wp-content/uploads/2016/04/tiernos-reto%C3%B1os-7.jpg" className="img-responsive bbgorrita" alt="Responsive image" /></center>
                    {/* <div className="form-group has-warning">
                         <label className="control-label" for="inputWarning1">Ingrese el nombre del nino</label>
                        <input type="text" className="form-control bbinput" placeholder="Ingrese el nombre del niño" id="inputWarning1" />
                    </div> */}
                </div>
                </div>
                <div className="textobb">
                    This HTML file is a template.
                    If you open it directly in the browser, you will see an empty page.

                    You can add webfonts, meta tags, or analytics to this file.
                    The build step will place the bundled scripts into the  tag.

                    To begin the development, run `npm start` or `yarn start`.
                    To create a production bundle, use `npm run build` or `yarn build`
                </div>

                {/* <div className="col-md-12">
                    <div className="col-sm-6 col-xs-6 col-lg-6 checkbb ">
                        <label className="form-check-label ">
                            <input className="form-check-input" id="agreeUser" type="checkbox" />
                            <a href="lyft.com"> Hombre</a>
                        </label>
                    </div>
                    <div className="col-sm-6 col-xs-6 col-lg-6 checkbb" >
                        <label className="form-check-label ">
                            <input className="form-check-input" id="agreeUser" type="checkbox" />
                            <a className="" href="lyft.com"> Mujer</a>
                        </label>
                    </div>
                </div>
                <center><button type="button" class="btn btn-warning bbbtn">Warning</button></center>
            </div> */}
            </div>
            );
}
export default Welcome;
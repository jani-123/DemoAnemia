import React, { Component } from 'react';
import Login from './login.js'
import Welcome from './welcome.js';
import Home from './home.js';
import ReminderApp from './reminder.js';
import Consulta from './nurse.js';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';
// firebase.initializeApp
//  var config = {
//     apiKey: "AIzaSyCzhuaNc9cWsMr8lEWrrL-jPwVuauiwxC0",
//     authDomain: "demoanemia.firebaseapp.com",
//     databaseURL: "https://demoanemia.firebaseio.com",
//     projectId: "demoanemia",
//     storageBucket: "demoanemia.appspot.com",
//     messagingSenderId: "997152978162"
//   };
//   firebase.initializeApp(config);

const App = () => {
	return (<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/DemoAnemia" render={ () => <Redirect to='/login'/> } />
				<Route exact path="/" render={ () => <Redirect to='/login'/> } />
				<Route exact path="/login" render={() => <Login />} />
				<Route exact path="/welcome" render={() => <Welcome />} />
				<Route exact path="/home" render={() => <Home />} />
				<Route exact path="/reminder" render={() => <ReminderApp />} />
				<Route exact path="/nurse" render={() => <Consulta />} />
				<Route component={Login} />
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;

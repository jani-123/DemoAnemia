import React, { Component } from 'react';
import Login from './login.js'
import Welcome from './welcome.js';
import Home from './home.js';
import ReminderApp from './reminder.js';
import {
	BrowserRouter,
	Route,
	Switch,
	NavLink,
	Redirect
} from 'react-router-dom';

const NotFound = () => {
	return (
		<div><h2> Error 404! </h2></div>
	);
}

const App = () => {
	return (<BrowserRouter>
		<div>
			<Switch>
				{/* <Route exact path="/" render={() => <Redirect to= {'/home'}/>}/> */}
				<Route exact path="/" render={() => <Login />} />
				<Route exact path="/welcome" render={() => <Welcome />} />
				<Route exact path="/home" render={() => <Home />} />
				<Route exact path="/reminder" render={() => <ReminderApp />} />
				{/* <Route exact path="/" render={() => <Notificaciones />} /> */}
				
				<Route component={Login} />
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;
import React, { Component } from 'react';
import Welcome from './welcome';
import Notificaciones from './Notificaciones';

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

const App =()=> {
  return (<BrowserRouter>
		<div>
			<Switch>
				{/* <Route exact path="/" render={() => <Redirect to= {'/home'}/>}/> */}
				{/* <Route  path="/home" render={() => <Home/>}/> */}
        {/* <Route  exact path="/" render={() => <Welcome/>}/> */}
        <Route  exact path="/" render={() => <Notificaciones/>}/>
				<Route component={NotFound}/>
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;

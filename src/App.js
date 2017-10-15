import React, { Component } from 'react';
import Home from './home';


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
				<Route  path="/home" render={() => <Home/>}/>
				<Route component={Home}/>
			</Switch>
		</div>
	</BrowserRouter>)
}

export default App;
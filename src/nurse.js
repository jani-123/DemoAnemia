import React, { Component } from 'react';
import Utils from './Utils.js';
import './nurse.css';
import {
	NavLink,
} from 'react-router-dom'

const Nav = () => {
	return (
		<div className="row">
			<div className="col-lg-12">
				<div className="col-md-10">
					<a className="navbar-brand title" href="home">MisChispitas</a>
				</div>
				<div className="col-xs-2 room">
					<NavLink to={'/login'} className="glyphicon glyphicon-home room2" />
				</div>
			</div>
		</div>
	);
}

const Reminders = () => {
	let title = "Usuarios";
	let recordatorios = [
		{
			nombre: "Maria",
			estado: 'green'
		},
		{
			nombre: "Magadalena",
			estado: 'green'
		},
		{
			nombre: "Frida",
			estado: 'orange'
		},
		{
			nombre: "Angelica",
			estado: 'green'
		},
		{
			nombre: "Eva",
			estado: 'danger'
		},
		{
			nombre: "Carla",
			estado: 'green'
		}, {
			nombre: "Rebeca",
			estado: 'orange'
		}, {
			nombre: "Maria",
			estado: 'green'
		},
		{
			nombre: "Magadalena",
			estado: 'green'
		},
		{
			nombre: "Frida",
			estado: 'orange'
		},
		{
			nombre: "Angelica",
			estado: 'green'
		},
		{
			nombre: "Eva",
			estado: 'danger'
		},
		{
			nombre: "Carla",
			estado: 'green'
		}, {
			nombre: "Rebeca",
			estado: 'orange'
		}, {
			nombre: "Maria",
			estado: 'green'
		},
		{
			nombre: "Magadalena",
			estado: 'green'
		},
		{
			nombre: "Frida",
			estado: 'orange'
		},
		{
			nombre: "Angelica",
			estado: 'green'
		},
		{
			nombre: "Eva",
			estado: 'danger'
		},
		{
			nombre: "Carla",
			estado: 'green'
		}, {
			nombre: "Rebeca",
			estado: 'orange'
		},
	];
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
				    <form className="form-inline">
						<div className="input-group search">
							<input type="text" className="form-control" aria-label="..." placeholder="Seach" />
							<div className="input-group-btn ">
								<button type="submit" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									<span className="glyphicon glyphicon-search" aria-hidden="true" />
								</button>
							</div>
						</div>
					</form>
				</div>
				{
					recordatorios.map((item, index) => {
						return (

							<Reminder key={Utils.uuid()} item={item} index={index + 1} />
						)
					})
				}
			</div>
		</div>
	)
}
const Reminder = ({ item, index }) => {
	return (
		<div>
			{
				item.estado === 'green' ? <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 diasemana test-center verde baby">
					<div className="col-xs-2">
						<img src='https://s-media-cache-ak0.pinimg.com/originals/41/1b/af/411baf25085c2ea169f1458ab47b7e65.png' className="noty" />
					</div>
					<div className="col-xs-10">
						<h4 className="flechitas"><b>{item.nombre}</b></h4>
						<p>Hola....</p>
					</div>
				</div>
					:
					item.estado === 'orange' ? <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 diasemana test-center naranja baby">
						<div className="col-xs-2">
							<img src='https://s-media-cache-ak0.pinimg.com/originals/41/1b/af/411baf25085c2ea169f1458ab47b7e65.png' className="noty" />
						</div>
						<div className="col-xs-10">
							<h4 className="flechitas"><b>{item.nombre}</b></h4>
							<p>Hola....</p>
						</div>
					</div>
						:
						item.estado === 'danger' ? <div className="col-md-12 col-sm-12 col-xs-12 col-lg-12 diasemana test-center rojo baby">
							<div className="col-xs-2">
								<img src='https://s-media-cache-ak0.pinimg.com/originals/41/1b/af/411baf25085c2ea169f1458ab47b7e65.png' className="noty" />
							</div>
							<div className="col-xs-10">
								<h4 className="flechitas"><b>{item.nombre}</b></h4>
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
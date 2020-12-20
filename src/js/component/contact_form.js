import React, { useState, useEffect, useRef, useContext, Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/AKG_Logo.png";
import LogoDark from "../../img/logo-dark.png";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

/*
<Link to="/demo">
    <button className="btn btn-primary">Check the Context in action</button>
</Link>
<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">AKG Roofing and Specialty Services</span>
			</Link>
			<div className="ml-auto" />
		</nav>
*/
const encode = data => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};

export default class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", message: "" };
	}

	/* Here’s the juicy bit for posting the form submission */

	handleSubmit = e => {
		fetch("/", {
			method: "POST",
			headers: { "Content-Type": "application/x-www-form-urlencoded" },
			body: encode({ "form-name": "contact", ...this.state })
		})
			.then(() => alert("Success!"))
			.catch(error => alert(error));

		e.preventDefault();
	};

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	render() {
		const { name, email, message } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<p>
					<label>
						Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
					</label>
				</p>
				<p>
					<label>
						Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
					</label>
				</p>
				<p>
					<label>
						Message: <textarea name="message" value={message} onChange={this.handleChange} />
					</label>
				</p>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
		);
	}
}

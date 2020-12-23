import React, { useState, useEffect, useRef, useContext, Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/AKG_Logo.png";
import LogoDark from "../../img/logo-dark.png";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Col } from "react-bootstrap";
import { Context } from "../store/appContext";
import FreeQuote from "../../img/free-quote.jpg";

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

{
	/** <p>
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
                </p> */
}

const encode = data => {
	return Object.keys(data)
		.map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
		.join("&");
};

class ContactForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", phone: "", address: "", message: "" };
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
		const { name, email, phone, address, message } = this.state;
		return (
			<form onSubmit={this.handleSubmit}>
				<div className="container-fluid p-0">
					<div className="bg-primary p-3 border border-light">
						<img src={FreeQuote} className="w-100" />
					</div>
				</div>
				<div className="p-3">
					<Form.Row className="py-1">
						<Col>
							<Form.Control
								size="lg"
								type="text"
								placeholder="Name"
								name="name"
								value={name}
								onChange={this.handleChange}
							/>
						</Col>
					</Form.Row>
					<Form.Row className="py-1">
						<Col>
							<Form.Control
								size="lg"
								type="text"
								placeholder="Email"
								name="email"
								value={email}
								onChange={this.handleChange}
							/>
						</Col>
					</Form.Row>

					<Form.Row className="py-1">
						<Col>
							<Form.Control
								size="lg"
								type="text"
								placeholder="Phone Number"
								name="phone"
								vlaue={phone}
								onChange={this.handleChange}
							/>
						</Col>
					</Form.Row>
					<br />
					<Form.Row>
						<Col>
							<Form.Control
								size="lg"
								type="text"
								as="textarea"
								placeholder="Address, City/Town, Zip"
								rows={2}
								name="address"
								value={address}
								onChange={this.handleChange}
							/>
						</Col>
					</Form.Row>
					<br />
					<Form.Row>
						<Col>
							<Form.Control
								size="lg"
								type="text"
								as="textarea"
								placeholder="Reason For Inquiry"
								rows={3}
								name="message"
								value={message}
								onChange={this.handleChange}
							/>
						</Col>
					</Form.Row>
					<br />
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</div>
			</form>
		);
	}
}
export default ContactForm;

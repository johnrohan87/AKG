import React, { useState, useEffect, useRef, useContext } from "react";
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

export const NavbarMain = () => {
	const [height, setHeight] = useState(0);
	const ref = useRef(null);
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			setHeight(ref.current.clientHeight);
			actions.updateComponentHeight("NAVBAR", height);
		},
		[height]
	);

	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light" ref={ref}>
			<Navbar.Brand href="#home" className="p-0">
				<img src={Logo} className="img-fluid rounded mx-auto" style={{ height: "5rem" }} />
			</Navbar.Brand>
			<div style={{ display: "d-flex", alignItems: "center" }}>
				<div>AKG Roofing and Specialty Services, INC</div>
				<a href="tel:+13055498081">(305) 549-8081</a>
			</div>
			{/*<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
					<NavDropdown title="Dropdown" id="collasible-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>
				</Nav>
				<Nav>
					<Nav.Link href="#deets">More deets</Nav.Link>
					<Nav.Link eventKey={2} href="#memes">
						Light memes
					</Nav.Link>
				</Nav>
				
			</Navbar.Collapse>*/}
		</Navbar>
	);
};

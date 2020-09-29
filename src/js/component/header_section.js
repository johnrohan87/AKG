import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import LogoDark from "../../img/logo-dark.png";

import { useEffect } from "react";

export const HeaderSection = () => {
	return (
		<section className="header-section-1 bg-image-1 header-js" id="header">
			<div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
				<div className="container">
					<div className="d-flex row section-separator">
						<div className="col-xl-8 col-lg-8 col-md-12 col-md-offset-2 col-sm-12 col-sm-offset-1">
							<div className="part-inner text-center border border-primary">
								<h1 className="title">AKG Roofing and Specialty Services, INC. </h1>

								<div className="detail">
									<p>Metal Roof, Shingle Roof, Tile Roof, Flat Roof</p>
									<p>TPO Roofing Systems, PVC Roofing Systems Residential, and Commercial</p>
									<p>Residential, and Commercial</p>
								</div>

								<div className="btn-form btn-scroll">
									<a href="#pricing" className="btn btn-fill right-icon">
										Get Started <i className="icon icons8-advance" />
									</a>
								</div>
							</div>
							<hr />
						</div>
						<div className="border border-light bg-white col-xl-4 col-lg-4 col-md-12 col-sm-12 p-0">
							<Form.Group className="p-0">
								<div className="container-fluid p-0">
									<div className="bg-success p-3 border border-light">Hello</div>
								</div>
								<div className="p-3">
									<Form.Row>
										<Form.Label column="lg" lg={2}>
											Large Text
										</Form.Label>
										<Col>
											<Form.Control size="lg" type="text" placeholder="Large text" />
										</Col>
									</Form.Row>
									<br />
									<Form.Row>
										<Form.Label column lg={2}>
											Normal Text
										</Form.Label>
										<Col>
											<Form.Control type="text" placeholder="Normal text" />
										</Col>
									</Form.Row>
									<br />
									<Form.Row>
										<Form.Label column="sm" lg={2}>
											Small Text
										</Form.Label>
										<Col>
											<Form.Control size="sm" type="text" placeholder="Small text" />
										</Col>
									</Form.Row>
									<br />
									<Button variant="primary" type="submit">
										Submit
									</Button>
								</div>
							</Form.Group>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

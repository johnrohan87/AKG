import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import LogoMotto from "../../img/AKG_Logo_Motto.png";
import LogoDark from "../../img/logo-dark.png";
import FreeQuote from "../../img/free-quote.jpg";

import { useEffect } from "react";

//AKG Roofing and Specialty Services, INC.
//<div className="detail" style={{ color: "black" }}>
//<p>Metal Roof, Shingle Roof, Tile Roof, Flat Roof</p>
//<p>TPO Roofing Systems, PVC Roofing Systems</p>
//</div>
//<div className="btn-form btn-scroll">
//<a href="#pricing" className="btn btn-fill right-icon" />
//</div>

export const HeaderSection = () => {
	return (
		<section className="header-section-1 bg-image-1 header-js p-3" id="header">
			<div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
				<div className="container">
					<div className="d-flex row section-separator-line p-5">
						<div className="col-xl-8 col-lg-8 col-md-12 col-md-offset-2 col-sm-12 col-sm-offset-1 my-auto">
							<div className="part-inner text-center">
								<h1 className="p-3" style={{ color: "black" }}>
									<div className="container-fluid">
										<img src={LogoMotto} className="img-fluid rounded mx-auto" />
									</div>
								</h1>
							</div>
							<hr />
						</div>
						<div className="border border-light bg-white col-xl-4 col-lg-4 col-md-12 col-sm-12 p-0">
							<Form.Group className="p-0">
								<div className="container-fluid p-0">
									<div className="bg-primary p-3 border border-light">
										<img src={FreeQuote} className="w-100" />
									</div>
								</div>
								<div className="p-3">
									<Form.Row className="py-1">
										{/*<Form.Label column="lg" lg={4}>
											Name
                                        </Form.Label>*/}
										<Col>
											<Form.Control size="lg" type="text" placeholder="Name" />
										</Col>
									</Form.Row>
									<Form.Row className="py-1">
										{/*
										<Form.Label column="lg" lg={4}>
											Email
										</Form.Label>*/}
										<Col>
											<Form.Control size="lg" type="text" placeholder="Email" />
										</Col>
									</Form.Row>

									<Form.Row className="py-1">
										<Col>
											<Form.Control size="lg" type="text" placeholder="Phone Number" />
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
											/>
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

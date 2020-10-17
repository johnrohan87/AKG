import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import LogoDark from "../../img/logo-dark.png";
import BG4 from "../../img/background-4.jpg";
import Home3 from "../../img/AKG_home3.jpg";
import AKG_Metal from "../../img/AKG_metal.jpg";
import AKG_Slats from "../../img/AKG_Slats.jpg";
import AKG_Plastic from "../../img/AKG_plastic.jpg";
import AKG_Tiles from "../../img/AKG_tiles.jpg";
import AKG_Tiles2 from "../../img/AKG_tiles2.jpg";
import Firestone_Hat from "../../img/Firestone/Firestone_Hat.png";
import Firestone_Hat2 from "../../img/Firestone/Firestone_Hat2.png";
import Firestone_Logo from "../../img/Firestone/Firestone_Logo.png";
import GACO_LogoT from "../../img/GACO/GACO_LogoT.png";
import GACO_Logo2T from "../../img/GACO/GACO_Logo2T.png";
import GACO_Reroof from "../../img/GACO/GACO_Reroof.jpg";
import GACO_Flex from "../../img/GACO/GACO_Flex.jpg";
import GACO_Flex2 from "../../img/GACO/GACO_Flex2.jpg";
import Tropical_Main from "../../img/Tropical/Tropical_Main.jpg";
import Tropical_Logo from "../../img/Tropical/Tropical_Logo.png";

import PropTypes from "prop-types";
import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

import VisibilitySensor from "react-visibility-sensor";

export const FeatureS1 = props => {
	const [offset, setOffset] = useState(0);
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			setOffset(props["props"]);
			//console.log("set", props["props"]);
			return () => {};
		},
		[props["props"]]
	);

	function VisibilityCheck(isVisible) {
		console.log("Element is now %s", isVisible ? "visible" : "hidden");
	}

	return (
		<section className="features-section-1 relative" id="features">
			<div className="container mt-40">
				<h3 className="text-center my-5">Accomplishments</h3>
				<div className="row mt-30">
					<div className="col-md-4 col-sm-6">
						<div className="box3">
							<img className="img-fluid" src={AKG_Plastic} />
							<div className="box-content">
								<h3 className="title">Williamson</h3>
								<span className="post">Web Developer</span>
								<p className="description">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci pariatur
									qui.
								</p>
								<ul className="icon">
									<li>
										<a href="#" className="fa fa-search" />
									</li>
									<li>
										<a href="#" className="fa fa-link" />
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-6">
						<div className="box3">
							<img className="img-fluid" src={AKG_Tiles} />
							<div className="box-content">
								<h3 className="title">Kristiana</h3>
								<span className="post">Web Designer</span>
								<p className="description">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci pariatur
									qui.
								</p>
								<ul className="icon">
									<li>
										<a href="#" className="fa fa-search" />
									</li>
									<li>
										<a href="#" className="fa fa-link" />
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-6">
						<div className="box3">
							<img className="img-fluid" src={AKG_Tiles2} />
							<div className="box-content">
								<h3 className="title">Kristiana</h3>
								<span className="post">Web Designer</span>
								<p className="description">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci pariatur
									qui.
								</p>
								<ul className="icon">
									<li>
										<a href="#" className="fa fa-search" />
									</li>
									<li>
										<a href="#" className="fa fa-link" />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div
					className="container"
					style={{
						backgroundImage: "url(" + AKG_Slats + ")",
						backgroundColor: "black",
						backgroundPosition: "0px " + offset * 0.2 + "px",
						transition: "transform 250ms ease-in",
						backgroundRepeat: "repeat",
						backgroundSize: "contain"
					}}>
					<div className="row section-separator">
						<div className="section-header container-fluid">
							<div
								style={{
									backgroundColor: "rgba(255, 255, 255, 0.3)",
									height: "100%",
									width: "100%"
								}}>
								<h1 className="section-heading text-dark w-100">Our Products and Services</h1>
							</div>
							<p className="sub-heading" />
						</div>

						<div className="clearfix" />

						<div className="col-xs-12 features-item">
							<div className="row">
								{
									// Box 1 Firestone
								}
								<VisibilitySensor onChange={VisibilityCheck}>
									<div className="each-features text-center col-lg-4 col-md-6 col-sm-12 col-xs-12 py-5">
										<div
											className="inner background-light box3"
											style={{
												backgroundImage: "url(" + Firestone_Hat2 + ")",
												backgroundSize: "cover",
												maxHeight: "30em",
												margin: "auto"
											}}>
											<div
												style={{
													backgroundColor: "rgba(255, 255, 255, 0.3)",
													height: "5em",
													width: "100%"
												}}>
												<div
													className="flex-grow"
													style={{
														backgroundImage: "url(" + Firestone_Logo + ")",
														backgroundSize: "contain",
														backgroundRepeat: "no-repeat",
														height: "100%",
														width: "100%"
													}}
												/>
											</div>

											<br />
											<br />
											<h5 style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
												<div className="title" style={{ wordWrap: "break-word" }}>
													EPDM TPO POLYISO
												</div>
											</h5>
											<br />
											<br />
											<p className="description">
												With superior durability, flexibility and UV resistance, RubberGard™
												EPDM is the smart roofing solution for any application.
											</p>
											{({ isVisible }) => <div>I am {isVisible ? "visible" : "invisible"}</div>}
										</div>
									</div>
								</VisibilitySensor>

								<div className="each-features text-center col-lg-4 col-md-6 col-sm-12 col-xs-12 py-5">
									<div
										className="inner background-light box3"
										style={{
											backgroundImage: "url(" + Tropical_Main + ")",
											backgroundSize: "cover",
											backgroundPosition: "center",
											backgroundRepeat: "no-repeat",
											height: "100%",
											width: "100%",
											maxHeight: "30em"
										}}>
										<div
											style={{
												height: "5em",
												width: "15em"
											}}>
											<div />
										</div>

										<br />
										<br />
										<h5 style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
											<div className="title" style={{ wordWrap: "break-word" }}>
												EPDM TPO POLYISO
											</div>
										</h5>
										<br />
										<br />
										<p className="description">
											With superior durability, flexibility and UV resistance, RubberGard™ EPDM is
											the smart roofing solution for any application.
										</p>
									</div>
								</div>

								<div className="each-features text-center col-lg-4 col-md-6 col-sm-12 col-xs-12 py-5">
									<div
										className="inner background-light box3"
										style={{
											backgroundImage: "url(" + GACO_Flex + ")",
											backgroundPosition: "center",
											backgroundSize: "cover",
											backgroundRepeat: "no-repeat",
											maxHeight: "30em"
										}}>
										<div
											style={{
												backgroundColor: "rgba(255, 255, 255, 0.4)",
												height: "5em",
												width: "100%"
											}}>
											<div
												style={{
													backgroundImage: "url(" + GACO_LogoT + ")",
													backgroundSize: "contain",
													backgroundRepeat: "no-repeat",
													height: "100%",
													width: "100%"
												}}
											/>
										</div>

										<br />
										<br />
										<h5 style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
											<div className="title" style={{ wordWrap: "break-word" }}>
												Roof Foam and Solvent-Free Silicone Systems
											</div>
										</h5>
										<br />
										<p className="description">
											With superior durability, flexibility and UV resistance, RubberGard™ EPDM is
											the smart roofing solution for any application.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
FeatureS1.propTypes = {
	props: PropTypes.any,
	offset: PropTypes.any
};

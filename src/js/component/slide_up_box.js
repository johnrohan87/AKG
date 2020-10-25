import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "animate.css/animate.css";
import { Transition, CSSTransition, TransitionGroup } from "react-transition-group";
//classNames="roll"
//timeout={{ appear: 300, enter: 300, exit: 300 }}

import Tropical_Main from "../../img/Tropical/Tropical_Main.jpg";
import Tropical_Logo from "../../img/Tropical/Tropical_Logo.png";

export const SlideUpBox = ({ in: inProp }) => {
	const [entered, setEntered] = useState(false);
	return (
		<CSSTransition
			in={inProp}
			timeout={400}
			unmountOnExit
			classNames={{
				enter: "animate__animated",
				enterActive: "animate__slideInUp",
				exit: "animate__animated",
				exitActive: "animate__slideOutDown"
			}}>
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
						With superior durability, flexibility and UV resistance, RubberGard™ EPDM is the smart roofing
						solution for any application.
					</p>
				</div>
			</div>
		</CSSTransition>
	);
};
SlideUpBox.propTypes = {
	in: PropTypes.any
};

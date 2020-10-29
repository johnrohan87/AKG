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
import "react-animation/dist/keyframes.css";
import { AnimateOnChange, HideUntilLoaded, animations } from "react-animation";

import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

import { CountUp } from "./count_up";
import { Row, Col, Card } from "react-bootstrap";

export const CounterBar = () => {
	const [offset, setOffset] = useState(0);
	const [action, setAction] = useState("");
	const { store, actions } = useContext(Context);
	const refFirestone = React.useRef();

	function onChange(isVisible) {
		//console.log("action changed to -", action);
		action ? setAction("animations__fadeInUp") : setAction("animations__fadeInUp");

		refFirestone.current.style.animation = "animations__fadeInUp";
	}
	//box3
	return (
		<section className="features-section-1 relative" id="features">
			<div className="container-fluid p-5">
				<Row>
					<Col>
						<Card style={{ width: "18rem" }}>
							<Card.Body>
								<Card.Title>
									<i className="fas fa-home fa-5x" />
									<CountUp />
								</Card.Title>
								<Card.Text>Roofs Repaired by AKG</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: "18rem" }}>
							<Card.Body>
								<Card.Title>
									<i className="fas fa-home fa-5x" />
									<CountUp />
								</Card.Title>
								<Card.Text>Roofs Repaired by AKG</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: "18rem" }}>
							<Card.Body>
								<Card.Title>
									<i className="fas fa-home fa-5x" />
									<CountUp />
								</Card.Title>
								<Card.Text>Roofs Repaired by AKG</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		</section>
	);
};

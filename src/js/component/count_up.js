import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Carousel } from "react-responsive-carousel";

import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

import AKG_Home from "../../img/AKG_home.jpg";
import AKG_Home2 from "../../img/AKG_home2.jpg";
import AKG_Home3 from "../../img/AKG_home3.jpg";
import AKG_Homes from "../../img/AKG_homes.jpg";

import { useCountUp } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

let firstRun = true;

export const CountUp = ({ props }) => {
	let { countUp, start, pauseResume, reset, update } = useCountUp({
		start: 0,
		end: 150567,
		delay: 1000,
		duration: 5,
		separator: ",",
		onReset: () => console.log("Resetted!"),
		onUpdate: () => console.log("Updated!"),
		onPauseResume: () => console.log("Paused or resumed!"),
		onStart: ({ pauseResume }) => console.log(pauseResume),
		onEnd: ({ pauseResume }) => console.log(pauseResume)
	});

	useEffect(() => {
		return () => {};
	}, []);

	return (
		<div>
			<VisibilitySensor onChange={start} className="">
				<div>{countUp}</div>
			</VisibilitySensor>
		</div>
	);
};
CountUp.propTypes = {
	props: PropTypes.any
};

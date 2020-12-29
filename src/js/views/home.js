import React from "react";

import "../../styles/home.scss";
import { HeaderSection } from "../component/header_section";
import { FeatureS7 } from "../component/feature_s7";
import { FeatureS1 } from "../component/feature_s1";
import { FeatureS2 } from "../component/feature_s2";
import { FeatureS8 } from "../component/feature_s8";
import { SlideUpBox } from "../component/slide_up_box";

import { Gallery } from "../component/gallery";

import AKG_Home from "../../img/AKG_home.jpg";
import AKG_Home2 from "../../img/AKG_home2.jpg";
import AKG_Home3 from "../../img/AKG_home3.jpg";
import AKG_Homes from "../../img/AKG_homes.jpg";

import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

import "animate.css/animate.css";
import { CounterBar } from "../component/counter_bar";

var navHeight = 0;

export const Home = () => {
	const [offset, setOffset] = useState(0);
	const { store, actions } = useContext(Context);
	const [entered, setEntered] = useState(false);

	useEffect(
		() => {
			function handleScroll() {
				setOffset(window.pageYOffset);
				actions.applyOffset(offset);
			}
			window.addEventListener("scroll", handleScroll);

			navHeight = actions.returnComponentHeight("NAVBAR");
			//console.log("navHeight = " + navHeight);

			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		},
		[offset]
	);

	//<FeatureS2 />
	//<FeatureS8 />
	/*
<div className="bg-primary">
				<SlideUpBox in={entered} />
				<button
					onClick={() => {
						setEntered(!entered);
					}}
					style={{ marginTop: "10rem" }}>
					Toggle Entered
				</button>
			</div>
    */

	return (
		<div
			className="text-center"
			style={{
				background: "linear-gradient(180deg, rgba(138,103,173,1) 0%, rgba(240,146,161,1) 73%)",
				backgroundAttachment: "fixed"
			}}>
			<div className="container-fluid p-0">
				<Gallery props={0} />
			</div>
			<div className="container-fluid">
				<HeaderSection />
			</div>
			<FeatureS7 />
			<CounterBar />
			<FeatureS1 props={offset} />
		</div>
	);
};

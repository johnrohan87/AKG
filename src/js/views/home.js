import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { HeaderSection } from "../component/header_section";
import { FeatureS7 } from "../component/feature_s7";
import { FeatureS1 } from "../component/feature_s1";
import { FeatureS2 } from "../component/feature_s2";
import { FeatureS8 } from "../component/feature_s8";

import { Gallery } from "../component/gallery";

import AKG_Home from "../../img/AKG_home.jpg";
import AKG_Home2 from "../../img/AKG_home2.jpg";
import AKG_Home3 from "../../img/AKG_home3.jpg";
import AKG_Homes from "../../img/AKG_homes.jpg";

import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

var navHeight = 0;

export const Home = () => {
	const [offset, setOffset] = useState(0);
	const { store, actions } = useContext(Context);

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

	return (
		<div className="text-center">
			<Gallery props={offset} />
			<HeaderSection />
			<FeatureS7 />
			<FeatureS1 props={offset} />
			<FeatureS2 />
			<FeatureS8 />
		</div>
	);
};

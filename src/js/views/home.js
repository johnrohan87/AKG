import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { HeaderSection } from "../component/header_section";
import { FeatureS7 } from "../component/feature_s7";

export const Home = () => (
	<div className="text-center mt-5">
		<HeaderSection />
		<FeatureS7 />
	</div>
);

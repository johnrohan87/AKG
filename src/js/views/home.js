import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { HeaderSection } from "../component/header_section";
import { FeatureS7 } from "../component/feature_s7";
import { FeatureS1 } from "../component/feature_s1";
import { FeatureS2 } from "../component/feature_s2";
import { FeatureS8 } from "../component/feature_s8";

export const Home = () => (
	<div className="text-center mt-5">
		<HeaderSection />
		<FeatureS7 />
		<FeatureS1 />
		<FeatureS2 />
		<FeatureS8 />
	</div>
);

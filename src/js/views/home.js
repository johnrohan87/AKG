import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import "../../styles/js-image-slider.css";
import { HeaderSection } from "../component/header_section";
import { FeatureS7 } from "../component/feature_s7";
import { FeatureS1 } from "../component/feature_s1";
import { FeatureS2 } from "../component/feature_s2";
import { FeatureS8 } from "../component/feature_s8";

import { Gallery } from "../component/gallery";
import "react-alice-carousel/lib/alice-carousel.css";

import AKG_Home from "../../img/AKG_home.jpg";
import AKG_Home2 from "../../img/AKG_home2.jpg";
import AKG_Home3 from "../../img/AKG_home3.jpg";
import AKG_Homes from "../../img/AKG_homes.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

//import JSSOR from "../jssor.slider.js";

/*
import Carousel, { autoplayPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
<Carousel
			autoPlay={2000}
			animationSpeed={1000}
			infinite
			clickToChange
			offset={500}
			centered
			itemWidth={window.innerWidth}>
			<img src={AKG_Home} className="responsive" style={{ height: "500px" }} />
			<img src={AKG_Home3} className="responsive" style={{ height: "500px" }} />
			<img src={AKG_Home2} className="responsive" style={{ height: "500px" }} />
        </Carousel>*/
var navHeight = 0;

export const Home = () => {
	const [offset, setOffset] = useState(0);
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			function handleScroll() {
				setOffset(window.pageYOffset);
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
			<Carousel
				showArrows={true}
				showThumbs={false}
				autoPlay={true}
				dynamicHeight={true}
				infiniteLoop={true}
				stopOnHover={false}
				swipeable={true}>
				<div className="bg-white">
					<img
						className="img-fluid rounded mx-auto d-block w-100 h-100"
						src={AKG_Home}
						alt="First slide"
						style={{
							maxHeight: "700px",
							transform: `translateY(${offset * 0.5}px)`
						}}
					/>
					<h3
						className="centeredIMGh3"
						style={{
							transform: `translateY(${offset * 0.5}px)`
						}}>
						First slide label
					</h3>
					<div>
						<p
							className="centeredIMGp"
							style={{
								transform: `translateY(${offset * 0.5}px)`
							}}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</div>
				<div className="bg-white">
					<img
						className="img-fluid rounded mx-auto d-block w-100"
						src={AKG_Home2}
						alt="Third slide"
						style={{
							maxHeight: "700px",

							transform: `translateY(${offset * 0.5}px)`
						}}
					/>
					<div>
						<h3
							className="centeredIMGh3"
							style={{
								transform: `translateY(${offset * 0.5}px)`
							}}>
							Second slide label
						</h3>
						<p
							className="centeredIMGp"
							style={{
								transform: `translateY(${offset * 0.5}px)`
							}}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						</p>
					</div>
				</div>
				<div className="bg-white">
					<img
						className="img-fluid rounded mx-auto d-block w-100"
						src={AKG_Home3}
						alt="Third slide"
						style={{
							maxHeight: "700px",

							transform: `translateY(${offset * 0.5}px)`
						}}
					/>
					<div>
						<h3
							className="centeredIMGh3"
							style={{
								transform: `translateY(${offset * 0.5}px)`
							}}>
							Third slide label
						</h3>
						<p
							className="centeredIMGp"
							style={{
								transform: `translateY(${offset * 0.5}px)`
							}}>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</div>
				</div>
			</Carousel>
			<HeaderSection />
			<FeatureS7 />
			<FeatureS1 props={offset} />
			<FeatureS2 />
			<FeatureS8 />
		</div>
	);
};

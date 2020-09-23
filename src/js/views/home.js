import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
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
import { Carousel } from "react-bootstrap";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade } from "swiper";

import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";

SwiperCore.use([EffectFade]);

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

export const Home = () => (
	<div className="text-center mt-5">
		<Gallery />
		<HeaderSection />
		<Carousel interval={1000} slide={true} touch={true}>
			<Carousel.Item>
				<img className="d-block w-100" src={AKG_Home} alt="First slide" />
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={AKG_Home2} alt="Third slide" />

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img className="d-block w-100" src={AKG_Home3} alt="Third slide" />

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>

		<FeatureS7 />
		<FeatureS1 />
		<FeatureS2 />
		<FeatureS8 />
	</div>
);

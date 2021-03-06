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
import AKG_BG1 from "../../img/AKG_BG1.jpg";
import AKG_BG2 from "../../img/AKG_BG2.jpg";
import AKG_BarrelTile from "../../img/AKG_BarrelTile_Mod.jpeg";

export const Gallery = props => {
	const [offset, setOffset] = useState(props["props"]);
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			//console.log("set", props["props"]);
			setOffset(props["props"]);
			return () => {};
		},
		[props]
	);

	return (
		<Carousel
			showArrows={true}
			showThumbs={false}
			autoPlay={true}
			dynamicHeight={true}
			infiniteLoop={true}
			stopOnHover={false}
			swipeable={true}
			interval="4500">
			<div className="h-100">
				<img
					className="img-fluid rounded mx-auto d-block w-100"
					src={AKG_BG1}
					alt="Third slide"
					style={{
						maxHeight: "700px",
						minHeight: "300px",
						transform: `translateY(${offset * 0.5}px)`
					}}
				/>
				<p className="infoBanner" style={{ lineHeight: "150%" }}>
					Repairs, Replaces, and Maintains <br />
					<u>YOUR</u> Life Investment! <br />
					Get Your Free Quote Today!
				</p>
			</div>
			<div className="h-100">
				<img
					className="img-fluid rounded mx-auto d-block w-100 h-100"
					src={AKG_BG2}
					alt="First slide"
					style={{
						maxHeight: "700px",
						minHeight: "300px",
						transform: `translateY(${offset * 0.5}px)`
					}}
				/>
				<p className="infoBanner" style={{ lineHeight: "150%" }}>
					<i className="fas fa-home" /> Residential <br />
					<i className="far fa-building" /> Commercial <br />
					Customized Solutions for Your Roofing Needs!
				</p>
			</div>
			<div className="h-100">
				<img
					className="img-fluid rounded mx-auto d-block w-100"
					src={AKG_BarrelTile}
					alt="Third slide"
					style={{
						maxHeight: "700px",
						minHeight: "300px",
						transform: `translateY(${offset * 0.5}px)`
					}}
				/>
				<p className="infoBanner" style={{ lineHeight: "150%", top: "25%" }}>
					Dimensional and 3 tab Shingle <br />
					Barrel and Flat Tile <br />
					Silicone Sealed Flat <br />
					Metal <br />
					We Install it ALL!
				</p>
			</div>
		</Carousel>
	);
};

Gallery.propTypes = {
	props: PropTypes.any,
	offset: PropTypes.any
};

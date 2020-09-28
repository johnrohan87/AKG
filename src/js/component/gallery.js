import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";

import AKG_Home from "../../img/AKG_home.jpg";
import AKG_Home2 from "../../img/AKG_home2.jpg";
import AKG_Home3 from "../../img/AKG_home3.jpg";
import AKG_Homes from "../../img/AKG_homes.jpg";

export const Gallery = props => {
	const [offset, setOffset] = useState(0);
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			setOffset(props["props"]);
			//console.log("set", props["props"]);
			return () => {};
		},
		[props["props"]]
	);

	return (
		<div>
			<Carousel
				showArrows={true}
				showThumbs={false}
				autoPlay={true}
				dynamicHeight={true}
				infiniteLoop={true}
				stopOnHover={false}
				swipeable={true}
				className="h-100">
				<div className="bg-white">
					<img
						className="img-fluid rounded mx-auto d-block w-100 h-100"
						src={AKG_Home}
						alt="First slide"
						style={{
							maxHeight: "700px",
							transform: `translateY(${offset * 0.2}px)`
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
		</div>
	);
};

Gallery.propTypes = {
	props: PropTypes.any,
	offset: PropTypes.any
};

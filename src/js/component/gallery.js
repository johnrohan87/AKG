import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import AKG_Home from "../../img/AKG_home.jpg";
import AKG_Home2 from "../../img/AKG_home2.jpg";
import AKG_Home3 from "../../img/AKG_home3.jpg";
import AKG_Homes from "../../img/AKG_homes.jpg";

export const Gallery = () => {
	const handleOnDragStart = e => e.preventDefault();
	return (
		<AliceCarousel
			autoPlayInterval={2000}
			autoPlayDirection="rtl"
			autoPlay={true}
			fadeOutAnimation={true}
			mouseTrackingEnabled={true}
			playButtonEnabled={true}
			autoHeight={true}>
			<img src={AKG_Home} onDragStart={handleOnDragStart} className="img-fluid rounded mx-auto d-block" />
			<img src={AKG_Home2} onDragStart={handleOnDragStart} className="img-fluid rounded mx-auto d-block" />
			<img src={AKG_Home3} onDragStart={handleOnDragStart} className="img-fluid rounded mx-auto d-block" />
			<img src={AKG_Homes} onDragStart={handleOnDragStart} className="img-fluid rounded mx-auto d-block" />
		</AliceCarousel>
	);
};

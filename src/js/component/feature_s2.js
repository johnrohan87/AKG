import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import LogoDark from "../../img/logo-dark.png";
import BG4 from "../../img/background-4.jpg";
import Video from "../../img/video.png";

export const FeatureS2 = () => {
	return (
		<section className="features-section-2 relative bg-image-2">
			<div className="overlay-color">
				<div className="container">
					<div className="row section-separator light-text">
						<div className="btn-video m-b-50 text-center">
							<a href="/" className="btn popup-video">
								<img src={Video} alt="Video" className="img-responsive" />
							</a>
						</div>

						<div className="clearfix" />

						<div className="section-header col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
							<h2 className="section-heading">Watch Our Story</h2>
							<p className="sub-heading">
								Lorem ipsum dolor sit amet, consectetuer elit, sed diam nonummy nibh euismod tincidunt
								ut laoreet dolore magna aliquam erat volutpat.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

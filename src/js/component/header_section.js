import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import LogoDark from "../../img/logo-dark.png";

import { useEffect } from "react";

export const HeaderSection = () => {
	return (
		<section className="header-section-1 bg-image-1 header-js" id="header">
			<div style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
				<div className="container">
					<div className="row section-separator">
						<div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1">
							<div className="part-inner text-center">
								<h1 className="title">AKG Roofing and Specialty Services, INC. </h1>

								<div className="detail">
									<p>Metal Roof, Shingle Roof, Tile Roof, Flat Roof</p>
									<p>TPO Roofing Systems, PVC Roofing Systems Residential, and Commercial</p>
									<p>Residential, and Commercial</p>
								</div>

								<div className="btn-form btn-scroll">
									<a href="#pricing" className="btn btn-fill right-icon">
										Get Started <i className="icon icons8-advance" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

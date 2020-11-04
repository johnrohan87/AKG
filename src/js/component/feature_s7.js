import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import LogoDark from "../../img/logo-dark.png";
import Homes from "../../img/AKG_homes.jpg";

export const FeatureS7 = () => {
	return (
		<section className="features-section-7 content-half p-0">
			<div className="container-half container-half-left" />
			<div
				className="container-half container-half-right cover"
				style={{ backgroundImage: "url(" + Homes + ")" }}
			/>

			<div className="container mx-auto" style={{ backgroundColor: "rgb(65, 196, 221,0.5)" }}>
				<div className="row section-separator text-left animate__animated animate__bounce">
					<div className="col-md-12 col-lg-6">
						<div className="inner">
							<h2 className="section-heading">AKG Roofing and Specialty Services, INC.</h2>
							<div className="detail">
								<p>
									Joe Hernandez, has been a licensing contractor since 1977, licensed in Dade and
									Broward county in 1981, and then state wide by 1987. Also became a home inspector in
									2007.
								</p>

								<p>
									With over 43 years of experience AKG stands by Honesty, Integrity, and Dignity
									“Roofing is what we do” is our moto.
								</p>
								<p>
									Joe Hernandez has been highley respected throughout the entire state of florida for
									his knloedge and roofing evaluatins, by his piers and as a consultant.
								</p>
								<p>
									Each and every project is personaly supervised by Joe and is alwayse available on
									his cell phone once you have engaged with AKG as your personilazed vendor.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

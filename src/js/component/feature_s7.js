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
									Joe Hernandez, has been a Licensed Roofing Contractor Since 1977, in Dade and
									Broward county, and state wide by 1987. He also holds an active home inspection
									license for over 20 years.
								</p>
								<p>
									With over 30 years of experience AKG stands by Honesty, Integrity, and Dignity
									“Roofing is what we do” its our motto.
								</p>
								<p>
									Joe Hernandez has been highly respected throughout the entire state of florida for
									his Knowledge and Roofing evaluations.
								</p>
								<p>
									Each and every project is personally Supervised by Joe and he is always available on
									timely fashion for your personalized needs.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

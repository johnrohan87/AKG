import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import LogoDark from "../../img/logo-dark.png";
import BG4 from "../../img/background-4.jpg";

export const FeatureS7 = () => {
	return (
		<section className="features-section-7 content-half background-light">
			<div className="container-half container-half-left background-light" />
			<div className="container-half container-half-right cover" style={{ backgroundImage: { BG4 } }} />

			<div className="container">
				<div className="row section-separator text-left">
					<div className="col-md-6">
						<div className="inner">
							<h2 className="section-heading">C.E.O. AKG Roofing and Specialty Services, INC.</h2>
							<div className="detail">
								<p>
									AKG was founded in 1977, licensed in Dade and Broward county in 1981, and then state
									wide by 1989.
								</p>

								<p>
									With over 43 years of experience Joe stands by Honesty, Integrity, and Dignity
									“Roofing is what we do” is our moto.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

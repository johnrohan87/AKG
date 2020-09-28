import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import LogoDark from "../../img/logo-dark.png";
import BG4 from "../../img/background-4.jpg";
import Proj1 from "../../img/project/1.jpg";
import Proj2 from "../../img/project/2.jpg";
import Proj3 from "../../img/project/3.jpg";
import Proj4 from "../../img/project/4.jpg";

export const FeatureS8 = () => {
	return (
		<section className="features-section-8 relative background-light" id="work">
			<div className="container">
				<div className="row section-separator">
					<div className="section-header col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
						<h2 className="section-heading">Our Works</h2>
						<p className="sub-heading">
							Lorem ipsum dolor sit amet, consectetuer elit, sed diam nonummy nibh euismod tincidunt ut
							laoreet dolore magna aliquam erat volutpat.
						</p>
					</div>

					<div className="clearfix" />

					<div className="project-item col-xs-12">
						<div className="each-project row">
							<div className="each-project-inner">
								<div className="vertical-middle col-md-7 col-sm-6 col-xs-12">
									<div
										className="project-image cover"
										style={{ backgroundImage: "url(" + Proj1 + ")" }}
									/>
								</div>
								<div className="vertical-middle col-md-5 col-sm-6 col-xs-12">
									<div className="inner p-l-50">
										<h2 className="section-heading">iOS Interface for ZEIS Inc.</h2>

										<div className="detail">
											<p>
												Lorem ipsum dolor sit amet, consectetuer elit, sed diam nonummy nibh
												euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
											</p>
										</div>

										<div className="btn-form">
											<a href="#" className="btn btn-fill right-icon">
												View Case Study <i className="icon icons8-advance" />
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="each-project row">
							<div className="each-project-inner">
								<div className="vertical-middle col-md-5 col-sm-6 col-xs-12">
									<div className="inner p-r-50">
										<h2 className="section-heading">iOS Interface for ZEIS Inc.</h2>

										<div className="detail">
											<p>
												Lorem ipsum dolor sit amet, consectetuer elit, sed diam nonummy nibh
												euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
											</p>
										</div>

										<div className="btn-form">
											<a href="#" className="btn btn-fill right-icon">
												View Case Study <i className="icon icons8-advance" />
											</a>
										</div>
									</div>
								</div>

								<div className="vertical-middle col-md-7 col-sm-6 col-xs-12">
									<div
										className="project-image cover"
										style={{ backgroundImage: "url(" + Proj2 + ")" }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

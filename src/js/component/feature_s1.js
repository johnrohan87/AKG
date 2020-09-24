import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/logo.png";
import LogoDark from "../../img/logo-dark.png";
import BG4 from "../../img/background-4.jpg";
import Home3 from "../../img/AKG_home3.jpg";

export const FeatureS1 = () => {
	return (
		<section className="features-section-1 relative background-semi-dark" id="features">
			<div className="container mt-40">
				<h3 className="text-center">Hover Effect Style : Demo - 3</h3>
				<div className="row mt-30">
					<div className="col-md-4 col-sm-6">
						<div className="box3">
							<img src="http://bestjquery.com/tutorial/hover-effect/demo169/images/img-1.jpg" />
							<div className="box-content">
								<h3 className="title">Williamson</h3>
								<span className="post">Web Developer</span>
								<p className="description">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci pariatur
									qui.
								</p>
								<ul className="icon">
									<li>
										<a href="#" className="fa fa-search" />
									</li>
									<li>
										<a href="#" className="fa fa-link" />
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-6">
						<div className="box3">
							<img src="http://bestjquery.com/tutorial/hover-effect/demo169/images/img-2.jpg" />
							<div className="box-content">
								<h3 className="title">Kristiana</h3>
								<span className="post">Web Designer</span>
								<p className="description">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci pariatur
									qui.
								</p>
								<ul className="icon">
									<li>
										<a href="#" className="fa fa-search" />
									</li>
									<li>
										<a href="#" className="fa fa-link" />
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-4 col-sm-6">
						<div className="box3">
							<img src="http://bestjquery.com/tutorial/hover-effect/demo169/images/img-3.jpg" />
							<div className="box-content">
								<h3 className="title">Kristiana</h3>
								<span className="post">Web Designer</span>
								<p className="description">
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci pariatur
									qui.
								</p>
								<ul className="icon">
									<li>
										<a href="#" className="fa fa-search" />
									</li>
									<li>
										<a href="#" className="fa fa-link" />
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container" style={{ backgroundImage: "url(" + Home3 + ")" }}>
				<div className="row section-separator">
					<div className="section-header col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
						<h2 className="section-heading">Our Products and Services</h2>
						<p className="sub-heading" />
					</div>

					<div className="clearfix" />

					<div className="col-xs-12 features-item">
						<div className="row">
							<div className="each-features text-center col-md-4 col-sm-6 col-xs-12">
								<div className="inner background-light box3">
									<i className="icon features-icon icons8-clock" />

									<div className="box-content">
										<h3 className="title">Williamson</h3>
										<span className="post">Web Developer</span>
										<p className="description">
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci
											pariatur qui.
										</p>
										<ul className="icon">
											<li>
												<a href="#" className="fa fa-search" />
											</li>
											<li>
												<a href="#" className="fa fa-link" />
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="each-features text-center col-md-4 col-sm-6 col-xs-12">
								<div className="inner background-light">
									<i className="icon features-icon icons8-bullish" />
									<h6 className="title">Dynamic Growth</h6>
									<div className="detail">
										<p>
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
											nibh euismod tincidunt ut laoreet.
										</p>
									</div>
								</div>
							</div>

							<div className="each-features text-center col-md-4 col-sm-6 col-xs-12">
								<div className="inner background-light">
									<i className="icon features-icon icons8-calendar" />
									<h6 className="title">Weekly Report</h6>
									<div className="detail">
										<p>
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
											nibh euismod tincidunt ut laoreet.
										</p>
									</div>
								</div>
							</div>

							<div className="each-features text-center col-md-4 col-sm-6 col-xs-12">
								<div className="inner background-light">
									<i className="icon features-icon icons8-coins" />
									<h6 className="title">Well Promoted</h6>
									<div className="detail">
										<p>
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
											nibh euismod tincidunt ut laoreet.
										</p>
									</div>
								</div>
							</div>

							<div className="each-features text-center col-md-4 col-sm-6 col-xs-12">
								<div className="inner background-light">
									<i className="icon features-icon icons8-wine-glass" />
									<h6 className="title">Most Popular</h6>
									<div className="detail">
										<p>
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
											nibh euismod tincidunt ut laoreet.
										</p>
									</div>
								</div>
							</div>

							<div className="each-features text-center col-md-4 col-sm-6 col-xs-12">
								<div className="inner background-light">
									<i className="icon features-icon icons8-privacy" />
									<h6 className="title">Follows Law</h6>
									<div className="detail">
										<p>
											Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
											nibh euismod tincidunt ut laoreet.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

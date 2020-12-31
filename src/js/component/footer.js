import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			<div className="Row">
				{/*<i className="Col p-1 fab fa-facebook-square fa-3x" />*/}
				<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/akgspecialtyservices/">
					<i className="Col p-1 fab fa-instagram fa-3x" />
				</a>
			</div>
			<div style={{ display: "d-flex", alignItems: "center" }}>
				<div>AKG Roofing and Specialty Services, INC</div>
				<a href="tel:+13055498081">(305) 549-8081</a>
			</div>
		</p>
		<p>
			Customized by <a href="https://github.com/johnrohan87">John Rohan</a>
		</p>
	</footer>
);

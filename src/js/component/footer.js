import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<p>
			<div className="Row">
				<i className="Col p-1 fab fa-facebook-square fa-3x" />
				<i className="Col p-1 fab fa-instagram fa-3x" />
			</div>
		</p>
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="https://github.com/johnrohan87">John Rohan</a>
		</p>
	</footer>
);

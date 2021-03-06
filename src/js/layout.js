import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { NavbarMain } from "./component/navbar";
import { Gallery } from "./component/gallery";
import { Footer } from "./component/footer";
import { HeaderSection } from "./component/header_section";
import { FeatureS7 } from "./component/feature_s7";
import { FeatureS1 } from "./component/feature_s1";
import { FeatureS2 } from "./component/feature_s2";
import { FeatureS8 } from "./component/feature_s8";
import { SlideUpBox } from "./component/slide_up_box";
import { CountUp } from "./component/count_up";
import { CounterBar } from "./component/counter_bar";
import { ContactForm } from "./component/contact_form";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavbarMain />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						{/* 
						<Route exact path="/.well-known/acme-challenge/:data">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>*/}
						<Route>
							{/*<h1>Not found!</h1>*/}
							<Home />
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

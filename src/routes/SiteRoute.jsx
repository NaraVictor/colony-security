import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

// views
import {
	HomeView,
	AboutView,
	ContactView,
	NotFoundView,
	CorporateSecurityService,
	ManGuardingService,
	AudioVisualService,
	ITSolutionsService,
	SecurityRiskAssessmentService,
	MiningSecurityService,
} from "../views/index";

const SiteRoutes = (props) => {
	return (
		<div className="page-container">
			<NavBar />
			<div className="bg-light">
				<Switch>
					<Route path="/about" exact component={AboutView} />

					{/* services */}
					<Route
						path="/services/corporate-security-training"
						exact
						component={CorporateSecurityService}
					/>
					<Route
						path="/services/man-guarding"
						exact
						component={ManGuardingService}
					/>
					<Route
						path="/services/audio-visual"
						exact
						component={AudioVisualService}
					/>
					<Route
						path="/services/it-solutions"
						exact
						component={ITSolutionsService}
					/>
					<Route
						path="/services/security-assessment"
						exact
						component={SecurityRiskAssessmentService}
					/>
					<Route
						path="/services/mining-security"
						exact
						component={MiningSecurityService}
					/>

					{/* end of services */}
					<Route path="/contact" exact component={ContactView} />
					<Route path="/" exact component={HomeView} />
					<Route path="/not-found" component={NotFoundView} />
					<Redirect to="/not-found" />
				</Switch>
			</div>
			<Footer />
		</div>
	);
};

export default SiteRoutes;

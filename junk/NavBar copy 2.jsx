import { Link, NavLink } from "react-router-dom";
import logo from "../static/img/logo.png";

// import wslogo from "../static/icons/whatsapp-white.svg";
// import calllogo from "../static/icons/call.svg";

//

const NavBar = (props) => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-light site-navbar">
			<div class="container">
				<NavLink className="navbar-brand" exact to="/">
					<img
						src={logo}
						style={{
							maxHeight: "8vh",
						}}
						className="site-logo"
						alt="The Colony Security Logo"
					/>

					{/* <span className="site-name">The Colony Security</span> */}
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<NavLink
								activeClassName="active-nav"
								to="/about"
								exact
								className="nav-link">
								About
							</NavLink>
						</li>

						<li className="nav-item dropdown">
							<a
								id="navbarDropdown"
								activeClassName="active-nav"
								href="#"
								exact
								data-bs-toggle="dropdown"
								aria-expanded="false"
								className="nav-link dropdown-toggle">
								Services
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li>
									<NavLink
										activeClassName="active-nav"
										exact
										to="/services/mining-security"
										className="dropdown-item">
										Mining Security
									</NavLink>
								</li>
								<li>
									<NavLink
										activeClassName="active-nav"
										exact
										to="/services/audio-visual"
										className="dropdown-item">
										Audio Visual Surveillance Services
									</NavLink>
								</li>
								<li>
									<NavLink
										activeClassName="active-nav"
										exact
										to="/services/corporate-security-training"
										className="dropdown-item">
										Corporate Security Awareness Training
									</NavLink>
								</li>
								<li>
									<NavLink
										activeClassName="active-nav"
										exact
										to="/services/it-solutions"
										className="dropdown-item">
										I.T. Solutions
									</NavLink>
								</li>
								<li>
									<NavLink
										activeClassName="active-nav"
										exact
										to="/services/man-guarding"
										className="dropdown-item">
										Man Guarding
									</NavLink>
								</li>
								<li>
									<NavLink
										activeClassName="active-nav"
										exact
										to="/services/security-assessment"
										className="dropdown-item">
										Security and Risk Assessment
									</NavLink>
								</li>
							</ul>
						</li>
						<li className="nav-item">
							<NavLink
								activeClassName="active-nav"
								to="/contact"
								exact
								className="nav-link">
								Contact
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;

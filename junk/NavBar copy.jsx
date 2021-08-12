import { Link, NavLink } from "react-router-dom";
import logo from "../static/img/logo.png";

// import wslogo from "../static/icons/whatsapp-white.svg";
// import calllogo from "../static/icons/call.svg";

//
import SiteNav, { ContentGroup } from "react-site-nav";

const NavBar = (props) => {
	return (
		<>
			<div className="site-mobile-menu site-navbar-target">
				<div className="site-mobile-menu-header">
					<div className="site-mobile-menu-close mt-3">
						<span className="icon-close2 js-menu-toggle"></span>
					</div>
				</div>
				<div className="site-mobile-menu-body"></div>
			</div>

			<header className="site-navbar site-navbar-target bg-dark" role="banner">
				<div className="container">
					<div className="row align-items-center position-relative">
						<Link to="/">
							<img
								src={logo}
								className="site-logo"
								alt="The Colony Security Logo"
							/>

							<span className="site-name">The Colony Security</span>
						</Link>
						<div className="col-lg-4">
							<nav className="site-navigation  ml-auto" role="navigation">
								<ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
									{/* <li>
										<NavLink
											activeClassName="active"
											to="/"
											exact
											className="nav-link">
											Home
										</NavLink>
									</li> */}
									<li>
										<NavLink
											activeClassName="active"
											to="/about"
											className="nav-link">
											About
										</NavLink>
									</li>
									<li>
										<NavLink
											activeClassName="active"
											to="/services"
											className="nav-link">
											Services
										</NavLink>
									</li>
									<li>
										<NavLink
											activeClassName="active"
											to="/contact"
											className="nav-link">
											Contact
										</NavLink>
									</li>
								</ul>
							</nav>
						</div>
						<div className="ml-auto toggle-button d-inline-block d-lg-none">
							<Link
								to="#"
								className="site-menu-toggle py-5 js-menu-toggle text-black">
								<span className="icon-menu h3 text-black"></span>
							</Link>
						</div>
						<div className="col-lg-3"></div>
						<div className="col-lg-4">
							<nav className="site-navigation text-right" role="navigation">
								<ul className="site-menu main-menu js-clone-nav ml-auto d-none d-lg-block">
									<li>
										<a href="https://wa.me/233550203842" className="nav-link">
											<i className="fab fa-whatsapp pr-2 fa-1x"></i>
											Whatsapp us
										</a>
									</li>
									<li>
										<a href="tel:+233550203842" className="nav-link">
											<i className="fas fa-phone-alt pr-2 fa-1x"></i>
											055 020 3842
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default NavBar;

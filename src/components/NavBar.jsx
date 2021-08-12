import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../static/img/logo.png";

import cam from "../static/svg/cam.svg";
//

const NavBar = (props) => {
	useEffect(() => {
		const menuBtn = document.querySelector(".menu-btn");
		const menuItems = document.querySelector(".menu-items");
		const expandBtn = document.querySelectorAll(".expand-btn");

		// humburger toggle
		menuBtn.addEventListener("click", () => {
			menuBtn.classList.toggle("open");
			menuItems.classList.toggle("open");
		});

		// mobile menu expand
		expandBtn.forEach((btn) => {
			btn.addEventListener("click", () => {
				btn.classList.toggle("open");
			});
		});
	});

	return (
		<header class="header">
			<NavLink to="/" className="logo">
				<img
					src={logo}
					className="site-logo"
					style={{ maxHeight: "8vh" }}
					alt="The Colony Security Logo"
				/>
				<span className="site-name">The Colony Security</span>
			</NavLink>
			<div className="menu-btn">
				<div className="menu-btn__lines"></div>
			</div>
			<ul className="menu-items">
				<li>
					<NavLink
						activeClassName="active-nav"
						to="/about"
						className="menu-item expand-btn">
						ABOUT
					</NavLink>
				</li>
				<li>
					<a href="#" className="menu-item expand-btn">
						SERVICES
					</a>
					<div className="mega-menu expandable">
						<div className="content">
							<div className="col">
								<section>
									<ul className="mega-links">
										<li className="d-flex">
											{/* <img src={cam} style={{ maxHeight: "10vh" }} alt="" /> */}
											<NavLink
												activeClassName="active-nav"
												exact
												to="/services/mining-security"
												className="dropdown-item">
												Mining Security
											</NavLink>
										</li>
										<li className="d-flex">
											{/* <img src={cam} style={{ maxHeight: "10vh" }} alt="" /> */}

											<NavLink
												activeClassName="active-nav"
												exact
												to="/services/audio-visual"
												className="dropdown-item">
												Audio Visual Surveillance Services
											</NavLink>
										</li>
										<li className="d-flex">
											{/* <img src={cam} style={{ maxHeight: "10vh" }} alt="" /> */}

											<NavLink
												activeClassName="active-nav"
												exact
												to="/services/corporate-security-training"
												className="dropdown-item">
												Corporate Security Awareness Training
											</NavLink>
										</li>
									</ul>
								</section>
							</div>
							<div className="col">
								<section>
									<ul class="mega-links">
										<li className="d-flex">
											{/* <img src={cam} style={{ maxHeight: "10vh" }} alt="" /> */}

											<NavLink
												activeClassName="active-nav"
												exact
												to="/services/it-solutions"
												className="dropdown-item">
												I.T. Solutions
											</NavLink>
										</li>
										<li className="d-flex">
											{/* <img src={cam} style={{ maxHeight: "10vh" }} alt="" /> */}

											<NavLink
												activeClassName="active-nav"
												exact
												to="/services/man-guarding"
												className="dropdown-item">
												Man Guarding
											</NavLink>
										</li>
										<li className="d-flex">
											{/* <img src={cam} style={{ maxHeight: "10vh" }} alt="" /> */}

											<NavLink
												activeClassName="active-nav"
												exact
												to="/services/security-assessment"
												className="dropdown-item">
												Security and Risk Assessment
											</NavLink>
										</li>
									</ul>
								</section>
							</div>
						</div>
					</div>
				</li>

				<li>
					<NavLink
						activeClassName="active-nav"
						to="/contact"
						className="menu-item">
						CONTACT
					</NavLink>
				</li>
			</ul>
		</header>
	);
};

export default NavBar;

{
	/* <div class="col">
								<section>
									<a href="#" class="img-wrapper">
										<span class="img">
											<img
												src="https://picsum.photos/400?random=1"
												alt="feature"
											/>
										</span>
									</a>
									<p>Lorem ipsum dolor sit amet.</p>
								</section>
							</div> */
}
{
	/* <li class="dropdown">
					<a href="#" class="menu-item expand-btn">
						Dropdown Menu
					</a>
					<ul class="dropdown-menu expandable">
						<li>
							<a href="#" class="menu-item">
								Item 1
							</a>
						</li>
						<li>
							<a href="#" class="menu-item">
								Item 2
							</a>
						</li>
						<li class="dropdown dropdown-right">
							<a href="#" class="menu-item expand-btn">
								Item 3<i class="fas fa-angle-right"></i>
							</a>
							<ul class="menu-right expandable">
								<li>
									<a href="#" class="menu-item">
										Item 3.1
									</a>
								</li>
								<li>
									<a href="#" class="menu-item">
										Item 3.2
									</a>
								</li>
								<li>
									<a href="#" class="menu-item">
										Item 3.3
									</a>
								</li>
								<li>
									<a href="#" class="menu-item">
										Item 3.4
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#" class="menu-item">
								Item 4
							</a>
						</li>
					</ul>
				</li> */
}
{
	/* <li>
	<a href="#" class="menu-item expand-btn">
		Blog
	</a>
	<div class="mega-menu blog expandable">
		<div class="content">
			<div class="col">
				<a href="#" class="img-wrapper">
					<span class="img">
						<img src="https://picsum.photos/400?random=2" alt="Random Image" />
					</span>
				</a>
				<h2>Title</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum vel
					quae quos culpa! Voluptate ipsum adipisci et quibusdam deserunt quis.
				</p>
				<a href="#" class="read-more">
					read more...
				</a>
			</div>
			<div class="col">
				<a href="#" class="img-wrapper">
					<span class="img">
						<img src="https://picsum.photos/400?random=3" alt="Random Image" />
					</span>
				</a>
				<h2>Title</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum vel
					quae quos culpa! Voluptate ipsum adipisci et quibusdam deserunt quis.
				</p>
				<a href="#" class="read-more">
					read more...
				</a>
			</div>
			<div class="col">
				<a href="#" class="img-wrapper">
					<span class="img">
						<img src="https://picsum.photos/400?random=4" alt="Random Image" />
					</span>
				</a>
				<h2>Title</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum vel
					quae quos culpa! Voluptate ipsum adipisci et quibusdam deserunt quis.
				</p>
				<a href="#" class="read-more">
					read more...
				</a>
			</div>
		</div>
	</div>
</li>; */
}

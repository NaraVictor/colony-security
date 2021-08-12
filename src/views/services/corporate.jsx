// import Principles from "./_principles";
// import About from "./_about";
import { Link } from "react-router-dom";
import img from "../../static/img/img.png";
import training from "../../static/svg/training.svg";

const CorporateSecurityService = (props) => {
	return (
		<>
			<section className="hero py-4">
				<div className="container">
					<div className="row">
						<div className="col">
							<p>
								Our security services provide contract based security solutions.
								We implore highly trained professionals and the use of modern
								technology. We guarantee substantial safety to assets and
								persons under our jurisdiction. Below are the specialties,
							</p>
						</div>
					</div>
				</div>
			</section>

			<div className="py-5">
				<section className="section">
					<div className="service-img">
						<img src={training} alt="" />
					</div>
					<div className="container">
						<div className="row">
							<div className="col-12 text-left px-4 px-md-5">
								<h3 className="section-header">
									CORPORATE SECURITY AND AWARENESS TRAINING
								</h3>
								<p className="py-5 my-5">
									Our highly qualified training instructors, with both local and
									international combat and security experience provide quality
									training services in defense strategy, active combat, risk
									perception and mitigation for your staff. Our facilities
									coupled with above industry set standards gives you the value
									for money to deliver the finest security training for you
									and/or your organization.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export { CorporateSecurityService };

// import Principles from "./_principles";
// import About from "./_about";
import { Link } from "react-router-dom";
import img from "../../static/img/img.png";

// icons
import training from "../../static/svg/training.svg";
import cam from "../../static/svg/cam.svg";
import caution from "../../static/svg/caution.svg";
import helmet from "../../static/svg/helmet.svg";
import laptop from "../../static/svg/laptop.svg";
import policeman from "../../static/svg/policeman.svg";
import presentation from "../../static/svg/presentation.svg";
import securityMan from "../../static/svg/security-man.svg";

const HomeView = (props) => {
	return (
		<>
			<section className="pb-4">
				<div className="hero home-hero">
					<div className="row">
						<div className="col">
							<p>content here</p>
						</div>
					</div>
				</div>
				<div className="bubble py-5 text-center shadow bg-white">
					<div className="bubble-content row m-0">
						<a
							href="/services/man-guarding"
							className="col-4  bottom-border p-4 bubble-service">
							Man Guarding
						</a>
						<a
							href="/services/mining-security"
							className="col-4 left-border bottom-border p-4 bubble-service">
							Mining Security
						</a>
						<a
							href="/services#itsolutions"
							className="col-4 left-border bottom-border p-4 bubble-service">
							I.T. Solutions
						</a>

						<a
							href="/services/security-assessment"
							className="col-4 p-4 bubble-service">
							Security & Risk Assessment
						</a>
						<a
							href="/services/audio-visual"
							className="col-4 left-border left-border p-4 bubble-service">
							Audio & Visual Systems
						</a>
						<a
							href="/services/corporate-security-training"
							className="col-4 p-4 left-border bubble-service">
							Corporate Security Training
						</a>
					</div>
				</div>
			</section>
			<section className="bg-light section-principles">
				<div className="container">
					<div className="row py-5 px-3">
						<div className="col-md-6 col-12">
							{/* <img src={img} alt="" /> */}
						</div>
						<div className="col-md-6 col-12 my-auto pt-4 pt-md-0">
							<p className="section-brief">
								The Colony Security Services Limited combines years of tested
								strategies, technology, and data to solve the most complex
								security challenges. We implore the appropriate technology and
								processes to improve upon our service delivery. Our hallmark is
								to provide convenient, need-oriented and target driven security
								services to all our clients
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className="py-5">
				<section className="section section-solutions curve-up">
					<div className="container">
						<div className="row">
							<div className="col-12 text-center">
								<h3 className="section-header pb-3">OUR SOLUTIONS</h3>
								<p className="px-3 px-md-5">
									Our security services provide contract based security
									solutions. We implore highly trained professionals and the use
									of modern technology. We guarantee substantial safety to
									assets and persons under our jurisdiction. Below are the
									specialties,
								</p>
							</div>
						</div>
						<div className="row p-5 text-center">
							<div className="col-md-4 col-12 pb-5 solution">
								<img src={training} alt="" />

								<h4>Corporate Security and Awareness Training</h4>
								<p>
									Our team is endowed with rich industry experience and ready to
									deliver the finest security training for you and/or your
									organization.{" "}
								</p>
							</div>
							<div className="col-md-4 col-12 pb-5 solution">
								<img src={securityMan} alt="" />

								<h4>Man Guarding</h4>
								<p>
									We provide the best and highly trained personnel to provide
									the needed security detail.
								</p>
							</div>
							<div className="col-md-4 col-12 pb-5 solution">
								<img src={cam} alt="" />

								<h4>Audio and Visual Surveillance Services</h4>
								<p>
									Our CCTVs and Access Control systems give control to our
									clients on the monitoring of who has access to what system, IT
									networks, or facility and smarter video surveillance to spot
									threats and avoid security breaches.{" "}
								</p>
							</div>
							<div className="col-md-4 col-12 pb-5 solution">
								<img src={caution} alt="" />

								<h4>Security and Risk Assessment</h4>
								<p>
									Our IT and Risk management division provide explicit Security
									and Risk Assessment for business, corporate organizations and
									diplomatic bodies for assets and staff protection.
								</p>
							</div>
							<div className="col-md-4 col-12 pb-5 solution">
								<img src={helmet} alt="" />

								<h4>Mining Security</h4>
								<p>
									We help mining companies measure the effectiveness or
									consequences associated with implemented activities or
									processes in their mining operations.
								</p>
							</div>
							<div className="col-md-4 col-12 solution">
								<img src={laptop} alt="" />

								<h4>I. T. Solutions</h4>
								<p>
									We provide world class enterprise-level IT solutions putting
									into consideration the highest security standards in our
									service provision.
								</p>
							</div>
						</div>
					</div>
				</section>
				<div className="section section-why-us">
					<div className="container">
						<div className="row py-5 px-3">
							<div className="text-center col px-md-5 mx-md-5 mx-0 px-0">
								<h3 className="section-header pb-5 color-primary">
									Why Choose Us
								</h3>
								<p className="px-3">
									TCSSL team has been exposed to prospective clients in various
									industries that have aided the team in the acquisition of rich
									experience in security issues like Access Control and CCTV
									Monitoring and Management, Operational Requirement Assessment
									system, Incidents Management, Deterrent Patrols, Car Parking
									Management, Gate Keeping and Key Management Holding many
									others. The Management and Operation team liaise with all
									clients to set and implement customize security strategies
									that will be best for achieving the goals on Time, Quality,
									Cost, Safety Environmental using the right task assignment and
									training program. We emphasize on feedbacks from clients in a
									partnership that enables proactive adjustment to meet both
									current and emerging threats and security challenges.
								</p>
							</div>
						</div>
					</div>
				</div>

				<section className="section mission-vision py-5">
					<div className="container">
						<div className="row px-3">
							<div className="col-md-6 col-12">
								<h4 className="color-primary">OUR VISION</h4>
								<p>
									We aspire to become the leading security service provider
									through exploring the national and regional frontiers of Ghana
									for alternate technology-oriented security development by
									improving organizational performance and living standards,
									especially in our developing world through sustainable policy
									management.
								</p>
							</div>
							<div className="col-md-6 col-12 mt-5 mt-md-0">
								<h4>OUR MISSION</h4>
								<p>
									Our mission is to provide specialized and efficiently
									integrated security solutions using the most effective
									state-of-the-art industrial security techniques, equipment,
									and professionally-trained personnel at competitive rates to
									contribute to the promotion of private security operations in
									Ghana.
								</p>
							</div>
							<p className="section-brief py-5 pt-4">
								We provide quality security solutions at all levels. At the
								Colony Security excellence is our hallmark. Contact us today.
							</p>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export { HomeView };

import bg from "../../static/img/service-bg.png";

const ServicesView = (props) => {
	return (
		<>
			<section className="services-hero text-light hero-mini py-4">
				<div className="container">
					<div className="row">
						<div className="col">
							<h1>services</h1>
							<p>
								Our security services provide contract based security solutions.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="bg-light py-5 px-3">
				<div className="container">
					<p className="text-center text-md-left">
						We implore highly trained professionals and the use of modern
						technology. We guarantee substantial safety to assets and persons
						under our jurisdiction. Below are the specialties,
					</p>
					<div className="divider"></div>
					<div className="row py-3 mt-5" id="corporatesecurity">
						<div className="col-md-4 col-12 service-title my-auto text-center">
							<h4>CORPORATE SECURITY AND AWARENESS TRAINING</h4>
							{/* <img src={bg} alt="service background" /> */}
						</div>

						<div className="col-md-7 col-12 text-justify text-md-left mt-5 mt-md-0">
							<p>
								Our highly qualified training instructors, with both local and
								international combat and security experience provide quality
								training services in defense strategy, active combat, risk
								perception and mitigation for your staff. Our facilities coupled
								with above industry set standards gives you the value for money
								to deliver the finest security training for you and/or your
								organization.
							</p>
						</div>
					</div>
					<div className="divider"></div>

					<div className="row py-3" id="manguarding">
						<div className="col-md-7 col-12 text-justify text-md-left mt-5 mt-md-0 order-1">
							<p>
								The Colony Security Services Limited is the recommended partner
								for all personal protection purposes. Our highly trained and
								resourced personnel are poised to guard persons and assets
								against any potential emergencies, intrusions, or accidents at
								any given time and place. We provide a continual security detail
								for high profile diplomats and companies across the country. We
								believe the safety of our clients comes first, anytime,
								anywhere, any day.
							</p>
						</div>
						<div className="col-md-4 col-12 service-title my-auto text-center order-0 order-md-3">
							<h4>MAN GUARDING</h4>
							{/* <img src={bg} alt="service background" /> */}
						</div>
					</div>
					<div className="divider"></div>

					<div className="row py-3" id="audiovisual">
						<div className="col-md-4 col-12 my-auto text-center service-title">
							<h4>AUDIO & VISUAL SURVEILLANCE SERVICES</h4>
							{/* <img src={bg} alt="service background" /> */}
						</div>
						<div className="col-md-7 col-12 text-justify text-md-left mt-5 mt-md-0">
							<p>
								The Colony Security Services Limited leverages on its state of
								art security technology to provide visual and audio surveillance
								solutions for properties and persons. Our CCTVs and Access
								Control systems give control to our clients on the monitoring of
								who has access to what system, IT networks, or facility and
								smarter video surveillance to spot threats and avoid security
								breaches. Our field personnel’s provide timely intervention in
								event of breaches to security perimeters.{" "}
							</p>
						</div>
					</div>
					<div className="divider"></div>

					<div className="row py-3" id="securityandrisk">
						<div className="col-md-7 col-12 text-justify text-md-left mt-5 mt-md-0 order-1">
							<p>
								The Colony Security Services Limited has a trademark of Risk
								Assessment and Mitigation Strategies for it clients. Our IT and
								Risk management division provide explicit Security and Risk
								Assessment for business, corporate organizations and diplomatic
								bodies for assets and staff protection. The team designs and
								implement solutions to risks and security breaches for the
								safety of operations and persons. At The Colony Security
								Services limited, we pride ourselves on providing the requisite
								thirdparty investigations and background checks that enable
								businesses to make the right decisions needed to avoid financial
								inconveniences.
							</p>
						</div>
						<div className="col-md-4 col-12 service-title my-auto text-center order-0 order-md-3">
							<h4>SECURITY AND RISK ASSESSMENT</h4>
							{/* <img src={bg} alt="service background" /> */}
						</div>
					</div>
					<div className="divider"></div>

					<div className="row py-3" id="miningsecurity">
						<div className="col-md-4 col-12 service-title my-auto text-center">
							<h4>MINING SECURITY</h4>
							{/* <img src={bg} alt="service background" /> */}
						</div>
						<div className="col-md-7 col-12 text-justify text-md-left mt-5 mt-md-0">
							<p>
								We help mining companies measure the effectiveness or
								consequences associated with implemented activities or processes
								in their mining operations. We make sure that your site, pieces
								of equipment, assets, and personnel are duly protected. We
								deliver world-class risk mitigation solutions at competitive
								prices with the best technology.
							</p>
						</div>
					</div>
					<div className="divider"></div>

					<div className="row py-3" id="itsolutions">
						<div className="col-md-7 col-12 text-justify text-md-left mt-5 mt-md-0 order-1">
							<p>
								We provide world class enterprise-level IT solutions. We help
								you assess the state of your IT systems with regards to how
								secured they are and the vulnerabilities within it. Our teams
								commit to the highest security standards in our service
								provision. Our state of the art IT solution centre provides
								outstanding services to our clients. We give you nothing but the
								best.
							</p>
						</div>
						<div className="col-md-4 col-12 service-title my-auto text-center order-0 order-md-3">
							<h4>IT SOLUTIONS</h4>
							{/* <img src={bg} alt="service background" /> */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export { ServicesView };

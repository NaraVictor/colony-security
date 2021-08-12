import caution from "../../static/svg/caution.svg";

const SecurityRiskAssessmentService = (props) => {
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
						<img src={caution} alt="" />
					</div>
					<div className="container">
						<div className="row">
							<div className="col-12 text-left px-4 px-md-5">
								<h3 className="section-header">SECURITY AND RISK ASSESSMENT</h3>
								<p className="py-5 my-5">
									The Colony Security Services Limited has a trademark of Risk
									Assessment and Mitigation Strategies for it clients. Our IT
									and Risk management division provide explicit Security and
									Risk Assessment for business, corporate organizations and
									diplomatic bodies for assets and staff protection. The team
									designs and implement solutions to risks and security breaches
									for the safety of operations and persons. At The Colony
									Security Services limited, we pride ourselves on providing the
									requisite third-party investigations and background checks
									that enable businesses to make the right decisions needed to
									avoid financial inconveniences.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export { SecurityRiskAssessmentService };

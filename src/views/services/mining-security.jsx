import helmet from "../../static/svg/helmet.svg";

const MiningSecurityService = (props) => {
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
						<img src={helmet} alt="" />
					</div>
					<div className="container">
						<div className="row">
							<div className="col-12 text-left px-4 px-md-5">
								<h3 className="section-header">MINING SECURITY</h3>
								<p className="py-5 my-5">
									We help mining companies measure the effectiveness or
									consequences associated with implemented activities or
									processes in their mining operations. We make sure that your
									site, pieces of equipment, assets, and personnel are duly
									protected. We deliver world-class risk mitigation solutions at
									competitive prices with the best technology.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export { MiningSecurityService };

import security from "../../static/svg/security-man.svg";

const ManGuardingService = (props) => {
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
						<img src={security} alt="" />
					</div>
					<div className="container">
						<div className="row">
							<div className="col-12 text-left px-4 px-md-5">
								<h3 className="section-header">MAN GUARDING</h3>
								<p className="py-5 my-5">
									The Colony Security Services Limited is the recommended
									partner for all personal protection purposes. Our highly
									trained and resourced personnel are poised to guard persons
									and assets against any potential emergencies, intrusions, or
									accidents at any given time and place. We provide a continual
									security detail for high profile diplomats and companies
									across the country. We believe the safety of our clients comes
									first, anytime, anywhere, any day.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export { ManGuardingService };

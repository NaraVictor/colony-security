const Footer = (props) => {
	return (
		<footer className="pt-5 footer curve-up">
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-6 text-justify text-md-left px-5 px-md-0 mb-4 mb-md-0">
						<h4 className="text-center text-md-left mb-4">
							The Colony Security Services Ltd
						</h4>
						<div className="text-secondary">
							<p>
								The Colony Security Services Limited (TCSSL) is registered as a
								company by the Registrar General’s Department and licensed to
								provide security service by the Ministry of Interior of Ghana.
							</p>
							<p>
								We provide reliable, specific solutions to all your needs with
								service performance beyond your expectations.
							</p>
						</div>
					</div>
					<div className="col-12 col-md-6">
						<div className="row mb-2">
							<div className="col-3 text-right">
								<i className="fas fa-phone-alt"></i>
							</div>
							<div className="pl-3 col-9">
								<a href="tel:+233303941509">+233 (0)30 394 1509</a>
								<br />
								<a href="tel:+233550203842">+233 (0)55 020 3842</a>
							</div>
						</div>
						<div className="row mb-2">
							<div className="col-3 text-right">
								<i className="far fa-envelope"></i>
							</div>
							<div className="pl-3 col-9">
								<a href="mailto:info@thecolonysecurity.com">
									info@thecolonysecurity.com
								</a>
							</div>
						</div>
						<div className="row mb-2">
							<div className="col-3 text-right">
								<i className="far fa-calendar"></i>
							</div>
							<div className="pl-3 col-9">
								<span>Mon-Fri 8:30am – 5:00pm</span>
							</div>
						</div>

						<div className="row">
							<div className="col-3 text-right">
								<i className="fas fa-map-marker"></i>
							</div>
							<div className="pl-3 col-9">
								<a href="https://goo.gl/maps/joKSYCjKb7ewggvf7">
									Hse 365, 73 Lakeside Road, Nii Amasa Nikoi Avenue, Ashale
									Botwe - Accra, Ghana
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row text-center mt-5">
					<div>
						<i className="fab fa-facebook-f pr-2"></i>
						<i className="fab fa-instagram pr-2"></i>
						<i className="fab fa-linkedin pr-2"></i>
						<i className="fab fa-twitter"></i>
					</div>
					<div className="mb-0">@the colony security</div>
				</div>
				<div className="row">
					<div className="col text-center text-muted">
						<div className="divider my-2"></div>
						<p>@2021 The Colony Security Services</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

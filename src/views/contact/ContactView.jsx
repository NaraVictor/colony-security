import Helmet from "react-helmet";

const ContactView = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(e);
		const { name, email, message } = e.target;
		// console.log(name.value, email.value, message.value);
	};
	return (
		<>
			<Helmet>
				<title>Contact - The Colony Security Services</title>
			</Helmet>
			<section className="hero py-4">
				<div className="container">
					<div className="row">
						<div className="col p-5 p-md-0">
							<h1>CONTACT</h1>
							<p>Get in touch with us</p>
						</div>
					</div>
				</div>
			</section>
			<section className="section p-4">
				<div className="container">
					<div className="row">
						<div className="col">
							<h3 className="section-header pb-4 color-primary">
								Book an appointment
							</h3>
							<div className="divider"></div>
							<p className="pt-3">
								For service inquiry or feedback, please complete the details
								below and then click on Submit. Our customer services agent will
								respond to you shortly.
							</p>
							<div>
								<form onSubmit={handleSubmit}>
									<div className="row">
										<div className="col-12 col-md-3">
											<input
												type="text"
												name="name"
												id="name"
												className="w-100 p-2"
												placeholder="name"
												required
											/>
										</div>
										<div className="col-12 col-md-3">
											<input
												type="email"
												name="email"
												placeholder="email"
												id="email"
												className="w-100 p-2 mt-2 mt-md-0"
												required
											/>
										</div>
										<div className="col-md-3"></div>
										<div className="col-12 col-md-6 mt-2">
											<textarea
												name="message"
												className="w-100 p-2"
												placeholder="your message here"
												id="message"
												cols="30"
												required
												rows="10"></textarea>
										</div>
									</div>
									<input
										type="submit"
										value="Send"
										className="p-2 px-4 button-outline"
									/>
								</form>
							</div>
							<p className="mt-5">
								Looking for a comprehensive security solution? Request for a
								call today
							</p>
							<h3 className="mt-5">
								<strong>GET IN TOUCH</strong>
							</h3>
							<p className="mb-1">
								<strong style={{ fontWeight: 900 }}>Call Now:</strong>{" "}
								<a href="tel:+233303941509" className="text-black">
									(+233) 0303941509
								</a>{" "}
								/{" "}
								<a href="tel:+233550203842" className="text-black">
									(+233) 0550203842
								</a>
							</p>
							<p className="mb-1">
								<strong style={{ fontWeight: 900 }}>Email: </strong>{" "}
								<a
									href="mailto:info@thecolonysecurity.com"
									className="text-black">
									info@thecolonysecurity.com
								</a>
							</p>
							<p>
								<strong style={{ fontWeight: 900 }}>Working Hrs: </strong>
								Mon-Fri 8am - 5pm
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="section  p-4">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3 className="mb-3">
								<strong>GET INTERACTIVE</strong>
							</h3>
							<a
								href="https://facebook.com/thecolonysecurities"
								target="_blank"
								rel="noreferrer">
								<i className="fab fa-facebook-f fa-2x pr-4"></i>
							</a>
							<a href="#">
								<i className="fab fa-instagram  fa-2x pr-4"></i>
							</a>
							<a
								href="https://www.linkedin.com/company/the-colony-securities"
								target="_blank"
								rel="noreferrer">
								<i className="fab fa-linkedin  fa-2x pr-4"></i>
							</a>
							<a
								href="https://twitter.com/colony_security"
								target="_blank"
								rel="noreferrer">
								<i className="fab fa-twitter  fa-2x pr-4"></i>
							</a>

							<a
								href="https://wa.me/233550203842"
								target="_blank"
								rel="noreferrer">
								<i className="fab fa-whatsapp fa-2x"></i>
							</a>
						</div>
					</div>
				</div>
			</section>
			<section className="section p-4">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3>
								<strong>LOCATION</strong>
							</h3>
							<p>
								Hse 365, <br />
								73 Lakeside Road, <br />
								Nii Amasa Nikoi Avenue, <br />
								Ashale Botwe - Accra Ghana
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export { ContactView };

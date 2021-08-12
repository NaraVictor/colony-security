import Card from "../../components/Card";
// import img from "../../static/img/img.png";
import profilePic from "../../static/img/profile-pic-placeholder.jpg";

const AboutView = (props) => {
	return (
		<>
			<section className="hero p-5">
				<div className="container">
					<div className="row">
						<div className="col text-light">
							<h1>About Us</h1>
							<p>We are your trusted security expert</p>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="container">
					<div className="row py-5 px-3">
						<div className="col-12 col-md-8">
							<div className="">
								<h3 className="section-header pb-4 color-primary">OVERVIEW</h3>
								<p>
									The Colony Security Services Limited (TCSSL) is registered as
									a company by the Registrar General’s Department and licensed
									to provide security service by the Ministry of Interior of
									Ghana. The Colony Security Services Limited is a security firm
									with many years of experience in providing excellent security
									solutions to the need of its clients. With highly trained
									staff, we are committed to protecting the interest of our
									clients. Our state of the art facilities and services set the
									most rigorous performance standards known in the security
									industry and monitoring.
								</p>
								<p>
									We provide reliable, specific solutions to all your needs with
									service performance beyond your expectations. We ensure
									confidentiality and topmost protection to all assets and
									people. TCSSL partners with clients to develop strategies that
									focus on reducing costs, increasing safety standards, and
									providing high-quality service per the client’s set goals. In
									this ever-changing environment of work, technology, and
									processes, new ways of doing things better emerge and
									businesses ought to invest in them to stay relevant and
									secured. Day in day out as these processes and environments
									change more businesses get faced with even greater threats
									than before and for such reasons, we are here to help.
								</p>
							</div>
						</div>
						<div className="col-12 col-md-4">
							<img src="" alt="" />
						</div>
					</div>
				</div>
			</section>
			<div className="divider"></div>
			<section className="bg-light">
				<div className="container">
					<div className="row py-5 px-3 mt-5">
						<div className="text-center col-md-6 col-12">
							<h3 className="mb-4">OUR VISION</h3>
							<p>
								We aspire to become the leading security service provider
								through exploring the national and regional frontiers of Ghana
								for alternate technology-oriented security development by
								improving organizational performance and living standards,
								especially in our developing world through sustainable policy
								management.
							</p>
						</div>
						<div className="text-center col-md-6 col-12 my-5 mt-md-0">
							<h3 className="mb-4">OUR MISSION</h3>
							<p>
								Our mission is to provide specialized and efficiently integrated
								security solutions using the most effective state-of-the-art
								industrial security techniques, equipment, and
								professionally-trained personnel at competitive rates to
								contribute to the promotion of private security operations in
								Ghana.
							</p>
						</div>
					</div>
					<div className="my-5">
						<div className="container">
							<div className="row">
								<div className="col-12 col-md-6"></div>

								<div className="col-12 col-md-6">
									<p>We are guided by the principles of</p>
									<p>✓ Loyalty</p>
									<p>✓ Reliability</p>
									<p>✓ Integrity</p>
									<p>✓ Accuracy</p>
									<p>✓ Commitment to objectives and shared values </p>
									<p className="pt-4">
										The Colony Security Services Limited is a trusted and
										reliable partner and we are ready to provide the next
										generation of intelligence and diligence in task completion
										and objective delivery in the security industry, thus,
										looking forward to working together with National and
										Private institutions in this regard.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="section py-5">
				<div className="container">
					<div className="row pb-3 px-3">
						<div className="col-md-4 col-12 d-flex justify-content-center mb-4">
							<Card
								imgUrl={profilePic}
								name="Philip D. Johnson"
								position="Chief Operating Officer"
							/>
						</div>
						<div className="col-md-8 col-12  px-4">
							<h3 className="text-center text-md-left">Message from the COO</h3>
							<p className="text-center text-md-left">
								meet the heroes behind your safety
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="section section-benefits py-5 curve-up">
				<div className="container">
					<div className="row pb-3 px-3 mt-5">
						<div className="benefit col-12 col-md-4 mb-4">
							<h4>Let’s collaborate</h4>
							<p>
								The Colony Security Services ensures confidentiality and topmost
								protection to all assets and people. TCSSL partners with clients
								to develop strategies that focus on reducing costs, increasing
								safety standards, and providing high-quality service following
								the client’s set goals.
							</p>
						</div>
						<div className="benefit col-12 col-md-4 mb-4">
							<h4>A satisfied customer</h4>
							<p>
								Colony Security Services Ltd. understands the value of safety
								and commitment to shared values. It is, for this reason, we
								dedicate to giving the best of protection to our clients, to
								make sure that they are safe in all transparency.
							</p>
						</div>
						<div className="benefit col-12 col-md-4">
							<h4>Building healthy relationships</h4>
							<p>
								As you focus on your business activities, give some level of
								attention to how secured your operations are and how it can
								affect the growth of your business. If you are well equipped to
								handle your security systems then that’s great, if not, engaging
								a trusted security partner to handle your business's safety as
								you focus on achieving your goals as a business is always a step
								in the right direction.
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className="divider"></div>
		</>
	);
};

export { AboutView };

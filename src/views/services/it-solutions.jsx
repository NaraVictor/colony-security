import { Link } from "react-router-dom";
import laptop from "../../static/svg/laptop.svg";

const ITSolutionsService = (props) => {
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
						<img src={laptop} alt="" />
					</div>
					<div className="container">
						<div className="row">
							<div className="col-12 text-left px-4 px-md-5">
								<h3 className="section-header">IT SOLUTIONS </h3>
								<p className="py-5 my-5">
									We provide world class enterprise-level IT solutions. We help
									you assess the state of your IT systems with regards to how
									secured they are and the vulnerabilities within it. Our teams
									commit to the highest security standards in our service
									provision. Our state of the art IT solution centre provides
									outstanding services to our clients. We give you nothing but
									the best.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export { ITSolutionsService };

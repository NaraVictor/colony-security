// import Principles from "./_principles";
// import About from "./_about";
import { Link } from "react-router-dom";
import img from "../../static/img/img.png";
import audioVisual from "../../static/svg/cam.svg";

const AudioVisualService = (props) => {
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
						<img src={audioVisual} alt="" />
					</div>
					<div className="container">
						<div className="row">
							<div className="col-12 text-left px-4 px-md-5">
								<h3 className="section-header">
									AUDIO & VISUAL SURVEILLANCE SERVICES{" "}
								</h3>
								<p className="py-5 my-5">
									The Colony Security Services Limited leverages on its state of
									art security technology to provide visual and audio
									surveillance solutions for properties and persons. Our CCTVs
									and Access Control systems give control to our clients on the
									monitoring of who has access to what system, IT networks, or
									facility and smarter video surveillance to spot threats and
									avoid security breaches. Our field personnel’s provide timely
									intervention in event of breaches to security perimeters.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export { AudioVisualService };

import { Link } from "react-router-dom";

const NotFoundView = (props) => {
	return (
		<>
			<section className="section-not-found hero-mini py-4">
				<div className="container">
					<div className="row text-white">
						<div className="col p-5">
							<h1>404</h1>
							<p>Resource not found</p>
						</div>
					</div>
				</div>
			</section>
			<section className="section">
				<section className="container">
					<div className="row">
						<div className="col p-5 my-5">
							<h3>Lost your way?</h3>
							<Link to="/">Return home</Link>
						</div>
					</div>
				</section>
			</section>
		</>
	);
};

export { NotFoundView };

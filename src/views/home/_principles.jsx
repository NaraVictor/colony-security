import img from "../../static/img/img.png";

const Principles = (props) => {
	return (
		<section>
			<div className="container">
				<div className="row">
					<div className="col-4 col-12">
						<img src={img} alt="" />
					</div>
					<div className="col-8 col-12">principles</div>
				</div>
			</div>
		</section>
	);
};

export default Principles;

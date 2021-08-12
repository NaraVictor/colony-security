const Card = ({ imgUrl, name, position, classes }) => {
	return (
		<div className={`team-card shadow-sm ${classes}`}>
			<img className="team-card-image" src={imgUrl} alt="profile shot" />
			<div className="team-card-details">
				<h5 className="team-card-name">{name}</h5>
				<p className="team-card-position">{position}</p>
			</div>
		</div>
	);
};

export default Card;

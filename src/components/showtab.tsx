import like from "/icons/thumb-up.svg";
import play from "/icons/play.svg";
import add from "/icons/add.svg";
import { Link } from "react-router-dom";
// import LinkButton from "./LinkButton";

interface ShowTabProps {
	name: string;
	image: string;
	showType: string;
	releaseYear: string;
	endYear?: string;
	id: string;
}

const ShowTab = ({
	name,
	image,
	showType,
	releaseYear,
	endYear,
	id,
}: ShowTabProps) => {
	const media = showType === "Movie" ? "movie" : "tv";
	return (
		<Link to={`/details/${media}/${id}`} className="show">
			<div className="show">
				<img src={image} alt={name} className="poster" />
				<div className="show-info">
					<div className="actions">
						<img src={play} alt="play" />
						<img src={add} alt="add to list" />
						<img src={like} alt="like" />
					</div>
					<div className="show-text">
						<p>{name}</p>
						<div>
							<span>{showType}</span>
							<span>•</span>
							<span>{releaseYear}</span>
							<p>{endYear ? ` -  ${endYear}` : ""}</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ShowTab;

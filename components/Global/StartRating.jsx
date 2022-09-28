import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StartRating = ({rating}) => {
	return (
		<>
			<p className="mr-2 text-white/80 font-bold">{rating}</p>
			<FontAwesomeIcon icon={faStar} className="text-[#ffd60a]" />
			<FontAwesomeIcon icon={faStar} className="text-[#ffd60a]" />
			<FontAwesomeIcon icon={faStar} className="text-[#ffd60a]" />
			<FontAwesomeIcon icon={faStar} className="text-[#ffd60a]" />
		</>
	);
};

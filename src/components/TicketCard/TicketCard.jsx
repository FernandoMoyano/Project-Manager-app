import { Link } from "react-router-dom";
import AvatarDisplay from "../AvatarDisplay/AvatarDisplay";
import StatusDisplay from "../StatusDisplay/StatusDisplay";
import PriorityDisplay from "../PriorityDisplay/PriorityDisplay";
import ProgressDisplay from "../ProgressDisplay/ProgressDisplay";
import DeleteBlock from "../DeleteBlock/DeleteBlock";

const TicketCard = () => {
	return (
		<div className="ticket-card">
			<Link>
				<div className="ticket-color"></div>
				<h3>Title</h3>
				<AvatarDisplay />
				<StatusDisplay />
				<PriorityDisplay />
				<ProgressDisplay />
			</Link>
			<DeleteBlock />
		</div>
	);
};

export default TicketCard;

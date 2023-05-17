import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import AvatarDisplay from "../AvatarDisplay/AvatarDisplay";
import StatusDisplay from "../StatusDisplay/StatusDisplay";
import PriorityDisplay from "../PriorityDisplay/PriorityDisplay";
import ProgressDisplay from "../ProgressDisplay/ProgressDisplay";
import DeleteBlock from "../DeleteBlock/DeleteBlock";
import "./TicketCard.css";



const TicketCard = ({ ticket, color }) => {
	return (
		<div className="ticket-card">
			<div className="ticket-color" style={{ backgroundColor: color }}></div>
			<Link to={`/ticket/${ticket.documentId}`} id="link">
				<h3>{ticket.title}</h3>
				<AvatarDisplay ticket={ticket} />
				<StatusDisplay status={ticket.status} />
				<PriorityDisplay priority={Number(ticket.priority)} />
				<ProgressDisplay progress={Number(ticket.progress)} />
			</Link>
			<DeleteBlock documentId={ticket.documentId} />
		</div>
	);
};

TicketCard.propTypes = {
	ticket: PropTypes.object.isRequired,
	color: PropTypes.string.isRequired,
};

export default TicketCard;

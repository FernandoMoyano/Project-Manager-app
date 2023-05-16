import PropTypes from "prop-types";
import "./PriorityDisplay.css";

const PriorityDisplay = ({ priority }) => {
	return (
		<div className="priority-display">
			<div className="star-container">
				<h3 style={{ color: priority >= 1 ? "#FFC300" : "" }}>★</h3>
				<h3 style={{ color: priority >= 2 ? "#FFC300" : "" }}>★</h3>
				<h3 style={{ color: priority >= 3 ? "#FFC300" : "" }}>★</h3>
				<h3 style={{ color: priority >= 4 ? "#FFC300" : "" }}>★</h3>
				<h3 style={{ color: priority >= 5 ? "#FFC300" : "" }}>★</h3>
			</div>
		</div>
	);
};

PriorityDisplay.propTypes = {
	priority: PropTypes.number.isRequired,
};

export default PriorityDisplay;

import PropTypes from "prop-types";
import "./ProgressDisplay.css";
const ProgressDisplay = ({ progress }) => {
	return (
		<div>
			<div className="progress-bar">
				<div
					style={{ width: progress + "%" }}
					className="progress-indicator"></div>
			</div>
		</div>
	);
};

ProgressDisplay.propTypes = {
	progress: PropTypes.number.isRequired,
};

export default ProgressDisplay;

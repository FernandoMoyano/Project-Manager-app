import PropTypes from "prop-types";


const StatusDisplay = ({ status }) => {
	const getColor = (status) => {
		let color = status;
		switch (status) {
			case "Done":
				color = "#98F1A7";
				break;
			case "working on it":
				color = "#F4A571";
				break;
			case "Stuck":
				color = "#FF9595";
				break;
			default:
				color = "#A3EFFD";
		}
		return color;
	};


	return (
		<div
			className="status-display"
			style={{ backgroundColor: getColor(status) }}>
			{status}
		</div>
	);
};

StatusDisplay.propTypes = {
	status: PropTypes.string.isRequired,
};

export default StatusDisplay;

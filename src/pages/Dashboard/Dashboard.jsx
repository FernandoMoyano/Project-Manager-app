import { useState, useEffect } from "react";
import TicketCard from "../../components/TicketCard/TicketCard";
import "./dashboard.css";

const Dashboard = () => {
	const [tickets, setTickets] = useState(null);

	/* Get Data */
	/* 	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:8000/tickets");
				const data = await response.json();
				const arrayOfKeys = Object.keys(data.data);
				const arrayOfData = Object.values(data.data).map((key) => data[key]);

				const formattedArray = [];

				arrayOfKeys.forEach((key, index) => {
					const formattedData = { ...arrayOfData[index] };
					formattedData["documentId"] = key;
					formattedArray.push(formattedData);
				});
				console.log(formattedArray);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []); */

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:8000/tickets");
				const data = await response.json();
				const arrayOfKeys = Object.keys(data.data);
				const formattedArray = [];

				arrayOfKeys.forEach((key) => {
					const ticketData = { ...data.data[key], documentId: key };
					formattedArray.push(ticketData);
				});
				setTickets(formattedArray)
				console.log(formattedArray);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	const colors = [
		"rgb(255,179,186)",
		"rgb(255,223,186)",
		"rgb(255,255,186)",
		"rgb(186,255,201)",
		"rgb(186,255,255)",
	];

	const uniqueCategories = [
		...new Set(tickets?.map(({ category }) => category)),
	];

	/* console.log(uniqueCategories); */

	return (
		<div className="dashboard">
			<h1>My Projects</h1>
			<div className="ticket-container-dashboard">
				{tickets &&
					uniqueCategories?.map((uniqueCategory, categoryIndex) => (
						<div key={categoryIndex}>
							<h3>{uniqueCategory}</h3>
							{tickets
								.filter((ticket) => ticket.category === uniqueCategory)
								.map((filteredTicket, _index) => (
									<TicketCard
										key={_index}
										id={_index}
										color={colors[categoryIndex] || colors[0]}
										ticket={filteredTicket}
									/>
								))}
						</div>
					))}
			</div>
		</div>
	);
};

export default Dashboard;

import TicketCard from "../../components/TicketCard/TicketCard";
import "./dashboard.css";

const Dashboard = () => {
	const tickets = [
		{
			category: "Q1 2023",
			color: "red",
			title: "NFT Safety 101 Video",
			Owner: "Fernando Moyano",
			avatar: "/src/assets/images/avatar-1.svg",
			priority: 5,
			progress: 40,
			description:
				"Make a video showcasing how to work with  NFTs safely, including how to know if one is not genuine",
			timestamp: "2023-05-15T21:57:49+0000",
		},
		{
			category: "Q1 2023",
			color: "red",
			title: "Build and sell AI Model",
			Owner: "Fernando Moyano",
			avatar: "/src/assets/images/avatar-2.svg",
			status: "Working on it",
			priority: 2,
			progress: 70,
			description: "Make a video about AI",
			timestamp: "2023-05-17T21:57:49+0000",
		},
		{
			category: "Q2 2023",
			color: "blue",
			title: "Build a bot",
			Owner: "Fernando Moyano",
			avatar: "/src/assets/images/avatar-3.svg",
			status: "Working on it",
			priority: 3,
			progress: 70,
			description: "Make a video about making a bot",
			timestamp: "2023-05-20T21:57:49+0000",
		},
	];

	const uniqueCategories = [
		...new Set(tickets?.map(({ category }) => category)),
	];

	console.log(uniqueCategories);

	return (
		<div className="dashboard">
			<h1>My Projects</h1>
			<div className="ticket-container">
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
										color={filteredTicket.color}
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
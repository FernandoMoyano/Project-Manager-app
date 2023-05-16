import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../src/pages/Dashboard/Dashboard";
import TicketPage from "../src/pages/TicketPage/TicketPage";
import NavBar from "../src/components/NavBar/NavBar";
const App = () => {
	return (
		<div className="app">
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/ticket" element={<TicketPage />} />
					<Route
						path="/ticket/:id"
						element={<TicketPage />}
						editMode={true}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;

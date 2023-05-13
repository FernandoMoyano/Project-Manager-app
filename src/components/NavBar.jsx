import { useNavigate } from "react-router-dom";
import logo from "../assets/images/logo-tickets.png";

const NavBar = () => {
	const navigate = useNavigate();
	return (
		<div>
			<div className="logo-container">
				<img src={logo} alt="logo"></img>
			</div>
			<div className="controls-container">
				<div className="icon" onClick={() => navigate("/ticket")}>
					➕
				</div>
				<div className="icon" onClick={() => navigate("/")}>
					👈
				</div>
			</div>
		</div>
	);
};

export default NavBar;

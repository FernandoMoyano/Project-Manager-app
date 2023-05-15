import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo-tickets.svg";
import "./NavBar.css";
import "../../../index.css"

const NavBar = () => {
	const navigate = useNavigate();
	return (
		<nav>
			<div className="logo-container">
				<img src={logo} alt="logo"></img>
			</div>
			<div className="controls-container">
				<div className="icon" onClick={() => navigate("/ticket")}>
					✚
				</div>
				<div className="icon" onClick={() => navigate("/")}>
					❰❰
				</div>
			</div>
		</nav>
	);
};

export default NavBar;

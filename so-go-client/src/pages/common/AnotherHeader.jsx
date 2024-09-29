import "@/css/common/TheHeader.css";
import Logo from "@/assets/logo.png";
import { Link } from "react-router-dom";
import { List } from "@phosphor-icons/react";

const AnotherHeader = () => {
	return (
		<>
			<div
				id="header"
				className="another-header"
			>
				<div className="menu">
					<Link to="/menu">
						<List
							size={24}
							color="black"
							className="menu"
						/>
					</Link>
				</div>

				<Link to="/">
					<img
						src={Logo}
						alt="logo"
						className="another-logo"
					/>
				</Link>
			</div>
		</>
	);
};

export default AnotherHeader;

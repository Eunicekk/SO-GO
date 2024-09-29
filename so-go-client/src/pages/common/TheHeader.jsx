import "@/css/common/TheHeader.css";
import Logo from "@/assets/logo.png";
import SearchInput from "@/components/SearchInput";
import { Link } from "react-router-dom";
import { List } from "@phosphor-icons/react";

function Header() {
	return (
		<div
			id="header"
			className="header"
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
					className="logo"
				/>
			</Link>
			<SearchInput />
		</div>
	);
}

export default Header;

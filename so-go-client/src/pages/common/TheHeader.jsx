import "@/css/common/TheHeader.css";
import Logo from "@/assets/logo.png";
import SearchInput from "@/components/SearchInput";
import { Link } from "react-router-dom";

function Header() {
	return (
		<div
			id="header"
			className="header"
		>
			<div className="menu">
				<Link to="/menu">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="currentColor"
						className={`bi bi-list menuIcon`}
						viewBox="0 0 16 16"
					>
						<path
							fillRule="evenodd"
							d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
						/>
					</svg>
				</Link>
			</div>
			<Link to="/">
				<img
					src={Logo}
					alt="logo"
					className="logo"
				></img>
			</Link>
			<SearchInput />
		</div>
	);
}

export default Header;

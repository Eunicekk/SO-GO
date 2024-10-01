import "@/css/common/TheHeader.css";
import Logo from "@/assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { CaretLeft, List } from "@phosphor-icons/react";

const AnotherHeader = () => {
	const navigate = useNavigate();

	return (
		<>
			<div
				id="header"
				className="another-header"
			>
				<CaretLeft
					size={32}
					onClick={() => navigate(-1)}
				/>
				<Link to="/">
					<img
						src={Logo}
						alt="logo"
						className="another-logo"
					/>
				</Link>

				<Link to="/menu">
					<List
						size={32}
						color="black"
					/>
				</Link>
			</div>
		</>
	);
};

export default AnotherHeader;

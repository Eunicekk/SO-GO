import React from "react";
import Header from "@/pages/common/TheHeader";
import AnotherHeader from "@/pages/common/AnotherHeader";
import Menu from "@/pages/common/TheMenu";
import { useLocation } from "react-router-dom";

export default function Layout(props) {
	const location = useLocation();
	const hasSearch = "/";

	const showHeader = hasSearch.includes(location.pathname);

	return (
		<div>
			{showHeader ? <Header /> : <AnotherHeader />}
			<main id={showHeader ? "layout" : "another-layout"}>{props.children}</main>
			<Menu />
		</div>
	);
}

import React from "react";
import Header from "@/pages/common/TheHeader";
import AnotherHeader from "@/pages/common/AnotherHeader";
import Menu from "@/pages/common/TheMenu";
import { useLocation } from "react-router-dom";

export default function Layout(props) {
	const location = useLocation();
	const hasSearch = "/";
	const hasSearch2 = "/search";

	const showHeader = hasSearch.includes(location.pathname);
	const showHeader2 = hasSearch2.includes(location.pathname);

	return (
		<div>
			{showHeader || showHeader2 ? <Header /> : <AnotherHeader />}
			<main id={showHeader || showHeader2 ? "layout" : "another-layout"}>{props.children}</main>
			<Menu />
		</div>
	);
}

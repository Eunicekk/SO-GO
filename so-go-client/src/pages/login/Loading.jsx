import { useEffect } from "react";
import { login } from "../../axios/Auth";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/UseAuthStore";

import LoadingGIF from "@/assets/Loading.gif";

import "@/css/login/LoadingFoam.css";

export default function Loading() {
	const navigate = useNavigate();
	const setTokens = useAuthStore((state) => state.setTokens);

	useEffect(() => {
		const performLogin = async () => {
			await login(navigate, setTokens);
			const { accessToken } = useAuthStore.getState();
		};

		performLogin();
	}, [navigate, setTokens]);

	return (
		<div id="loading">
			<h1>로딩 중</h1>
			<img
				src={LoadingGIF}
				alt="로딩중"
			/>
		</div>
	);
}

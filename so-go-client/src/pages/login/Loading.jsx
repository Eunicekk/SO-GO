import { useEffect } from "react";
import { login } from "../../axios/Auth";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/UseAuthStore";

export default function Loading() {
	const navigate = useNavigate();
	const setTokens = useAuthStore((state) => state.setTokens);

	useEffect(() => {
		// login(navigate, setTokens);

		const performLogin = async () => {
			await login(navigate, setTokens);
			const { accessToken } = useAuthStore.getState();
		};

		performLogin();
	}, [navigate, setTokens]);

	return <div id="loading">로딩중</div>;
}

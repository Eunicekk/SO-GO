import Cookies from "js-cookie";
import axiosInstance from "./AxiosInstance";
import { getTokenInfo } from "./get-decoding";

// 로그인 시 토큰 발급
export const login = async (navigate, setTokens) => {
	const isAuthenticated = Cookies.get("is_authenticated");

	const reissue = async () => {
		const refreshToken = Cookies.get("refresh");
		if (isAuthenticated === "true" && refreshToken) {
			try {
				const response = await axiosInstance.post(
					`/auth/reissue`,
					{ refreshToken },
					{ headers: { "Content-Type": "application/json" } },
				);

				const accessToken = response.headers.authorization;
				const tokenInfo = getTokenInfo(accessToken);

				if (tokenInfo.userUuid && tokenInfo.role) {
					axiosInstance.defaults.headers.common["userUuid"] = tokenInfo.userUuid;
					axiosInstance.defaults.headers.common["role"] = tokenInfo.role;
				}

				setTokens(accessToken, tokenInfo.userUuid, tokenInfo.role);
				axiosInstance.defaults.headers.common["_retry"] = true;
				navigate("/");
			} catch (error) {
				navigate("/login");
				console.error("Reissue Error: " + error.message);
			}
		} else {
			navigate("/login");
			console.error("No Refresh Token");
		}
	};

	await reissue();
};

// 로그아웃
export const logout = async (userUuid) => {
	const response = await axiosInstance.post(`/users/${userUuid}/logout`);
	return response.data;
};

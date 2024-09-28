import axios from "axios";
import Cookies from "js-cookie";
import { getTokenInfo } from "./get-decoding";
import useAuthStore from "../store/UseAuthStore";

const LOCAL_URL = `https://172.20.10.10:8080/api`;
const SERVER = `https://3.36.72.205:8080/api`;

const axiosInstance = axios.create({
	baseURL: SERVER,
	timeout: 5000,
	withCredentials: true,
});

// 요청 인터셉터 설정
axiosInstance.interceptors.request.use(
	(config) => {
		const { accessToken, userUuid, role } = useAuthStore.getState();

		if (accessToken) config.headers["authorization"] = `${accessToken}`;
		if (userUuid) config.headers["userUuid"] = userUuid;
		if (role) config.headers["role"] = role;

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

// 응답 인터셉터 설정
axios.interceptors.response.use(
	(response) => response,
	async (error) => {
		const originalRequest = error.config;

		if (error.response && error.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			const refreshToken = Cookies.get("refresh");

			if (refreshToken) {
				try {
					const reissue = await axiosInstance.post(
						`/auth/reissue`,
						{ refreshToken },
						{ headers: { "Content-Type": "application/json" } },
					);

					const newAccessToken = reissue.headers.authorization;
					const tokenInfo = getTokenInfo(newAccessToken);

					useAuthStore.getState().setTokens(newAccessToken, tokenInfo.userUuid, tokenInfo.role);

					originalRequest.headers["authorization"] = newAccessToken;
					originalRequest.headers["userUuid"] = tokenInfo.userUuid;
					originalRequest.headers["role"] = tokenInfo.role;

					return axiosInstance(originalRequest);
				} catch (error) {
					return Promise.reject(error);
				}
			}
		}
	},
);

export default axiosInstance;

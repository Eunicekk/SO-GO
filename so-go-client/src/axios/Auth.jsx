import Cookies from "js-cookie";
import axiosInstance from "./AxiosInstance";
import { getTokenInfo } from "./get-decoding";

// 로그인 시 토큰 발급
const login = async (navigate, setTokens) => {
  const refreshToken = Cookies.get("refresh");

  const reissue = async () => {
    if (refreshToken) {
      try {
        const response = await axiosInstance.post(
          `/auth/reissue`,
          { refreshToken },
          { headers: { "Content-Type": "application/json" } }
        );

        const accessToken = response.headers.Authorization;
        const tokenInfo = getTokenInfo(accessToken);

        if (tokenInfo.userUuid && tokenInfo.role) {
          axiosInstance.defaults.headers.common["userUuid"] = tokenInfo.userUuid;
          axiosInstance.defaults.headers.common["role"] = tokenInfo.role;
        }

        setTokens(tokenInfo.userUuid, tokenInfo.role);
        axiosInstance.defaults.headers.common["_retry"] = true;

        navigate("/");
      } catch (error) {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  };

  await reissue();
}

// 로그아웃
const logout = async (userUuid) => {
  const response = await axiosInstance.post(`/users/${userUuid}/logout`);
  return response.data;
}

export default { login, logout };
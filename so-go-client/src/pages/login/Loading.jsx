import { useEffect } from "react";
import { login } from "../../axios/Auth";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/UseAuthStore";

export default function Login() {
  const navigate = useNavigate();
  const setTokens = useAuthStore((state) => state.setTokens);

  useEffect(() => {
    login(navigate, setTokens);
  }, [navigate, setTokens]);

  return (
    <div id="loading">로딩중</div>
  );
}
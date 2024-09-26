// Base64Url 디코딩 함수
const decodeBase64Url = (base64Url) => {
	const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
	const padding = base64.length % 4 === 0 ? "" : "=".repeat(4 - (base64.length % 4));
	const base64WithPadding = base64 + padding;
	const decoded = atob(base64WithPadding);
	return decoded;
};

const getTokenInfo = (token) => {
	try {
		const parts = token.split(" ");
		if (parts.length === 2 && parts[0] === "Bearer") {
			const jwtToken = parts[1];
			const payloadBase64Url = jwtToken.split(".")[1];
			const decodedPayload = decodeBase64Url(payloadBase64Url);
			const decodedToken = JSON.parse(decodedPayload);
			return { userUuid: decodedToken.userUuid, role: decodedToken.role };
		}
	} catch (error) {
		console.error("Error decoding token:", error);
		return { userTsid: null, userRole: null };
	}
};

export { getTokenInfo };

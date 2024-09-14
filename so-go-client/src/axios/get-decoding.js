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

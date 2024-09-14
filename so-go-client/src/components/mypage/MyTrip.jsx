import { useState } from "react";

const MyTrip = () => {
	const [myTrips, setMyTrips] = useState([{ img: null }]);

	return (
		<>
			{myTrips.map((myTrip) => {
				<img
					src={myTrip}
					alt="여행사진"
				/>;
			})}

			<span> 들어왔는지 확인</span>
		</>
	);
};

export default MyTrip;

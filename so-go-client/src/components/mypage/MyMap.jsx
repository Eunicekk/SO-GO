import "@/css/mypage/MyMap.css";
import { useEffect, useRef, useState } from "react";
import { Circle } from "@phosphor-icons/react";

export default function MyMap() {
	const svgRef = useRef(null);

	const [locations] = useState([
		"서울 중구 명동10길 29",
		"경남 창원시 진해구 천자로 5 2-3층",
		"경기 안성시 아양로 20",
		"강원특별자치도 속초시 해오름로188번길 11 1~3층",
		"전북특별자치도 전주시 덕진구 송천중앙로 33",
		"부산 해운대구 구남로24번길 8 1층",
		"부산 해운대구 중동2로10번길 21 1층",
		"부산 해운대구 구남로 14",
	]);

	useEffect(() => {
		fetch("/Map_of_South_Korea.svg")
			.then((response) => response.text())
			.then((data) => {
				if (svgRef.current) svgRef.current.innerHTML = data;

				const elements = svgRef.current.querySelectorAll("g path, g polygon");
				const countMap = {};

				locations.forEach((address) => {
					const keyword = address.split(" ").map((word) => word.trim());
					const first = keyword[0];
					const second = keyword[1];
					const third = keyword[2];

					const key = third.endsWith("구") ? `${first}_${second}_${third}` : `${first}_${second}`;
					countMap[key] = (countMap[key] || 0) + 1;

					elements.forEach((element) => {
						const id = element.id;
						let totalCount = 0;

						for (const key in countMap) {
							if (id.includes(key)) {
								totalCount += countMap[key];
							}
						}

						if (totalCount >= 3) {
							element.classList.add("colored-3");
						} else if (totalCount > 0) {
							element.classList.add("colored");
						}
					});
				});
			});
	}, [locations]);

	return (
		<div id="my-map">
			<p className="map-caution">* 여행 후기를 올려 지도를 칠해보세요!</p>
			<p className="map-caution">
				<div>
					<Circle
						weight="fill"
						color="#18F5BB"
						size={12}
					/>
					<span>1회 ~ 3회</span>
				</div>
				<div>
					<Circle
						weight="fill"
						color="#836fff"
						size={12}
					/>
					<span>4회 이상</span>
				</div>
			</p>
			<div ref={svgRef} />
		</div>
	);
}

import { useState } from "react";
import axiosInstance from "@/axios/AxiosInstance";
import { Circle } from "@phosphor-icons/react";

function SearchInput() {
	const [searchWord, setSearchWord] = useState("");

	const handleSearch = async () => {
		if (!searchWord.trim()) {
			alert("검색어를 입력해주세요");
			return;
		}

		try {
			const response = await axiosInstance.get(`/places`, {
				params: {
					word: searchWord,
				},
			});

			console.log(response);
		} catch (error) {
			console.error("Error searching for location:", error);
		}
	};

	return (
		<div
			id="search-input"
			className="search-input"
		>
			<input
				type="text"
				placeholder="가고 싶은 장소를 입력해주세요"
				value={searchWord}
				onChange={(e) => setSearchWord(e.target.value)}
			/>
			<div
				className="search-button"
				onClick={handleSearch}
			>
				<Circle
					className="outer"
					color="#18F5BB"
					weight="bold"
					size={24}
				/>
				<Circle
					className="inner"
					color="#836FFF"
					weight="fill"
					size={13}
				/>
			</div>
		</div>
	);
}

export default SearchInput;

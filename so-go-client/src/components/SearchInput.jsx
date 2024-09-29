import SearchButton from "@/assets/SearchButton.png";
import axiosInstance from "@/axios/AxiosInstance";
import { useState } from "react";

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
			id="searchinput"
			className="searchinput"
		>
			<input
				type="text"
				placeholder="가고 싶은 장소를 입력해주세요"
				value={searchWord}
				onChange={(e) => setSearchWord(e.target.value)}
			/>
			<img
				src={SearchButton}
				alt="button"
				onClick={handleSearch}
			/>
		</div>
	);
}

export default SearchInput;

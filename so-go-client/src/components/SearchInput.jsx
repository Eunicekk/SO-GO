import { useState } from "react";
import axiosInstance from "@/axios/AxiosInstance";
import { Circle } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

function SearchInput() {
	const [searchWord, setSearchWord] = useState("");
	const navigate = useNavigate();

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

			navigate("/search", { state: { searchResults: response.data } });
		} catch (error) {
			console.error("Error searching for location:", error);
		}
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			handleSearch(event);
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
				onKeyUp={handleKeyPress}
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

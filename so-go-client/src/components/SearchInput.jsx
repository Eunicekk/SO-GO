import SearchButton from "@/assets/SearchButton.png";

function SearchInput() {
  return (
    <div id="searchinput" className="searchinput">
      <input type="text" placeholder="가고 싶은 장소를 입력해주세요" />
      <img src={SearchButton} alt="button" />
    </div>
  );
}

export default SearchInput;

import css from 'css/common/TheHeader.module.css';
import SearchButton from 'assets/SearchButton.png';

export function SearchInput() {
    return (
        <div id="searchinput" className={css.searchinput}>
            <input type="text" placeholder='가고 싶은 장소를 입력해주세요' />
            <img src={SearchButton} alt="button"/>
        </div>
    )
}


export default function Header() {
    return (
    <div id="header" className={css.header}>
        <div className={css.menu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className={`bi bi-list ${css.menuIcon}`} viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
        </div>
        <img src="img/logo.png" alt="logo" className={css.logo}></img>
        <SearchInput />
    </div>
    );
  }
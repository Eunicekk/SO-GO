import styles from 'css/login/Login.module.css'
import classNames from 'classnames';
import logo from 'assets/logo.png';
import icon_kakao from 'assets/icon_kakao.png';
import icon_naver from 'assets/icon_naver.png';

export default function Login () {
  return (
    <div id={styles.login}>
      <div id='loginLogo'>
        <img src={logo} alt="logo" className={styles.logo} />
        <hr className={styles.line}></hr>
        <p className={styles.text}>
          소고와 함께<br/>
          SO, GO!
        </p>
      </div>

      <div id={styles.buttons}>
        <button className={classNames(styles.kakao, styles.button)}>
          <img src={icon_kakao} alt="kakao" className={styles.icon} />
          카카오 로그인
        </button>
        <button className={classNames(styles.naver, styles.button)}>
          <img src={icon_naver} alt="naver" className={styles.icon} />
          네이버 로그인
        </button>
      </div>
    </div>
  );
}
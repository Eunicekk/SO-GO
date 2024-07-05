import styles from 'css/Login.module.css'
import classNames from 'classnames';

export default function Login () {
  return (
    <div id={styles.login}>
      <div id='loginLogo'>
        <img src="img/logo.png" alt="logo" className={styles.logo} />
        <hr className={styles.line}></hr>
        <p className={styles.text}>
          소고와 함께<br/>
          SO, GO!
        </p>
      </div>

      <div id={styles.buttons}>
        <button className={classNames(styles.kakao, styles.button)}>
          <img src="img/icon_kakao.png" alt="kakao" className={styles.icon} />
          카카오 로그인
        </button>
        <button className={classNames(styles.naver, styles.button)}>
          <img src="img/icon_naver.png" alt="naver" className={styles.icon} />
          네이버 로그인
        </button>
      </div>
    </div>
  );
}
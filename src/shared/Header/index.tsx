import React from 'react';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <div className={style.container}>
        <div className={style.header_logo}>
          <img src="img/logo.svg" alt="logo" />
          <p className={style.header_logo_text}>Стикер</p>
        </div>
        <div className={style.header_profile}>
          <img src="img/profile.svg" alt="profile" />
          <p className={style.header_profile_text}>Профиль</p>
        </div>
      </div>
    </header>
  );
};

export default Header;

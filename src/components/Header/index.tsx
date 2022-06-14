import React from 'react';
import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.page_header}>
      <div className={style.container}>
        <a>
          <div className={style.logo_header}>
            <img src="/images/logo.png" />
            <h1 className={style.logo_text_header}>Стикер</h1>
          </div>
        </a>
        <div className={style.profile_header}>
          <img src="/images/profile.png" />
          <p>Профиль</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

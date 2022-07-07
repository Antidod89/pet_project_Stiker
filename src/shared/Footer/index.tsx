import React from 'react';
import style from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer>
      <div className={style.container}>
        <div className={style.footer_logo}>
          <div className={style.footer_logo_item}>
            <img src="img/logo.svg" alt="logo" />
            <p className={style.footer_logo_text}>Стикер</p>
          </div>
          <div className={style.footer_logo_element} />
          <p className={style.footer_logo_ads}>Доска объявлений</p>
        </div>
        <div className={style.footer_ads_copy}>© ООО «Доска диджитал», 2022</div>
      </div>
    </footer>
  );
};

export default Footer;

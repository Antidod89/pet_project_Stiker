import React from 'react';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <div className={style.page_footer}>
      <div className={style.container}>
        <div className={style.fooret_items}>
          <div className={style.logo_footer}>
            <img src="/images/logo.png" />
            <h1 className={style.logo_text_footer}>Стикер</h1>
          </div>
          <div>
            <p className={style.p_text_footer}>Доска объявлений </p>
          </div>
        </div>
        <div className={style.copyright}>
          <p>© ООО «Доска диджитал», 2022</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Sidebar.module.scss';
import { sidebarConfig } from './sidebarConfig';

const Sidebar = () => {
  const { pathname } = useLocation();

  return (
    <div className={style.sidebar_wrapper}>
      <ul className={style.sidebar_menu}>
        <li>
          <div className={style.sidebar_menu_element}>A</div>
          <div className={style.sidebar_menu_text}>
            <p className={style.sidebar_menu_title}>Super admin</p>
            <p className={style.sidebar_menu_subtitle}>Админ-меню</p>
          </div>
        </li>
        {sidebarConfig.map((menuElement) => {
          const isActiveClassName = pathname.includes(menuElement.path) ? style.active : '';
          return (
            <Link key={menuElement.id} to={menuElement.path} className={style.sidebar_menu_item}>
              <li className={style.sidebar_menu_item_element}>
                <img src={menuElement.image} alt="" />
                <p className={`${isActiveClassName} ${style.sidebar_menu_item_text}`}>
                  {menuElement.name}
                </p>
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;

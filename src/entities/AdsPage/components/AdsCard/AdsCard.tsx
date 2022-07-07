import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './AdsCard.module.scss';

interface IProps {
  id: number;
  name: string;
  category: string;
  date: string;
  publication: string;
}

const AdsCard: FC<IProps> = ({ id, name, category, date, publication }) => {
  const navigate = useNavigate();
  return (
    <div className={style.ads_items}>
      <p className={style.ads_name_text}>{name}</p>
      <p>{category}</p>
      <p>{date}</p>
      <div className={style.ads_wrapper}>
        <p>{publication}</p>
        <div className={style.kebab_menu}>
          <span />
          <div className={style.kebab_wrapper}>
            <ul className={style.kebab_list}>
              <li className={style.kebab_items}>
                <img src="./img/look.svg" alt="look" />
                <p className={style.kebab_menu_link}>Просмотреть</p>
              </li>
              <button
                type="button"
                onClick={() => navigate('/edit_ads_page')}
                className={style.kebab_items}>
                <img src="./img/edit.svg" alt="edit" />
                <p className={style.kebab_menu_link}>Редактировать</p>
              </button>
              <li className={style.kebab_items}>
                <img src="./img/delete.svg" alt="delete" />
                <p className={style.kebab_menu_link}>Удалить</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdsCard;

import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAds } from '../../../../interfaces/IAds';
import style from './AdsPageComponent.module.scss';
import AdsCard from '../AdsCard/AdsCard';
import Pagination from '../Pagination/Pagination';

interface IProps {
  adsDataAttr: IAds[];
}

const AdsPageComponent: FC<IProps> = ({ adsDataAttr }) => {
  const navigate = useNavigate();

  return (
    <div className={style.ads_wrapper}>
      <div className={style.ads_conteiner}>
        <div>
          <p className={style.ads_conteiner_title}>Объявления</p>
          <p className={style.ads_conteiner_text}>{`Всего: ${adsDataAttr.length}`}</p>
        </div>
        <div className={style.ads_conteiner_btn}>
          <button type="button" onClick={() => navigate('/add_ads_page')}>
            <div className={style.ads_header_element_btn}>
              <div className={style.ads_header_btn_text}>Добавить</div>

              <div className={style.ads_header_btn_char}>+</div>
            </div>
          </button>
        </div>
      </div>
      <div className={style.ads_element} />
      <div className={style.search_container}>
        <form>
          <input type="text" placeholder="Найти объявление" />
          <button type="submit" className={style.search_btn}>
            <img src="./img/search_icon.svg" alt="search" />
          </button>
        </form>
        <Pagination />
      </div>

      <div className={style.ads_columns}>
        <p>Название объявления</p>
        <p>Категория</p>
        <p>Дата публикации</p>
        <p>Публикация</p>
      </div>

      {adsDataAttr.length ? (
        adsDataAttr.map((ad) => {
          const { id, name, category, date, publication } = ad;
          return (
            <React.Fragment key={`AdId:${id}`}>
              <AdsCard
                id={id}
                name={name}
                category={category}
                date={date}
                publication={publication}
              />
            </React.Fragment>
          );
        })
      ) : (
        <div>Не найдено объявление</div>
      )}
    </div>
  );
};

export default AdsPageComponent;

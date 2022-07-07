import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { mockedAds } from '../../mocks/mockedAds';
import AdsPageComponent from './components/AdsPageComponent/AdsPageComponent';

const AdsPage = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate('/ads_page');
    }
  }, [pathname, navigate]);

  return <AdsPageComponent adsDataAttr={mockedAds} />;
};

export default AdsPage;

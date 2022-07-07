import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './assets/scss/normalize.scss';
import './assets/scss/fonts.scss';
import AddAdsPage from './entities/AddAdsPage';
import AdsPage from './entities/AdsPage';
import PageLayout from './layouts/PageLayout';
import EditAdsPage from './entities/EditAdsPage';

const App = () => {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<AdsPage />} />
        <Route path="ads_page" element={<AdsPage />} />
        <Route path="edit_ads_page" element={<EditAdsPage />} />
        <Route path="add_ads_page" element={<AddAdsPage />} />
      </Routes>
    </PageLayout>
  );
};

export default App;

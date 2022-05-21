import React from 'react';
import { App } from './components/App';
import './style.css';
import Reservation from './components/Reservation';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';

export const API_BASE_URL = 'http://leviexpress-backend.herokuapp.com/api';

createRoot(document.querySelector('#app')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="reservation" element={<Reservation />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);

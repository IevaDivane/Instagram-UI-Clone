import React from 'react';
import {
  BrowserRouter as
  Router, Routes, Route,
} from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import './App.scss';
import ExplorePage from './pages/explore/ExplorePage';
import MessengerPage from './pages/messenger/MessengerPage';
import MyProfilePage from './pages/my-profile/My-ProfilePage';
import UserProfilePage from './pages/user-profile/User-ProfilePage';
import Header from './components/header/Header';

const App = () => (
  <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/messenger" element={<MessengerPage />} />
        <Route path="/my-profile" element={<MyProfilePage />} />
        <Route path="/user-profile" element={<UserProfilePage />} />
      </Routes>
    </Router>
  </div>
);

export default App;

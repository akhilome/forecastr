import React from 'react';
import './App.scss';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="site-container">
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
};

export default App;

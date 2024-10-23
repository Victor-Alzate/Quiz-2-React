import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RouterApp from './router/RouterApp';

const App = () => {
  return (
    <div className="App">
      <Header />
      <RouterApp />
      <Footer />
    </div>
  );
};

export default App;


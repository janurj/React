import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import List from './components/List';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <List />
      <Footer />
    </div>
  );
}

export default App;

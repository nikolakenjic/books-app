import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Books from './components/Books';
import BookDetails from './components/BookDetails';
import { DataProvider } from './context/DataContext';
import About from './components/About';

const App = () => {
  return (
    <div className="app">
      <Header />
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/books" element={<Books />} />
          <Route path="/books/:id" element={<BookDetails />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
};

export default App;

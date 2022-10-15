import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Navbar from './components/header/Navbar';
import Footer from './components/footer/Footer';
import HomePage from './components/pages/HomePage';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
      <Footer />
      <ToastContainer />


    </div>
  );
}

export default App;

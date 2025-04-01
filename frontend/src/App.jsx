import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ModelsPage from './pages/ModelsPage';
import RentalsPage from './pages/RentalsPage';
import SignUpPage from './pages/SignUpPage';


function App() {
  
  return (
    <Router>
      <Navbar></Navbar>

      <Routes>
        <Route path="/Home" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/Models" element={<ModelsPage></ModelsPage>}></Route>
        <Route path="/Rentals" element={<RentalsPage></RentalsPage>}></Route>
      </Routes>
    </Router>
  );
}

export default App

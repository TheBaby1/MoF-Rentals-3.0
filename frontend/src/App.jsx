import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import ModelsPage from './pages/ModelsPage';


function App() {
  
  return (
    <Router>
      <Navbar></Navbar>

      <Routes>
        <Route path="/Models" element={<ModelsPage></ModelsPage>}></Route>
      </Routes>
    </Router>
  );
}

export default App

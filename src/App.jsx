import './App.css';
import Homepage from './components/home';
import Login from './components/login'; 
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </BrowserRouter>
    
    
  );
}

export default App;

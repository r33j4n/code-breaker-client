import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Play from './pages/Play';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/play" element={<Play/>} />
    <Route path="*" element={<ErrorPage/>} />
  
    </Routes>
    </BrowserRouter>
  );
}

export default App;

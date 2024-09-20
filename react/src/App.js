import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/home' element={<Home/>} />
       </Routes>
     
    </div>
  );
}

export default App;

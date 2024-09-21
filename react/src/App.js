import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import TestDatabase from './pages/TestDatabase';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/testdb' element={<TestDatabase />} />
			</Routes>
		</div>
	);
}

export default App;

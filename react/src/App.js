import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import TestDatabase from './pages/TestDatabase';
// import Login from './pages/Login';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/testdb' element={<TestDatabase />} />
				{/* <Route path='/login' element={<Login />} /> */}
			</Routes>
		</div>
	);
}

export default App;

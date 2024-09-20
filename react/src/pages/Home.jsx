import '../App.css';
import { useState } from 'react';
import Calendar from '../components/Calendar';

const Home = () => {
	const [isCollapsed, setIsCollapsed] = useState(true);
	const eventArray = [
		<div>sampleExpo1</div>,
		<div>sampleExpo2</div>,
		<div>sampleExpo3</div>,
	];
	const notifArray = [
		<div>sampleNotif1</div>,
		<div>sampleNotif2</div>,
		<div>sampleNotif3</div>,
	];

	return (
		<div className='homeGrid'>
			<button
				onClick={() => setIsCollapsed(!isCollapsed)}
				className='collapseBtn'
			>
				{isCollapsed ? 'open notifications' : 'close notifications'}
			</button>

			<div className={`sideBar ${isCollapsed ? 'collapsed' : 'uncollapsed'}`}>
				{notifArray.map((item, i) => (
					<div
						className={`placeholderNotif ${isCollapsed ? 'hidden' : 'visible'}`}
						key={i}
					>
						{item}
					</div>
				))}
			</div>

			<div className='mainContent'>
				<h1 className='title'>Upcoming Events: </h1>
				<Calendar className='calendarContainer' />
				{eventArray.map((item, i) => (
					<div className='placeholderExpo' key={i}>
						{item}
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;

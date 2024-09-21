import '../App.css';
import { useEffect, useState } from 'react';
import Calendar from '../components/Calendar';
import { Badge } from 'react-bootstrap';

const Home = () => {
	const [isCollapsed, setIsCollapsed] = useState(true);
	let eventArray = [
		<div>
            <Badge pill variant='primary'>
                Science
            </Badge>
            <Badge pill variant='secondary'>
                Technology
            </Badge>sampleExpo1
        </div>,
		<div>sampleExpo2</div>,
		<div>sampleExpo3</div>,
	];
	const notifArray = [
		<div>sampleNotif1</div>,
		<div>sampleNotif2</div>,
		<div>sampleNotif3</div>,
	];

	useEffect(() => {
		eventArray = fetchHelper("getAllExpos");
		console.log(eventArray);
	}, [])

	const fetchHelper = (request) => {
		const data = new URLSearchParams();
		data.append('message', request);

		fetch("https://cchandrew.com/api/", {
		mode: 'cors',
		method: 'POST',
		body: data,
		headers: {
			'Accept': 'application/json',
		},
		})
		.then(response => response.json())
		.then(data => console.log(data))
		.then((data) => { return data;});
	};
	

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
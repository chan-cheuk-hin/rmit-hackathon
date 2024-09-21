import '../App.css';
import { useEffect, useState } from 'react';
import Calendar from '../components/Calendar';
import { Badge } from 'react-bootstrap';
import EventsCard from '../components/eventsCard';
import FeatureBox1 from '../components/update_icon_for_notifs';
import FeatureBox from '../components/join_icon_for_notifs';

const Home = () => {
	const [isCollapsed, setIsCollapsed] = useState(true);
	const [eventArray, setEventArray] = useState([])

	const notifArray = [
		<FeatureBox1/>,
		<FeatureBox/>,
		<FeatureBox/>,
	];

	useEffect(() =>  {
		async function fetchData() {
			let eventJson = await fetchHelper("getAllExpos");
			console.log(eventJson);
			setEventArray(eventJson.map((item,i) => <EventsCard key={i} date={item["datetime"]} organizers={item["organizers"]} participants={item["participants"]} tag={item["tags"]}/>));
		}
		fetchData();
	}, [])

	const fetchHelper = (request) => {
		const data = new URLSearchParams();
		data.append('message', request);

		let fetchReturn = fetch("https://cchandrew.com/api/", {
		mode: 'cors',
		method: 'POST',
		body: data,
		headers: {
			'Accept': 'application/json',
		},
		})
		.then(response => response.json())
		.then((data) => { return data;});

		return fetchReturn;
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
				{eventArray}
			</div>
		</div>
	);
};

export default Home;
import React, { useEffect } from 'react'
import { useState } from 'react'
import './../css/Home.css'
import Calendar from '../components/Calendar'

const Home = () => {
    const [collapsed, setCollapsed] = useState(true);
    const eventArray = [<div>sampleExpo1</div>, <div>sampleExpo2</div>, <div>sampleExpo3</div>];
    const notifArray = [<div>sampleExpo1</div>, <div>sampleExpo2</div>, <div>sampleExpo3</div>];

    return (
        <div className='homeGrid'>
            <button onClick={() => setCollapsed(!collapsed)} className='collapseBtn'>{collapsed ? "open notifications" : "close notifications"}</button>
            
            <div className={`sideBar ${collapsed ? "collapsed" : "uncollapsed"}`}>
                {notifArray.map((item, i) => <div className={`placeholderNotif ${collapsed ? "hidden" : "visible"}`} key={i}>{item}</div>)}
            </div>

            <div className='mainContent'>
                <h1 className='title'>Upcoming Events: </h1>
                <Calendar className="calendarContainer"/>
                {eventArray.map((item, i) => <div className='placeholderExpo' key={i}>{item}</div>)}
            </div>
        </div>
    )
}

export default Home 
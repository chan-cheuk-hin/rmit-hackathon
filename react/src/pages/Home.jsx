import React, { useEffect } from 'react'
import { useState } from 'react'
import './../css/Home.css'
import Calendar from '../components/Calendar'

const Home = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className='homeGrid'>
            <button onClick={() => setCollapsed(!collapsed)} className='collapseBtn'>{collapsed ? "open notifications" : "close notifications"}</button>
            <div className={`sideBar ${collapsed ? "collapsed" : "uncollapsed"}`}>
            
            </div>
            <div className='mainContent'>
                <h1 className='title'>Upcoming Events: </h1>
                <Calendar className="calendarContainer"/>
            </div>
        </div>
    )
}

export default Home 
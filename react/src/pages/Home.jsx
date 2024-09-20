import React, { useEffect } from 'react'
import { useState } from 'react'
import './../Home.css'

const Home = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className='homeGrid'>
            <button onClick={() => setCollapsed(!collapsed)} className='collapseBtn'>test</button>
            <div className={`sideBar ${collapsed ? "collapsed" : "uncollapsed"}`}>
            
            </div>
            <div className='mainContent'></div>
        </div>
    )
}

export default Home 
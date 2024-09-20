import React from 'react'
import './../css/Calendar.css'

const Calendar = () => {

    /*
    * container: The div INSIDE the div.calendar-container
    * beginDay: The day that this month begins (1-7 for Monday-Sunday)
    * totalDays: The amount of days in the month
    * importantDays: An array containing numbers (1-31) representing the days that contain an event
    */
    const createCalendar = (beginDay, totalDays, importantDays) => {
        
        // Initialise array of divs to add to container
        const dayElements = [];

        // Add divs for days prior to month start
        for (let i = 1; i < beginDay; ++i) {
            dayElements.push(<div key={`not-in-month-${i}`} className="not-in-month" />);
        }

        // Add divs for days during the month
        for (let i = 1; i <= totalDays; ++i) {
            if (importantDays.find(x => x == i)) {
                dayElements.push(<div key={`important-day-${i}`} className="important-day" />);
            } else {
                dayElements.push(<div key={`unimportant-day-${i}`} className="unimportant-day" />);
            }
        }

        // Add divs for days after the month
        for (let i = beginDay + totalDays - 1; i % 7 !== 0; ++i) {
            dayElements.push(<div key={`not-in-month-${i}`} className="not-in-month" />);
        }

        return {dayElements};
    };

    // EXAMPLE USAGE
    
    return (
        <div class="calendar-container">
            <div>
                <p>Mon</p>
                <p>Tue</p>
                <p>Wed</p>
                <p>Thu</p>
                <p>Fri</p>
                <p>Sat</p>
                <p>Sun</p>
                {createCalendar(5, 21, [1, 4, 7]).dayElements}
            </div>
        </div>
    )
}

export default Calendar
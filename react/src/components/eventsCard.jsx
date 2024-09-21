import React from 'react';
import './../eventsCard.css'

const EventsCard = ({ date, organizers, participants, tag }) => {
    return (
        <div className="card_stuff">
            <div className="picture_event">
                <img src="" alt="Picture Event" />
            </div>
            <div className="event-card">
                <p><strong>Date: {date}</strong> </p>
                <p><strong>Tag: {tag}</strong> </p>
                <p><strong>Organizers: {organizers}</strong> </p>
                <p><strong>Joined: {participants}</strong></p>
            </div>
        </div>
    );
}

export default EventsCard;
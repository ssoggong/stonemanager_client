import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import calendar from 'react-calendar';

function schedule() {

    return (
        <div className='schedule'>
            <div className='body-wrapper box'>
                <div className='body-info-container'>
                    <div className='calendar-wrapper'>
                        <FullCalendar defaultView="dayGridMonth" plugins={[ dayGridPlugin]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default schedule;
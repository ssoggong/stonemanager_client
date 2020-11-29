import React, { state } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function schedule() {

    return (
        <div className='schedule'>
            <div className='body-wrapper box'>
                <div className='body-info-container'>
                    <div className='calendar-wrapper' >
                        <FullCalendar
                            height={700}
                            defaultView="dayGridMonth"
                            plugins={[dayGridPlugin]}                           
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default schedule;
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

function schedule() {

    return (
        <div className='schedule'>
            <div className='body-wrapper box'>
                <div className='body-info-container'>
                    <div className='calendar-wrapper'>
                        <FullCalendar 
                            defaultView="dayGridMonth" 
                            plugins={[ dayGridPlugin ]}
                            events={[
                                {title: '정기 회의', date: '2020-11-28'},
                                {title: '최종 발표', date: '2020-12-01'}
                            ]}
                            style={{width:'300'}} />
                            asdasdasd
                    </div>
                </div>
            </div>
        </div>
    )
}

export default schedule;
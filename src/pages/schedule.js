import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../bootstrap/dist/css/bootstrap.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import $ from 'jquery';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list'

function schedule() {
    const events = [
        {
            title: '최종 발표', start: "2020-12-01T10:00:00",
            end: "2020-12-01T12:00:00", backgroundColor: 'lightcoral'
        },
        { title: '정기 미팅', date: '2020-11-29', backgroundColor: 'lightsalmon' },
        { title: 'event 1', date: '2020-11-25', backgroundColor: 'lightgreen' },
        { title: 'event 2', date: '2020-11-26', backgroundColor: 'skyblue' },
        { title: 'event 3', date: '2020-11-27', backgroundColor: 'lightpink' },
        { title: 'event 4', date: '2020-11-27', backgroundColor: 'orange' },
        { title: 'event 5', date: '2020-11-28', backgroundColor: 'purple' }
    ];
    // const today = new Date();
    // const dateString = today.toLocalDateString('ko-KR', {
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric'
    // });
    // const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
    return (
        <div className='schedule'>
            <div className="container">
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin, listPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,dayGridWeek,dayGridDay,listWeek'
                    }}
                    eventClick={
                        function (arg) {

                            $("#myModal2").modal("show");
                            $(".modal-body").html("");
                            $(".modal-body").html(
                                "<h4>" + "날짜: " +
                                arg.event.startStr + "</h4>" +
                                "<h4>" + '태그: Class' + "</h4>" +
                                "<h4>" + '담당자 : 최고운' + "</h4>" +
                                "<h4>" + '메모: 살려주세요' + "</h4>")
                        }
                    }
                    dateClick={
                        function (arg) {
                            $("#myModal").modal("show");
                            $(".modal-body").html("");
                            $(".modal-body").html(
                                "<h3>" + arg.dateStr + "<h3>" +
                                "<h4>" + "추가할 일정 이름" + "</h4>" +
                                "<input />")
                        }
                    }
                    events={events}
                    locale="ko"
                />
            </div>
            <div class="modal" id="myModal">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title align-center">
                                일정 추가
                            </h4>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body text-center">
                            asd
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" data-dismiss="modal">확인 </button>
                            <button type="button" class="btn btn-danger" data-dismiss="modal">취소 </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal" id="myModal2">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title text-center">
                                최종 발표
                            </h2>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">

                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default schedule;
import React, { Component } from 'react';
import HomeHeaderscreen from '../homeheader';
import YoofooLeftmenuscreen from '../yoofooleftmenu';
import PageFooter from '../footer';
import '../../styles/styles.css';
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import events from '../Events/events'
import * as dates from '../Events/dates'

class CalendarScreen extends Component {

  render() {
    const localizer = momentLocalizer(moment)

    return (
      <div>
        <div className="col-sm-12">
          <HomeHeaderscreen />
        </div>
        <div className="container-fluid page_container">
          <div className="content">
            <div>
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-3">
                    <h2 className="h2hdr">Calendar</h2>
                  </div>
                  <div className="col-sm-9"></div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div>
                      <div className="row company_hdr">

                        <div className="col-sm-12">
                          <Calendar
                            localizer={localizer}
                            events={events}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: 600 }}
                            
                          />
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col-sm-12">
            <PageFooter />
          </div>
        </div>
      </div>
    )
  }
}

export default CalendarScreen;

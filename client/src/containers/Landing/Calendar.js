// Code sandbox example
// https://codesandbox.io/s/p94ypzrrj7

// import React
import React, { Component } from 'react';
// Import react calendar component
import BigCalendar from 'react-big-calendar';
// Import moment for formatting dates.
import moment from 'moment';
// Import placeholder events for now.
import events from './events';
// Import calendar css file.
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('en');
// BigCalendar.momentLocalizer(moment);
const localizer = BigCalendar.momentLocalizer(moment);

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Calendar extends Component {
  state = {
    view: 'month',
    // date: 'new Date(2018, 3, 10),'
    date: '',
    width: '100%',
  };

  componentDidMount() {
    window.addEventListener('resize', () => {
      /* this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      }); */
    });
  }

  render() {
    const { date, view, width } = this.state;

    return (
      <div style={{ height: 700 }}>
        <button type="button" onClick={() => this.setState({ view: 'day' })}>Day</button>
        <button type="button" onClick={() => this.setState({ view: 'month' })}>Month</button>
        <BigCalendar
          localizer={localizer}
          style={{ height: 500, width }}
          toolbar={false}
          events={events}
          step={60}
          views={allViews}
          view={view}
          onView={() => { }}
          date={date}
          onNavigate={date => this.setState({ date })}
        />
      </div>
    );
  }
}

export default Calendar;

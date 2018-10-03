// Code sandbox example
// https://codesandbox.io/s/p94ypzrrj7

// React BigCalendar documentation
// http://intljusticemission.github.io/react-big-calendar/examples/index.html#api

// import React
import React, { Component } from 'react';
// Import react calendar component
import BigCalendar from 'react-big-calendar';
// Import moment for formatting dates.
import moment from 'moment';
// Import placeholder events for now.
// Import material ui components
import Button from '@material-ui/core/Button';
import events from './events';
// Import calendar css file.
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import landing page css file
import './Landing.css';

moment.locale('en');
// BigCalendar.momentLocalizer(moment);
const localizer = BigCalendar.momentLocalizer(moment);

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);

class Calendar extends Component {
  state = {
    view: 'month',
    // date: 'new Date(2018, 3, 10)',
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
    console.log((new Date(2018, 9, 3)));
    console.log(new Date().getMonth());
  }

  render() {
    const { date, view, width, } = this.state;

    return (
      <div style={{ height: 700 }}>
        <Button variant="contained" className="app-btn calendar-btn" type="button" onClick={() => this.setState({ view: 'day' })}>Day</Button>
        <Button variant="contained" className="app-btn calendar-btn" type="button" onClick={() => this.setState({ view: 'month' })}>Month</Button>
        <BigCalendar
          localizer={localizer}
          step={60}
          style={{ height: 500, width, marginTop: 30 }}
          toolbar={true}
          events={events}
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

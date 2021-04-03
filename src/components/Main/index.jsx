import React, { useState } from 'react';
import moment from 'moment-timezone';
import Time from '../Time';
import Switch from '../Switch';
import Countries from '../Countries';

export default function Main() {
  const [format, setFormat] = useState('24');
  const [country, setCountry] = useState('UA');
  const currentTimezone = moment.tz.zonesForCountry(country)[0];
  const [date, setDate] = useState(moment.tz(currentTimezone).format());
  // ---working with timezones------

  const getTimeRegexp = /\d{2}:\d{2}:\d{2}/;
  const time = date.match(getTimeRegexp)[0].split(':');

  const timeInterval = setTimeout(() => {
    setDate(moment.tz(currentTimezone).format());
    clearTimeout(timeInterval);
  }, 1000);

  return (
    <div className="wrapper">
      <div className="clock">
        <Time time={time} format={format} />
        <Switch format={format} onClickHandler={setFormat} />
      </div>
      <Countries country={country} onClickHandler={setCountry} />
    </div>
  );
}

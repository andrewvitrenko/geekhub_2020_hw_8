import {useState} from 'react';
import { Time } from './components/Time';
import { Switch } from './components/Switch';
import { Countries } from './components/Countries';
import moment from 'moment-timezone';

function App() {
  const [format, setFormat] = useState('24');
  const [country, setCountry] = useState('UA');
  const currentTimezone = moment.tz.zonesForCountry(country)[0];
  const [date, setDate] = useState(moment.tz(currentTimezone).format())
  
  //---working with timezones------

  const getTimeRegexp = /\d{2}:\d{2}:\d{2}/;
  const time = date.match(getTimeRegexp)[0].split(':')

  const timeInterval = setTimeout(() => {
    setDate(moment.tz(currentTimezone).format())
    clearTimeout(timeInterval)
  }, 1000)

  return (
    <div className="wrapper">
      <div className="clock">
        <Time data={{
          time, format,
        }} />

        <Switch format={format} onClickHandler={setFormat} />
      </div>
      
      <Countries country={country} onClickHandler={setCountry} />
    </div>
  );
}

export default App;

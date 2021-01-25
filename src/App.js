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


  const outputDate = {
    hours: (+time[0] > 12 && format === '12') ? +time[0] - 12 : +time[0],
    minutes: +time[1],
    seconds: +time[2],
    parametr: ((format === '12' && +time[0] < 12) ? 'AM' : '') || ((format === '12' && +time[0] >= 12) ? 'PM' : '') || '',
  }

  const changeFormat = (newFormat) => {
    setFormat(newFormat)
  }

  const timeInterval = setTimeout(() => {
    setDate(moment.tz(currentTimezone).format())
    clearTimeout(timeInterval)
  }, 1000)

  const changeCountry = (newCountry) => {
    setCountry(newCountry)
  }

  return (
    <div className="wrapper">    
      <div className="clock">
        <Time date={outputDate} />

        <Switch format={format} onClickHandler={changeFormat} />
      </div>
      
      <Countries country={country} onClickHandler={changeCountry} />
    </div>
  );
}

export default App;

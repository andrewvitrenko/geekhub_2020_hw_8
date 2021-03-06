export function Time(props) {
    const {time, format} = props.data;

    const date = {
        hours: (+time[0] > 12 && format === '12') ? +time[0] - 12 : +time[0],
        minutes: +time[1],
        seconds: +time[2],
        parametr: ((format === '12' && +time[0] < 12) ? 'AM' : '') || ((format === '12' && +time[0] >= 12) ? 'PM' : '') || '',
    }
    
    return(
        <div className="time">
            <time>
                {date.hours < 10 ? `0${date.hours}` : date.hours}&nbsp;:&nbsp;
                {date.minutes < 10 ? `0${date.minutes}` : date.minutes}&nbsp;:&nbsp;
                {date.seconds < 10 ? `0${date.seconds}` : date.seconds}&nbsp;&nbsp;
                {date.parametr ? date.parametr : ''}
            </time>
        </div>
    )
}
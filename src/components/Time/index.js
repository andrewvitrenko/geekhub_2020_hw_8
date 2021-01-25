export function Time(props) {
    const {date} = props;
    
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
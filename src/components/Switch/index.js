export function Switch(props) {
    const {format, onClickHandler} = props

    return(
        <div className="switch">
            <span className={format === '24' ? '24 active' : '24'} onClick={() => onClickHandler('24')} >24-hours</span>
            <span className={format === '12' ? '12 active' : '12'} onClick={() => onClickHandler('12')} >12-hours</span>
        </div>
    )
}
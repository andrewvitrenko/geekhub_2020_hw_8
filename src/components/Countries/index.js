import ukraine from '../../assets/img/flags/ukraine.png';
import great_britain from '../../assets/img/flags/great_britain.png';
import usa from '../../assets/img/flags/usa.png';
import australia from '../../assets/img/flags/australia.png';
import new_zeland from '../../assets/img/flags/new_zeland.png';
import egypt from '../../assets/img/flags/egypt.png';

export function Countries(props) {
    const {country, onClickHandler} = props;

    return(
        <ul className="country_list">
            <li className={country === 'UA' ? 'active': ''} onClick={() => onClickHandler('UA')} >
                1. <img src={ukraine} className="flag" alt="flag of this country" />
                <p className="country_name" >Ukraine</p>
            </li>

            <li className={country === 'GB' ? 'active': ''} onClick={() => onClickHandler('GB')}>
                2. <img src={great_britain} className="flag" alt="flag of this country" />
                <p className="country_name" >Great Britain</p>
            </li>

            <li className={country === 'US' ? 'active': ''} onClick={() => onClickHandler('US')}>
                3. <img src={usa} className="flag" alt="flag of this country" />
                <p className="country_name" >USA</p>
            </li>

            <li className={country === 'AU' ? 'active': ''} onClick={() => onClickHandler('AU')}>
                4. <img src={australia} className="flag" alt="flag of this country" />
                <p className="country_name" >Australia</p>
            </li>

            <li className={country === 'NZ' ? 'active': ''} onClick={() => onClickHandler('NZ')}>
                5. <img src={new_zeland} className="flag" alt="flag of this country" />
                <p className="country_name" >New Zeland</p>
            </li>

            <li className={country === 'EG' ? 'active': ''} onClick={() => onClickHandler('EG')}>
                6. <img src={egypt} className="flag" alt="flag of this country" />
                <p className="country_name" >Egypt</p>
            </li>
        </ul>
    )
}
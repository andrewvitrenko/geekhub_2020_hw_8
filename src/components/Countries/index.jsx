import React from 'react';
import { countries } from '../../const';

export default function Countries({ country, onClickHandler }) {
  return (
    <ul className="country_list">
      {
        countries.map((item, i) => (
          <li key={item.code} className={country === item.code ? 'active' : ''}>
            {i + 1}
            .
            <img src={item.flag} alt="flag" className="flag" />
            <p className="country_name"><button type="button" onClick={() => onClickHandler(item.code)}>{item.name}</button></p>
          </li>
        ))
      }
    </ul>
  );
}

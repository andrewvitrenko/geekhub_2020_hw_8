import React from 'react';

export default function Switch(props) {
  const { format, onClickHandler } = props;

  return (
    <div className="switch">
      <button type="button" className={format === '24' ? '24 active' : '24'} onClick={() => onClickHandler('24')}>
        <span>24-hours</span>
      </button>
      <button type="button" className={format === '12' ? '12 active' : '12'} onClick={() => onClickHandler('12')}>
        <span>12-hours</span>
      </button>
    </div>
  );
}

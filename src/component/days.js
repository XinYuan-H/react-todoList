import React from 'react'
import './days.css'

export default function Days(props) {
    const month = props.date.toLocaleString("zh-TW",{month:'long'});
    const day = props.date.getDate();
  return (
    <div className='date'>
                <div className='month'>{month}</div>
                <div className='day'>{day}</div>
    </div>
  )
}

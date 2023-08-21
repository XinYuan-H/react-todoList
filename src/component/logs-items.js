import React, { useState } from 'react'
import Days from './days'
import './logs-items.css'
import ConfirmModal from '../UI/ConfirmModal'


export default function Items(props) {

  const[showConfirm,setShowConfirm] = useState(false);

  const cancelHandler = ()=>{
    setShowConfirm(false)
  }

  const okHandler = ()=>{
    props.onDelete()
  }

  const deleteHandler = ()=>{
     setShowConfirm(true)
  }
  
  
  return (
      <div className='item'>
            {showConfirm &&<ConfirmModal confirmText={'確定要刪除嗎?'}
            onCancel = {cancelHandler} onOK = {okHandler}/>}
            <Days date={props.date}/>

            <div className='content'>
                <h2 className='desc'>{props.desc}</h2>
                <div className='time'>{props.time}</div>
            </div>

            <div>
                <div className='delete' onClick={deleteHandler}>x</div>
            </div>

      </div>

  )
}

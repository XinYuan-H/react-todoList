import React from 'react'
import './ConfirmModal.css'
import Card from './Card'
import BackDrop from './BackDrop'

export default function ConfirmModal(props) {


  

  return (
  <BackDrop>
      <Card className='confirmModal'>
    <div className='confirmText'>
      <p>{props.confirmText}</p>
    </div>

    <div className='confirmBtn'>
        <button onClick = {props.onOK}>確定</button>
        <button onClick = {props.onCancel}>取消</button>
    </div>
    </Card>
  </BackDrop>
    

  )
}

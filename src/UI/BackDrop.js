import React from 'react'
import './BackDrop.css'
import ReactDom from 'react-dom'

const backDropRoot = document.getElementById('backDropRoot');
  

export default function BackDrop(props) {

  return (
    ReactDom.createPortal(
    <div className='backDrop'>
    {props.children}
    </div>,backDropRoot)
  )
}

import React, { useState } from 'react'
import Card from '../UI/Card'
import './Logsform.css'


export default function Logsform(props) {
    
    const [inputDate,setinputDate] = useState();
    const [inputDesc,setinputDesc] = useState();
    const [inputTime,setinputTime] = useState();


    const dateChangehandle = (e)=>{
        setinputDate(e.target.value)
    }

    const descChangehandle = (e)=>{
        setinputDesc(e.target.value)
    }
    

    const timeChangehandle = (e)=>{
        setinputTime(e.target.value)
    }



    const submitHandle = (e)=>{
        e.preventDefault();

        const newLogs = {
            date:new Date(inputDate),
            desc:inputDesc,
            time:+inputTime,
        }
        
        setinputDate('');
        setinputDesc('');
        setinputTime('');

        console.log(newLogs);
        
        props.onlogHandler(newLogs);
    }


  return (
    <Card className="logs-form">
        <form  onSubmit={submitHandle}>
            <div>
                <label htmlFor="date">日期</label>
                <input id='date' type="date" onChange = {dateChangehandle} value={inputDate} />
            </div>

            <div>
                <label htmlFor="desc">內容</label>
                <input id='desc'  type="text" onChange = {descChangehandle} value={inputDesc}/>
            </div>
            
            <div>
                <label htmlFor="time">時間</label>
                <input id='time' type="number" onChange = {timeChangehandle} value={inputTime}/>
            </div>

            <div>
                <button>添加</button>
            </div>
        </form>
    </Card>
  )
}

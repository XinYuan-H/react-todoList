import React from 'react'
import Items from './logs-items'
import LogsFilter from './logsFilter'
import Card from '../UI/Card'
import './logs.css'
import { useState } from 'react'
import { useRef } from 'react'

export default function Logs(props) {

  const [year,setYear] = useState(2022);

  
  
  
  const refCotain = useRef();
  const [counter,setCounter] = useState(1);


  let filterData = props.logsData.filter(items => items.date.getFullYear() === year)


  const changeYearHandler=(year)=>{
        setYear(year)
  }

  let dataBase = filterData.map(items => <Items onDelete={()=>props.onDelete(items.id)} 
                                                    key={items.id} 
                                                    date={items.date}  
                                                    desc={items.desc} 
                                                    time={items.time}/>)

  if(dataBase.length === 0){
     dataBase = <p className='no-data'>沒有任何行程！！</p>
  }

  return (
    <Card className='logs'>
      <LogsFilter
       year={year}
       onYearChange={changeYearHandler}/>
      {dataBase}
    </Card>
  )
}

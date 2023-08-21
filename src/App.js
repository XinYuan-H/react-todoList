import { useState } from 'react';
import Logs from './component/logs.js'
import Logsform from './component/Logsform';
import Confirm from './UI/ConfirmModal.js';



export default function App() {

  
    const [logsData,setNewdata] = useState([
        {
         id:1,
         date:new Date(2022,11,5,13,10),
         desc:"React.js",
         time:"300"
        },
        {
         id:2,
         date:new Date(2023,1,5,23,15),
         desc:"Typescript",
         time:200
        },
        {
         id:3,
         date:new Date(2023,2,15,20,30),
         desc:"Git",
         time:120
        },
        {
         id:4,
         date:new Date(2023,6,20,23,5),
         desc:"Javascript",
         time:300
        }
      ])

      const  onlogHandler = (t)=>{
           t.id = Date.now()+'';
           setNewdata([...logsData,t])
      }

      const delHandler = (id)=>{
           setNewdata(prevState => {
            const newLos = prevState.filter(items => items.id !== id)
           
            return newLos
           })

      }


  return (
    <div>
        <Logsform onlogHandler={onlogHandler}/>
        <Logs logsData={logsData} onDelete={delHandler}/>
    </div>
  )
}

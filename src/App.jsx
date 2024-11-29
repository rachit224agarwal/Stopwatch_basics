import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [t,setT] = useState(0)
  const [time,setTime] = useState(t)
  useEffect(()=>{
    const timer = setInterval(()=> {
      setT(t + 1)
    },1000)
    return function(){
      clearInterval(timer)
    }
  },[t])  


  return (
    <div className='text-center mt-6 p-7'>
      <h1 className='font-extrabold'> TIMER</h1>
      <p>Time is - {t} </p>
      <p>Time is - {time}</p>
      <button className='bg-slate-300 px-2 py-1 mt-1 rounded-3xl' onClick={()=>setTime(t)}>Stop</button>
    </div>
  )
}

export default App

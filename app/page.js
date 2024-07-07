"use client"
import React, { useState } from 'react'

const page = () => {
  const [task, settask] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {task, desc}])
    setdesc("")
    settask("")
  }

  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  let renderTask = <h2>No task available</h2>

  if (mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{  
      return (
      <li key={i} className='flex items-center justify-between mb-3'>
          <div>
            <h5 className='font-semibold text-xl' >Task Name : {t.task}</h5>
            <h6 className='font-semibold text-xl' >Task Description : {t.desc}</h6>
          </div>
      <button onClick={()=>{
        deleteHandler(i)
      }} className='bg-red-700 text-white rounded font-semibold p-2'>Delete Task</button>
      </li>
      )
    })
  }

  return (
    <>
        <h1 className='bg-black text-white font-bold text-2xl text-center justify-center'>My Todo List</h1>
        <form onSubmit={submitHandler}>
            <input className='border-black border-2 m-5 p-2 ' 
            type='text' 
            required
            placeholder='Task Name'
            value={task}
            onChange={(e)=>{
              settask(e.target.value)
            }}
            />
            <input className='border-black border-2 m-5 p-2 ' 
            type='text' 
            required
            placeholder='Task Description'
            value={desc}
            onChange={(e)=>{
              setdesc(e.target.value)
            }}
            />
            <button className='border-black bg-red-700 text-white m-5 p-3 rounded'>Add Task</button>
        </form>
        <hr/>
        <div className='bg-zinc-600 text-white p-8' >
            <ul>
              {renderTask}
            </ul>

        </div>        
    </>
  )
}

export default page
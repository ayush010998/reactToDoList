import React, { useState } from 'react'
import './Todo.css'

const ToDo = () => {

  const [activity,setActivity]=useState("")
  const [listData,setListData]=useState([])

  function addActivity(){
    setListData((listData)=>{
      const updatedList=[...listData,activity]
      setActivity('')
      return updatedList
    })
  }
  function removeActivity(i){
    const updatedListData=listData.filter((elem,id)=>{
      return i!=id
    })
    setListData(updatedListData)
  }
  function removeAll(){
    setListData([])
  }
  return (
    <>
     <div className='container'>
      <h1>To Do List :)</h1>
      <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}></input>
      <button className='button' onClick={addActivity}>Add Button(+)</button>
      <h1>List Data</h1>
      {listData!=[] && listData.map((data,i)=>{
        return(
          <>
            <p key={i}>
              <div>{data}</div>
              <button className='button' onClick={removeActivity(i)}>Remove button(-)</button>
            </p>
          </>
        )
      })}
      {listData.length>=1&&
      <button onClick={removeAll}>Remove All :)</button>}
     </div>
    </>
  )
}

export default ToDo

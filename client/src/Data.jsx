import { FcCollapse,FcExpand  } from "react-icons/fc";
import './App.css'
import { useState } from "react";
const Data = ({title,body}) => {
    let [show,setshow]=useState(false)
  return (
   <div className={show? "acordion-opened":"acordion-item"}  onMouseEnter={()=>setshow(true)} onMouseLeave={()=>setshow(false)}>
    <div className="accordion-title">
    <h6>{title}</h6>
   {show?<FcCollapse />:<FcExpand />}
  
    </div>
    {show &&  <p>{body}</p>}
   

   </div>
  )
}



export default Data
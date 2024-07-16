import { useEffect, useState } from "react";
import Data from "./Data";


const App = () => {
  let url="https://jsonplaceholder.typicode.com/posts";
  let [dataAdd,setDataAdd]=useState([])
  let loadData=()=>{
    fetch(url,
      {
        method:"GET"
      }
    )
    .then((res)=>res.json())
    .then((result)=>{
      if(result){
      setDataAdd(result);
      }

    })
    .catch((err)=>{
      console.log(err)
    })
  }
  useEffect(()=>{
    loadData();
  },[]);
  return (
    <>
    <div className="container">
      <h5
      style={{
        textAlign:"center",lineHeight:"100px",backgroundColor:"orangered"
      }}>REACT ACORDION</h5>
      <div className="row">
        {
          dataAdd.map((item,index)=>(
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
             <Data {...item} />
            </div>
          ))
        }

      </div>
      


    </div>
    </>
  )
}

export default App
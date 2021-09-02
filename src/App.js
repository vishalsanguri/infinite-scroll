import React, { useEffect, useRef, useState } from 'react'

export default function App() {
  const myvar= ["a","s","d","f","g","h","j","k","l"]
  const [count, setCount] = useState([...myvar])
  var myref=useRef()
  useEffect(()=>{
    showme()
  },[count])
  function showme(){
    var lastitem=new IntersectionObserver((entries)=>{
      if(entries[0].isIntersecting){
        lastitem.unobserve(myref.current)
        setCount([...count,...myvar])
      }
    },{
      threshold:[1]
    }
    )
    lastitem.observe(myref.current)
  }
  return (
    <div>
      {count.map((e,i)=>{
        if(count.length===i+1) return <div ref={myref} key={i} style={{width:"100px",height:"100px",backgroundColor:"red",margin:"40px auto"}}></div>
        
        else return <div key={i} style={{width:"100px",height:"100px",backgroundColor:"red",margin:"40px auto"}}></div>
      })}
    </div>
  )
}

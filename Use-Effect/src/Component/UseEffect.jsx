import React,{useEffect,useState} from 'react'

export default function UseEffect() {

    const [num,setNum] = useState(0)

    useEffect(()=>{
        //mounting

        return console.log('mounting');
        
    })
  return (
    <div className='main'>
        <h1>UseEffect</h1>
        <h1>{num}</h1>
        <button onClick={()=>setNum(num-1)}><i className="fa-solid fa-minus"></i></button>
        <button onClick={()=>setNum(num+1)}><i className="fa-solid fa-plus"></i></button>
    </div>
  )
}

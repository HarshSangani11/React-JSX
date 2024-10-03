import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let arr=[1,2,3,4,5]
  let arr2=[
    {name:"Harsh",subject:"React"},
    {name:"Jay",subject:"Javascript"},
    {name:"Raj",subject:"Html"},
    {name:"Abhi",subject:"Css"}
    
  ]
  return (
    <>
      {
        arr.map((e,i)=>{
          return <div key={i}>
            <h1>{e}</h1>
          </div>
        })
      }
      {
        arr2.map((e,i)=>{
          return <div key={i}>
            <h3>{e.name} {e.subject}</h3>
          </div>
        })
      }
    </>
  )
}

export default App

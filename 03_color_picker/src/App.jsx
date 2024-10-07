import { useState,useRef } from 'react'



function App() {
  const [color, setColor] = useState('#087ea4')

  const changeColor =(colorHex) =>{
    setColor(colorHex)
  }
  return (
    <div className='background' style={{background:color}}>
      <form action="">
        <h1 style={{color:color}}>Pick Your Color</h1>
        <input type="color" name="" id="" value={color} onChange={(e)=> changeColor(e.target.value)}/>
      </form>
    </div>
  )
}

export default App

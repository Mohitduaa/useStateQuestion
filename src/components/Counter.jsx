import React, { useState } from 'react'

const Counter = () => {
    const[count,setCount] = useState(0)
    const[input,setInput] = useState('')
  return (
    <div className='my-10 mx-5'>
    <input className='border border-black px-2' type="number" placeholder='Enter a number' value={input} onChange={(e) => setInput(e.target.value)} />
    <p>count is{count}</p>
    <button className='border-2 border-black px-2 font-bold' onClick={()=>(setCount(count+Number(input)))}>Increment</button>
    <button className='border-2 border-black px-2 font-bold' onClick={()=>(setCount(count-Number(input)))}>Decrement</button>

    
    </div>
  )
}

export default Counter
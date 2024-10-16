import React, { useState } from 'react'

const ColorChange = () => {
    const [color,SetColor]= useState('white')
    const handleColorChange = (newColor) => {
        SetColor(newColor);
      };
  return (
    <div className=' '>
        <h1 className='group flex flex-col justify-center items-center h-[100vh] w-[100%]'style={{ backgroundColor:color} }>Choose Us
         <ul className='hidden group-hover:inline'>
         <li onClick={() => handleColorChange('red')}>Red</li>
            <li onClick={()=> handleColorChange('Green')}>Green</li>
            <li onClick={()=>handleColorChange('Yellow')}>Yellow</li>
            <li onClick={()=>handleColorChange('Pink')}>Pink</li>
            <li onClick={()=>handleColorChange('Blue')}>Blue</li>
         </ul>
         </h1>
    </div>
  )
}

export default ColorChange
import React from 'react'

export const Functions = () => {
  
  const sum = (a:number,b:number):number=>{
    return a+b
  }

  return (
    <>
      <h3>Functions</h3>
      <span>El resultado es {sum(1,2)}</span>
    </>
  )
}

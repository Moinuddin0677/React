import React from 'react'

const Para = () => {
  return (
   <>
   
   <ol>List of 5
    <li>{new Date().toLocaleDateString()}</li>
    <li>{new Date().toLocaleTimeString()}</li>
    <li>{new Date().getHours()%12}</li>
    <li>Four</li>
  </ol>
   </>
  )
}

export default Para;
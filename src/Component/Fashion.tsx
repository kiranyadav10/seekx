import React from 'react'
import fashion from "../assets/fashion.jpg"

const Fashion = (props:any) => {
  const {img}= props
  return (
    <div className="relative">
    <img
      className="w-full h-fit object-cover object-center"
      src={img}
      alt="Banner"
    />
  </div>
  )
}

export default Fashion
import React from 'react'
import fashion from "../assets/fashion.jpg"

const Fashion = () => {
  return (
    <div className="relative">
    <img
      className="w-full h-fit object-cover object-center"
      src={fashion}
      alt="Banner"
    />
  </div>
  )
}

export default Fashion
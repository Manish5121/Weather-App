import React from "react"
import Weather from "./Weather"

const CardForeground = () => {
  return (
    <div className="fixed  drop-shadow-2xl w-[30%] h-[60%] overflow-hidden rounded-md  bg-white-500/20  backdrop-filter backdrop-blur-lg pt-4">
      <Weather />
    </div>
  )
}

export default CardForeground

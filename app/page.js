"use client"

import React from "react"
import Card from "./Components/Card"
import CardBackground from "./Components/CardBackground"
import CardForeground from "./Components/CardForeground"

const page = () => {
  return (
    <div className="w-full h-screen bg-zinc-700 flex justify-center items-center relative">
      <CardBackground />
      <CardForeground />
    </div>
  )
}

export default page

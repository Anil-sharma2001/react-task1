import { useState } from "react"
import React from 'react'

export default function Child({text}) {
    console.log(text)

  return (
    <div>
     <p>Child Component {text}</p>
    </div>
  )
}

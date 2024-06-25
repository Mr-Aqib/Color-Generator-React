import React from 'react'
import ColorGene from './color-Gen/ColorGene'
import toast, { Toaster } from 'react-hot-toast';
import "./color-Gen/style.css"
const App = () => {
  return (
    <>
      <ColorGene />
      <Toaster/>
    </>
  )
}

export default App
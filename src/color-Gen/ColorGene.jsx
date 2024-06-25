import React, { useState } from 'react'
import Values from 'values.js'
const ColorGene = () => {
    const [input, setInput] = useState("")
    const handleChange = (e) =>
    { 
        e.preventDefault();
        const newcolor = new Values(input).all(10)
        console.log(newcolor)
        }
  return (
      <>
          <div className="container">
              <div style={{background:'rgb(245,214,100)'}} className="col-lg-5 my-3 rounded-4 mx-auto shadow p-3">
                  <form action="">
                      <label className='fs-3 text-center d-block' htmlFor="">Color Generator</label>
                      <input onChange={(e)=> setInput(e.target.value)} value={input} placeholder='e.g .brown' className='form-control' type="text" name="" id="" />
                      <button onClick={handleChange} className="btn my-3 btn-danger w-50 d-block mx-auto">
                          Generate
                      </button>
                  </form>
              </div>
          </div>
      </>
  )
}

export default ColorGene
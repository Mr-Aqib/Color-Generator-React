import React, { useState } from 'react'
import toast from 'react-hot-toast'
import Values from 'values.js'
const ColorGene = () => {
    const [input, setInput] = useState("")
    const [err,setErr] = useState(false)
    const handleChange = (e) =>
    { 
        e.preventDefault();
        try {
            setErr(false)
            const newcolor = new Values(input).all(10)
            toast.success("Color Generated")
            console.log(newcolor)
            setInput("")
        }
        catch
        {
            setErr(true)
            toast.error("Invalid Color")
            console.log("Invalid Color")
        }
        }
  return (
      <>
          <div className="container">
              <div  className="search-con col-lg-5 my-3 rounded-4 mx-auto shadow p-3">
                  <form action="">
                      <label className='fs-3 text-center d-block' htmlFor="">Color Generator</label>
                      <input style={{border :` ${err? '2px solid red' : "" }`}} onChange={(e)=> setInput(e.target.value)} value={input} placeholder='e.g .brown' className='form-control' type="text" name="" id="" />
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
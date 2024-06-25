import React from 'react'
import toast from 'react-hot-toast';
import { FaCopy } from "react-icons/fa6";

const SingleColors = ({rgb,hex,index}) => {
  return (
      <>
          <div className="col-lg-3 col-5">
              
              <div style={{ background: `rgb(${rgb})` }} className="card p-1  my-1 ">
                  <FaCopy
                     
                      onClick={() =>
                  {
                          navigator.clipboard.writeText(hex);
                          toast.success("Copied Color")

                      }
                   } />
                  <h5 className={`${index >= 10 && "text-white"} p-4
                  `} >
                      {hex}
                  </h5>
                 

                                </div>
          </div>
        
      </>
  )
}

export default SingleColors
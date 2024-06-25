import React from 'react'

const SingleColors = ({rgb,hex,index}) => {
  return (
      <>
          <div className="col-lg-3 col-5">
              <div style={{ background: `rgb(${rgb})` }} className="card p-4 my-2">
                  <h6 className={`${index >= 10 && "text-white"}`} >
                      {hex}
                  </h6>
                                </div>
          </div>
        
      </>
  )
}

export default SingleColors
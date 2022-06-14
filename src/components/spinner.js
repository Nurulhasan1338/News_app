import React from 'react'
import loding from './giphy.gif';

const Spinner=()=>{
    return (
      <div className='d-flex justify-content-center mb-3'>
         <img src={loding} style={{width:150+"px",height:"auto"}} alt="img" />
      </div>
    )
  
}
export default Spinner;

import * as React from 'react'

const nextBtn = ({handler}) => {
  return (
    <div>
        <button 
         type='button' 
         onClick={handler} >Back
         </button>
    </div>
  )
}

export default nextBtn
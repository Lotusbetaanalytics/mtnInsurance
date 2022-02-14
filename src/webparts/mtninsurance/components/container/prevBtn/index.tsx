import * as React from 'react'

const prevBtn = ({handler}) => {
  return (
    <div>
        <button 
         type='button' 
         onClick={handler} > Next
         </button>
    </div>
  )
}

export default prevBtn
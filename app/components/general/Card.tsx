import React from 'react'

function Card({children}:{children:React.ReactNode}) {
  return (
    <div className='bg-card text-textCol p-4 w-full h-full rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] '>
        {children}
    </div>
  )
}

export default Card
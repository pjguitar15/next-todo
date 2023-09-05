import React from 'react'

const LoadingState = () => {
  return (
    <div className='bg-zinc-900 border-t-2 border-blue-600 px-5 py-7'>
      <div className='animate-pulse flex justify-between'>
        <div className='h-4 bg-white w-1/3 rounded-lg'></div>
        <div className='h-4 bg-white w-1/4 rounded-lg'></div>
      </div>
    </div>
  )
}

export default LoadingState

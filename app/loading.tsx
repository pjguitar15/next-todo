import LoadingState from '@/components/LoadingState'
import React from 'react'

const loading = () => {
  return (
    <>
      <main className='container mx-auto pt-5'>
        <h1 className='text-3xl mb-2'>
          Todo list using{' '}
          <span className='font-extrabold text-blue-600'>NextJS</span>
        </h1>
        <h1 className='text-lg mb-2'>
          developed by{' '}
          <span className='text-blue-600'>Philcob Suzuki Josol</span>
        </h1>
        <p className='mb-5 max-w-lg text-gray-400'>
          The application will allow users to add, delete, and mark tasks as
          completed, demonstrating the power and ease of building dynamic web
          applications with Next.js.
        </p>
        <button
          disabled
          className='bg-blue-600 px-4 py-2 rounded-sm text-white disabled:opacity-50'
        >
          Add New Todo
        </button>
        <hr className='mt-8 mb-6' />
      </main>
      <div className='container mx-auto'>
        <h5 className='mb-5'>Here are all the todo items:</h5>
        <div className='grid grid-cols-2 gap-2'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: any) => (
            <LoadingState key={item} />
          ))}
        </div>
      </div>
    </>
  )
}

export default loading

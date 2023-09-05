'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'

const AddForm = () => {
  const [todoInput, setTodoInput] = useState('')
  const [showError, setShowError] = useState(false)

  const router = useRouter()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // Check if todoInput is empty before submitting
    if (todoInput.trim() === '') {
      setShowError(true)
    } else {
      // Submit the form or perform the desired action
      setShowError(false)
      // ... Add logic to handle the submission ...
    }

    // Send request to backend
    try {
      const res = await fetch(`http://localhost:3000/api/todos`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ item: todoInput, isCompleted: false }),
      })

      if (res.ok) {
        router.push('/')
      } else {
        throw new Error('Failed to create a todo item')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='text-white'>
      <form action='submit' className='max-w-lg' onSubmit={handleSubmit}>
        <input
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          id='name'
          name='name'
          type='text'
          className='border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:border-blue-500 w-full mb-3 text-blue-600 font-medium'
          placeholder='Add a todo item'
        />

        {/* Error Alert */}
        {showError && (
          <div className='bg-red-100 text-red-600 py-2 px-4 rounded-sm mb-3'>
            Please enter a todo item.
          </div>
        )}

        <div className='grid grid-cols-2 gap-2'>
          <button className='bg-blue-600 px-4 py-1 rounded-sm'>Add</button>
          <Link
            className='border border-blue-600 px-4 py-1 rounded-sm text-center'
            href='/'
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  )
}

export default AddForm

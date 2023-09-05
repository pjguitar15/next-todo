'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const EditForm = ({ id, item }: any) => {
  const [newItem, setNewItem] = useState(item)
  const router = useRouter()
  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ newItem }),
      })

      if (!res.ok) {
        throw new Error('Failed to update todo')
      }

      router.refresh()
      router.push('/')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1 className='text-3xl mb-3'>Edit item</h1>
      <p className='mb-5 max-w-lg text-gray-400'>
        Edit this todo item to make changes or updates
      </p>
      <form action='submit' className='max-w-lg' onSubmit={handleSubmit}>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          id='name'
          name='name'
          type='text'
          className='border border-gray-300 rounded-sm px-4 py-2 focus:outline-none focus:border-blue-500 w-full mb-3 text-blue-600 font-medium capitalize'
          placeholder='Add a todo item'
        />
        <div className='grid grid-cols-2 gap-2'>
          <button className='bg-blue-600 px-4 py-1 rounded-sm'>Edit</button>
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

export default EditForm

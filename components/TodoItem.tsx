'use client'
import { useEffect, useState } from 'react'
import { TodoItemProps } from '@/types'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const TodoItem = ({ id, item, isCompleted }: TodoItemProps) => {
  const [currentTodo, setCurrentTodo] = useState({})
  const router = useRouter()

  // consume Rest API here for update
  const getTopicById = async () => {
    try {
      // gets the data of the current id
      const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
        cache: 'no-store',
      })

      // throws error when item is failed to fetch
      if (!res.ok) {
        throw new Error('Failed to fetch todo item')
      }

      // returns the json object
      const data = res.json()
      return data

      // catches error
    } catch (error) {
      console.log('Error Message: ' + error)
    }
  }

  const handleCheckbox = async (id: any) => {
    const assignTopicsToState = async () => {
      // adds the result to todo
      const { todo } = await getTopicById()
      const { item, isCompleted } = todo

      // initialize the updated item
      const newItem = !isCompleted
      const newObject = { newIsCompleted: newItem }

      // update the item
      try {
        const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(newObject),
        })

        if (!res.ok) {
          throw new Error('Failed to update todo')
        }

        router.refresh()
        router.push('/')
      } catch (error) {
        console.log(error)
      }

      // makes the todo item global
      setCurrentTodo(todo)
      console.log(currentTodo)
    }

    assignTopicsToState()
  }

  const handleDelete = async () => {
    const confirmed = confirm('Are you sure you want to delete this?')

    if (confirmed) {
      await fetch(`http://localhost:3000/api/todos?id=${id}`, {
        method: 'DELETE',
      })
      router.refresh()
    }
  }

  return (
    <div className='bg-zinc-900 border-t-2 border-blue-600 p-5'>
      <div className='flex justify-between'>
        <h6 className='capitalize text-white'>{item}</h6>
        <div className='flex items-center'>
          <input
            checked={isCompleted}
            onChange={() => handleCheckbox(id)}
            type='checkbox'
            className='form-checkbox h-5 w-5 text-blue-500 rounded focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
          />
          <div onClick={handleDelete} className='text-2xl cursor-pointer ml-1'>
            🗑
          </div>
          <Link className='text-2xl cursor-pointer ml-1' href={`/edit/${id}`}>
            🖋
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TodoItem

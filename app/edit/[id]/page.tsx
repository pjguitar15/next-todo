import EditForm from '@/components/EditForm'
import { FormEvent } from 'react'

const getTopicById = async (id: any) => {
  try {
    const res = await fetch(`http://localhost:3000/api/todos/${id}`, {
      cache: 'no-store',
  })

    if (!res.ok) {
      throw new Error('Failed to fetch topic')
    }

    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const Edit = async ({ params }: any) => {
  const { id } = params
  const { todo } = await getTopicById(id)
  const { item, isCompleted } = todo

  return (
    <div className='text-white p-7'>
      <EditForm id={id} item={item} />
    </div>
  )
}

export default Edit

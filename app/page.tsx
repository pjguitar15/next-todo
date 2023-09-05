import Link from 'next/link'

import ShowTodoItems from '@/components/ShowTodoItems'

export default async function Home() {
  return (
    <main className='container mx-auto pt-5'>
      <h1 className='text-3xl mb-2'>
        Todo list using{' '}
        <span className='font-extrabold text-blue-600'>NextJS</span>
      </h1>
      <h1 className='text-lg mb-2'>
        developed by <span className='text-blue-600'>Philcob Suzuki Josol</span>
      </h1>
      <p className='mb-5 max-w-lg text-gray-400'>
        The application will allow users to add, delete, and mark tasks as
        completed, demonstrating the power and ease of building dynamic web
        applications with Next.js.
      </p>
      <Link className='bg-blue-600 px-4 py-2 rounded-sm text-white' href='/new'>
        Add New Todo
      </Link>
      <hr className='mt-8 mb-6' />
      <ShowTodoItems />
    </main>
  )
}

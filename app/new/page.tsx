import React from 'react'
import Link from 'next/link'
import AddForm from '@/components/AddForm'

export default function New() {
  return (
    <section className='container mx-auto pt-5'>
      <h1 className='text-3xl mb-3'>Add a todo item</h1>
      <p className='mb-5 max-w-lg text-gray-400'>
        Discover the straightforward process of adding new tasks to the list and
        empowering users to stay organized with ease.
      </p>

      {/* add add form component */}
      <AddForm />
    </section>
  )
}

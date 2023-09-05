import React from 'react'

const ConfirmationModal = ({ onConfirm, onCancel }: any) => {
  return (
    <div className='fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50'>
      <div className='bg-white p-6 rounded-md'>
        <p className='mb-4'>Are you sure you want to delete this item?</p>
        <div className='flex justify-end'>
          <button
            onClick={onConfirm}
            className='bg-red-500 text-white px-4 py-2 rounded-md mr-2'
          >
            Confirm
          </button>
          <button
            onClick={onCancel}
            className='bg-blue-500 text-white px-4 py-2 rounded-md'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

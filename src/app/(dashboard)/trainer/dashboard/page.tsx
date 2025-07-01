import React from 'react'

function TrainerPage() {
  return (
    <div>
        <h1 className='text-2xl font-bold text-center'>Trainer Dashboard</h1>
        <p className='text-center mt-4'>Welcome to the Trainer Dashboard. Here you can manage your training sessions, view statistics, and more.</p>
        <div className='mt-8 max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md'>
            <h2 className='text-xl font-semibold mb-4'>Upcoming Training Sessions</h2>
            {/* Add components or content for upcoming training sessions here */}
        </div>
        <div className='mt-8 max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md'>
            <h2 className='text-xl font-semibold mb-4'>Statistics</h2>
            {/* Add components or content for statistics here */}
            <div className='mt-4'>
                <p className='text-gray-600'>Total Sessions: 10</p>
                <p className='text-gray-600'>Completed Sessions: 8</p>
                <p className='text-gray-600'>Upcoming Sessions: 2</p>
            </div>
        </div>
    </div>
  )
}

export default TrainerPage 
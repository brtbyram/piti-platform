import React from 'react'

function MessagesModal() {
  return (
      <div className='bg-white w-96 h-auto max-h-8/12 flex flex-col rounded-lg p-4 top-16 right-0 m-4 absolute before:content-[""] before:absolute before:-top-5 before:right-35 before:border-[10px] before:border-x-transparent before:border-b-white before:border-t-transparent'>
        <h2 className='text-lg font-semibold mb-4'>Messages</h2>
        <ul className='space-y-2 overflow-y-auto  flex-1'>
          <li className='p-2 border-b'>
            <p className='text-sm'>New message from Alice.</p>
            <span className='text-xs text-gray-500'>1 hour ago</span>
          </li>
          <li className='p-2 border-b'>
            <p className='text-sm'>Meeting reminder: Project sync at 3 PM.</p>
            <span className='text-xs text-gray-500'>3 hours ago</span>
          </li>
          <li className='p-2 border-b'>
            <p className='text-sm'>Your order has been shipped.</p>
            <span className='text-xs text-gray-500'>1 day ago</span>
          </li>
          <li className='p-2 border-b'>
            <p className='text-sm'>New comment on your post.</p>
            <span className='text-xs text-gray-500'>2 days ago</span>
          </li>
          <li className='p-2 border-b'>
            <p className='text-sm'>Password changed successfully.</p>
            <span className='text-xs text-gray-500'>1 week ago</span>
          </li>
          <li className='p-2 border-b'>
            <p className='text-sm'>New follower: Bob.</p>
            <span className='text-xs text-gray-500'>2 weeks ago</span>
          </li>
          <li className='p-2 border-b'>
            <p className='text-sm'>Your subscription is about to expire.</p>
            <span className='text-xs text-gray-500'>3 weeks ago</span>
          </li>
          <li className='p-2 border-b'>
            <p className='text-sm'>New message from Charlie.</p>
            <span className='text-xs text-gray-500'>1 month ago</span>
          </li>
        </ul>
        <div className='mt-4 text-center'>
          <button className='text-blue-500 hover:underline text-sm'>View All Messages</button>
        </div>
      </div>
  )
}

export default MessagesModal
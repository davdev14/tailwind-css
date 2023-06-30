import React from 'react'

const Spacing = () => {
  return (
    <div>
      <h4>padding and margin</h4>
      <input type="text" className='mx-8 my-10 bg-white px-8 placeholder:italic placeholder:text-blue-600 text-blue-600 caret-blue-700' placeholder='this is an input'/>
      <h4>space between</h4>
      <div className='flex space-x-10'>
        <div className='text-center p-1 bg-violet-600 w-20'>A</div>
        <div className='text-center p-1 bg-violet-600 w-20'>B</div>
        <div className='text-center p-1 bg-violet-600 w-20'>C</div>
        <div className='text-center p-1 bg-violet-600 w-20'>D</div>
        <div className='text-center p-1 bg-violet-600 w-20'>E</div>
        <div className='text-center p-1 bg-violet-600 w-20'>F</div>
      </div>
      <br />
      <hr />
    </div>
  )
}

export default Spacing

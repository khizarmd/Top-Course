import React from 'react';
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
        <div className='spinner'>

        </div>
        <p className='text-lg text-bgDark font-semibold'>loading...</p>
    </div>
  )
}

export default Spinner
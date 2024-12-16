import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Redux = () => { 

  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  
  return (
    <div className=''>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: "Inc" })}>+</button>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>

    </div>
  )
}

export default Redux

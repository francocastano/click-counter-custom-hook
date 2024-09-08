import React from 'react'
import { useCounter } from '../hooks/useCounter'


export const ComponentCounter = () => {
  const {counter, increase, decrease, reset} = useCounter(0)
  return (
    <>
      <h1>
        Counter: {counter}
      </h1>
      <button className='btn btn-primary' onClick={() => increase(1)}>increase</button>
      <button className='btn btn-primary' onClick={() => decrease(1)}>decrease</button>
      <button className='btn btn-danger' onClick={() => reset()}>reset</button>
    </>
  )
}

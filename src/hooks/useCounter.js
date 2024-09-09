import React, { useState } from 'react'

export const useCounter = (initialValue = 0) => {

   const [counter, setCounter] = useState(initialValue) 

    const increase = (value = 1) => {
        setCounter(counter + value)
    }
    const decrease = (value = 1) => {
        setCounter(Math.max(counter - value, 0))
    }
    const reset = () => {
        setCounter(0)
    }

  return{
    counter,
    increase,
    decrease,
    reset
  }
}

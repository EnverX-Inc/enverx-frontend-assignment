import React from 'react'

const Display = ({income, expenses}) => {
  return (
    <div className='display'>
    <div className='income screen' style={{ borderRight: '4px solid grey'}}>
      <span style={{ color: '#00DFA2'}}>Income</span>
      <div className='text-center sz-32 mt-20'>{income}</div>
    </div>
    <div className='expense screen'>
    <span style={{ color: 'red'}}>Expenses</span>
      <div className='text-center sz-32 mt-20'>{expenses}</div>
    </div>
    </div>
  )
}

export default Display;
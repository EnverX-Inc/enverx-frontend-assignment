import React from 'react'

const Card = ({ amount, category, desc}) => {
  const symbol = amount?.slice(0,1);
  return (
    <div className={`box ${symbol === '-' ? 'bg-red' : 'bg-green'}`}>
      <div className='head'>
        <div>{category}:</div>
        <div style={{ marginLeft: '10px'}}>{amount}</div>
      </div>
      <div>{desc}</div>
    </div>
  )
}

export default Card;
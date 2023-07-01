import React from 'react';
import Card from '../components/Card';

const List = ({transactions}) => {
  return (
    <div>
        <h2>Transaction List</h2>
        <div className='scrollable'>
        {transactions.map(i => {
          return <Card {...i}/>
        })}
        </div>
      </div>
  )
}

export default List;
import React from 'react'

const BookCard = (props) => {
  return (
    <div className='card mx-auto text-center'>
      <img className='card-img' src={props.image} alt='' />
      <div className='desc'>
        <div className='card-title'>
          <h2>{props.title}</h2>
        </div>
        <div className='card-body'>
          <h3>Author: {props.author}</h3>
          <p>
            Published Date:{' '}
            {props.published === '0000'
              ? 'Not available'
              : props.published.substring(0, 4)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BookCard

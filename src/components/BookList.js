import React from 'react'
import BookCard from './BookCard'

const BookList = (props) => {
  return (
    <div className='container card-columns'>
      {props.books.map((book, i) => {
        return (
          <BookCard
            key={i}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            subtitle={book.volumeInfo.subtitle}
            author={book.volumeInfo.authors}
            published={book.volumeInfo.publishedDate}
          />
        )
      })}
    </div>
  )
}

export default BookList

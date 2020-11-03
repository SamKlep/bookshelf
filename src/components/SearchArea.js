import React from 'react'

const SearchArea = (props) => {
  return (
    <div className='search-area mt-5 text-center'>
      <form className='p-3' onSubmit={props.searchBook} action=''>
        <input onChange={props.handleSearch} type='text' />
        <button className='btn btn-primary' type='submit'>
          Search
        </button>
        <select
          className='m-3 p-1'
          defaultValue='Sort'
          onChange={props.handleSort}>
          <option disabled value='Sort'>
            Sort
          </option>
          <option value='Newest'>Newest</option>
          <option value='Oldest'>Oldest</option>
        </select>
      </form>
    </div>
  )
}

export default SearchArea

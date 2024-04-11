import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { filterProducts } from '../redux/actions/productActons';

function Filter() {
  let [searchKey, setSearchKey] = useState('')
  let [sortKey, setSortKey] = useState('popular');
  let [category, setCategory] = useState('all');
  let dispatch=useDispatch()
  return (
    <div className='row justify-content-center align-items-center my-4'>
      <div className='col-md-2'>
        <input
          type='text'
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
          placeholder='Search products'
          className='form-control'
        />
      </div>
      <div className='col-md-2'>
        <select
          name=''
          id=''
          className='form-control'
          value={sortKey}
          onChange={(e) => setSortKey(e.target.value)}
        >
          <option value='popular'>Popular</option>
          <option value='htl'>High to Low</option>
          <option value='lth'>Low to High</option>
        </select>
      </div>
      <div className='col-md-2'>
        <select
          name=''
          id=''
          className='form-control'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value='all'>all</option>
          <option value='electronics'>electronics</option>
          <option value='fashion'>fashion</option>
          <option value='mobiles'>mobiles</option>
        </select>
      </div>
      <div className='col-md-2'>
        <button
          className='btn btn-dark w-100'
          onClick={() => dispatch(filterProducts(searchKey, sortKey, category))}
        >
          Filter
        </button>
      </div>
    </div>
  );
}

export default Filter
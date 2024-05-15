import React from 'react';

type Props = {
  value: React.SelectHTMLAttributes<HTMLSelectElement>['value'];
  onChange: React.SelectHTMLAttributes<HTMLSelectElement>['onChange'];
};

function Sort({ value, onChange }: Props) {
  return (
    <form className='w-full max-w-32'>
      <label htmlFor='sort' className='sr-only'>
        Underline select
      </label>
      <select
        name='sort'
        id='sort'
        value={value}
        onChange={onChange}
        className='block p-1.5 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer cursor-pointer'
      >
        <option value='' disabled>
          Sort
        </option>
        <option value='asc'>Ascending</option>
        <option value='desc'>Descending</option>
        <option value='newest'>Newest</option>
        <option value='oldest'>Oldest</option>
        <option value='priceHighest'>Price Highest</option>
        <option value='priceLowest'>Price Lowest</option>
      </select>
    </form>
  );
}

export default Sort;

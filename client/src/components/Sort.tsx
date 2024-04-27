type Props = {};

function Sort({}: Props) {
  return (
    <form className='w-full max-w-32'>
      <label htmlFor='underline_select' className='sr-only'>
        Underline select
      </label>
      <select
        name='underline_select'
        id='underline_select'
        value='default'
        onChange={() => console.log('sort')}
        className='block p-1.5 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer cursor-pointer'
      >
        <option value='default' disabled>
          Sort
        </option>
        <option value='newest'>New Tours</option>
        <option value='price-highest'>Price Highest</option>
        <option value='price-lowest'>Price Lowest</option>
        <option value='a-z'>A-Z</option>
        <option value='z-a'>Z-A</option>
      </select>
    </form>
  );
}

export default Sort;

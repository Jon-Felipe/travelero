import { BsSearch } from 'react-icons/bs';

type Props = {};

function Search({}: Props) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className='flex items-center border px-4 py-2 rounded-full w-full'
    >
      <BsSearch className='w-6 h-6' />
      <input
        type='text'
        className='w-full outline-none ml-4'
        placeholder='Find places and things to do'
      />
      <button
        type='submit'
        className='bg-blue-500 text-white px-4 py-2 rounded-full font-semibold'
      >
        Search
      </button>
    </form>
  );
}

export default Search;

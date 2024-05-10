import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { useGetToursQuery } from '../slices/tourSlice';

// components
import Spinner from '../components/Spinner';
import TourCard from '../components/TourCard';
import Sort from '../components/Sort';
import FormRow from '../components/FormRow';
import { durationList } from '../utils/constants';
import FormRowSelect from '../components/FormRowSelect';

type Props = {};

function Tours({}: Props) {
  const { data, isLoading } = useGetToursQuery();

  if (isLoading) {
    return (
      <div className='mt-20'>
        <Spinner />;
      </div>
    );
  }

  return (
    <div className='grid md:grid-cols-[300px_1fr] md:gap-x-8 p-4 max-w-screen-2xl mx-auto mt-12'>
      <section className='hidden md:block'>
        <div className='border rounded p-6'>
          <div className='flex items-center gap-x-4 mb-8'>
            <BsSearch className='w-5 h-5' />
            <h3 className='font-bold text-lg text-blue-500'>Tour Search</h3>
          </div>
          {/* search filter */}
          <div className='mb-4'>
            <FormRow
              type='text'
              label='Search Tours'
              name='search'
              value=''
              placeholder='Search'
              onChange={() => console.log('search')}
            />
          </div>
          {/* duration filter */}
          <div className='mb-4'>
            <FormRowSelect
              label='Duration'
              name='duration'
              listItems={durationList}
              onChange={() => console.log('duration')}
            />
          </div>
          {/* min/max price filter */}
          <div className='flex items-center gap-x-4 mb-4'>
            <div className='w-full'>
              <FormRow
                type='number'
                label='Min Price'
                name='priceMin'
                value=''
                placeholder='0'
                onChange={() => console.log('min price')}
              />
            </div>
            <div className='w-full'>
              <FormRow
                type='number'
                label='Max Price'
                name='priceMax'
                value=''
                placeholder='1000'
                onChange={() => console.log('max price')}
              />
            </div>
          </div>
          <button type='button' className='text-blue-500 text-sm font-medium'>
            x Clear Filter
          </button>
        </div>
      </section>
      <section>
        <div className='flex items-center justify-between mb-10'>
          <h5 className='font-light text-base text-gray-500'>
            {data?.tours.length} tours found
          </h5>
          <Sort />
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-x-6'>
          {data?.tours?.map((tour) => {
            return (
              <Link key={tour._id} to={`/tours/${tour._id}`}>
                <TourCard tour={tour} />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Tours;

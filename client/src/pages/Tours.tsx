import { Link } from 'react-router-dom';
import {
  BsSearch,
  BsGrid3X3GapFill,
  BsListUl,
  BsSliders,
} from 'react-icons/bs';
import { useGetToursQuery } from '../slices/tourSlice';

// components
import Spinner from '../components/Spinner';
import TourCard from '../components/TourCard';
import Sort from '../components/Sort';
import FormRow from '../components/FormRow';
import FormRowSelect from '../components/FormRowSelect';
import CheckboxList from '../components/CheckboxList';

// extras
import {
  durationList,
  tourActivityItems,
  tourAgeItems,
  tourTopLocationItems,
} from '../utils/constants';

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
      {/* filter section */}
      <section className='hidden md:block'>
        <article className='border rounded-t p-6'>
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
        </article>
        <article className='border rounded-b p-6'>
          <div className='flex items-center gap-x-4 mb-8'>
            <BsSliders className='w-5 h-5' />
            <h3 className='font-bold text-lg text-blue-500'>Type Filter</h3>
          </div>
          {/* tour age filter */}
          <CheckboxList
            label='Tour Age'
            name='tourAge'
            listItems={tourAgeItems}
          />
          {/* activity filter */}
          <CheckboxList
            label='Activity'
            name='activity'
            listItems={tourActivityItems}
          />
          {/* destination filter */}
          <CheckboxList
            label='Destination'
            name='destination'
            listItems={tourTopLocationItems}
          />
          <button className='w-full bg-blue-500 text-white font-semibold p-2 rounded'>
            Search
          </button>
        </article>
      </section>
      <section>
        <h5 className='font-bold text-base text-gray-500'>
          {data?.tours.length} tours found
        </h5>
        <div className='border rounded p-4 flex items-center justify-between my-5'>
          <div className='flex items-center gap-x-6 w-96'>
            <h5 className='font-semibold text-sm'>Sort by</h5>
            <Sort />
          </div>
          <div className='flex items-center gap-x-4'>
            <button>
              <BsListUl className='w-5 h-5' />
            </button>
            <button>
              <BsGrid3X3GapFill className='w-5 h-5' />
            </button>
          </div>
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

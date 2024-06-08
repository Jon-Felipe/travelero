import { Link } from 'react-router-dom';

import { topDestinations } from '../utils/constants';

type Props = {};

function TopDestinations({}: Props) {
  return (
    <section className='mt-10'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl md:text-3xl font-bold'>Top Destinations</h2>
        <Link to='/tours' className='font-semibold text-xl'>
          Browse Tours
        </Link>
      </div>
      <div className='grid gap-y-4 md:grid-cols-3 md:grid-rows-2 md:gap-x-4 lg:grid-cols-5 mt-4'>
        {topDestinations.map((destination) => {
          return (
            <div
              key={destination.id}
              className='relative w-full max-h-[150px] rounded overflow-hidden'
            >
              <img
                src={destination.image}
                alt={destination.text}
                className='w-full h-full object-cover brightness-75'
              />
              <div className='absolute flex items-center justify-center w-full h-full top-0'>
                <p className='text-xl font-bold text-white capitalize'>
                  {destination.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TopDestinations;

import { Link } from 'react-router-dom';

// components
import TourCard from '../TourCard';

// extras
import { dummy_tours } from '../../utils/constants';

type Props = {};

function TopTours({}: Props) {
  return (
    <section className='mt-10'>
      <div className='flex items-center justify-between'>
        <h2 className='text-2xl md:text-3xl font-bold'>
          Unforgettable experiences around the world
        </h2>
        <Link to='/tours' className='font-semibold text-xl'>
          Browse Tours
        </Link>
      </div>
      <div className='grid grid-cols-2 gap-4 xl:grid-cols-4 mt-4'>
        {dummy_tours.map((tour) => (
          <TourCard key={tour._id} tour={tour} />
        ))}
      </div>
    </section>
  );
}

export default TopTours;

// components
import TourCard from './TourCard';

// extras
import { dummy_tours } from '../utils/constants';

type Props = {};

function FeaturedTrips({}: Props) {
  return (
    <section className='bg-slate-50 py-20 px-4 xl:px-0'>
      <h2 className='text-center text-4xl font-bold'>
        Get inspired for your next trip
      </h2>
      <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-y-4 md:gap-x-4 mt-8'>
        {dummy_tours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedTrips;

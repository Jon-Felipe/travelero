import { Link } from 'react-router-dom';

// components
import TourCard from './TourCard';

// extras
import { Tour } from '../utils/types';

type Props = {
  tours: Tour[] | undefined;
};

function TourGridView({ tours }: Props) {
  return (
    <>
      {tours?.length === 0 ? (
        <div className='text-center mt-12'>
          <p>No tours available. Please check again later.</p>
        </div>
      ) : (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-x-6'>
          {tours?.map((tour) => {
            return (
              <Link key={tour._id} to={`/tours/${tour._id}`}>
                <TourCard tour={tour} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
}

export default TourGridView;

import { BsGeoAlt, BsClock, BsFillStarFill } from 'react-icons/bs';

// extras
import { Tour } from '../utils/types';

type Props = {
  tour: Tour;
};

function TourCard({ tour }: Props) {
  return (
    <article className='rounded-2xl overflow-hidden bg-white shadow'>
      <img
        src={tour.image}
        alt={tour.title}
        className='w-full h-[300px] object-cover'
      />
      <div className='p-5'>
        <p className='flex items-start gap-x-2 text-sm font-normal text-gray-400'>
          <span>
            <BsGeoAlt />
          </span>
          {tour.country}, {tour.countryCode}
        </p>
        <h3 className='text-lg font-bold mt-2 mb-4 capitalize truncate'>
          {tour.title}
        </h3>
        <div className='flex items-center gap-x-2 mb-4'>
          <p className='flex items-start gap-x-1 font-bold text-base'>
            <span>
              <BsFillStarFill className='text-orange-500 w-4 h-4' />
            </span>{' '}
            {tour.rating}
          </p>
          <p className='font-normal text-sm text-gray-400'>
            ({tour.reviews} Reviews)
          </p>
        </div>
        <hr />
        <div className='flex items-center justify-between mt-5'>
          <p className='text-base font-bold'>${tour.price}</p>
          <p className='flex items-center gap-x-2 text-sm font-normal text-gray-400'>
            <span>
              <BsClock />
            </span>
            {tour.duration} day(s)
          </p>
        </div>
      </div>
    </article>
  );
}

export default TourCard;

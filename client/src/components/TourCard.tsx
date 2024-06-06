import { BsFillStarFill } from 'react-icons/bs';

// extras
import { Tour } from '../utils/types';

type Props = {
  tour: Tour;
};

function TourCard({ tour }: Props) {
  return (
    <article className='grid grid-rows-[200px_250px] overflow-hidden rounded border'>
      <img
        src={tour.image}
        alt={tour.title}
        className='w-full h-full object-cover'
      />
      <div className='flex flex-col justify-between py-2 px-4'>
        <div>
          <p className='text-base capitalize font-medium text-slate-600'>
            {tour.tourType}
          </p>
          <h3 className='text-base font-bold mb-4 capitalize mt-1'>
            {tour.city}: {tour.title}
          </h3>
        </div>
        <div>
          <div className='flex items-center gap-x-2 mb-1'>
            <p className='flex items-center gap-x-1 font-medium text-sm'>
              <BsFillStarFill className='text-yellow-400 w-4 h-4' />
              {tour.rating}
            </p>
            <p className='font-normal text-xs text-gray-600'>(69 Review(s))</p>
          </div>
          <p className='text-sm font-medium'>
            From ${tour.price?.toFixed(2)}{' '}
            <span className='text-xs'>per person</span>
          </p>
        </div>
      </div>
    </article>
  );
}

export default TourCard;

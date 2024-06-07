// extras
import { Tour } from '../utils/types';
import Rating from './Rating';

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
          <h3 className='text-base font-bold capitalize mt-1 mb-2'>
            {tour.location.city}: {tour.title}
          </h3>
          <p className='text-sm font-medium'>{tour.duration / 60} Hours</p>
        </div>
        <div>
          <div className='flex items-center gap-x-2 mb-1'>
            <Rating value={tour.rating!} />
            <p className='gap-x-1 font-medium text-sm'>{tour.rating}</p>
            <p className='font-normal text-xs text-gray-600'>
              ({tour.numOfReviews} Review(s))
            </p>
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

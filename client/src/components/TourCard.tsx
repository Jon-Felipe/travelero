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
        <p className='text-sm font-normal text-gray-400'>
          {tour.country}, {tour.countryCode}
        </p>
        <h3 className='text-lg font-bold mt-2 mb-4 capitalize'>{tour.title}</h3>
      </div>
    </article>
  );
}

export default TourCard;

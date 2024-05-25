import { BsGeoAlt, BsClock, BsStarFill } from 'react-icons/bs';
import { FaShoePrints } from 'react-icons/fa';

// extras
import { Tour } from '../utils/types';

type Props = {
  tours: Tour[] | undefined;
};

function TourListView({ tours }: Props) {
  return (
    <div className='flex flex-col gap-y-6'>
      {tours?.map((tour) => {
        return (
          <article
            key={tour._id}
            className='grid grid-cols-[400px_1fr] rounded-xl overflow-hidden border shadow-md'
          >
            <img
              src={tour.image}
              alt={tour.title}
              className='w-full h-[250px] object-cover'
            />
            <div className='flex gap-x-4 p-8'>
              <div className='basis-2/3'>
                <div className='flex items-center gap-x-1 mb-2'>
                  <BsGeoAlt className='w-3 h-3 text-slate-500' />
                  <p className='text-xs text-slate-500'>{tour.city}</p>
                </div>
                <h3 className='font-semibold text-lg'>{tour.title}</h3>
                <div className='flex items-center gap-x-2 my-4'>
                  <BsStarFill className='w-4 h-4 text-orange-500' />
                  <p className='font-bold'>4</p>
                  <p className='text-xs text-slate-500'>(2 Reviews)</p>
                </div>
                <p className='line-clamp-3'>{tour.description}</p>
              </div>
              <div className='basis-1/3 border-l flex flex-col items-center justify-between'>
                <div className='flex flex-col items-center gap-y-2'>
                  <div className='flex items-center gap-x-1'>
                    <BsClock className='w-3 h-3 text-slate-500' />
                    <p className='text-sm text-slate-500'>{tour.duration}</p>
                  </div>
                  <div className='flex items-center gap-x-1'>
                    <FaShoePrints className='w-3 h-3 text-slate-500' />
                    <p className='text-sm text-slate-500 capitalize'>
                      {tour.tourType}
                    </p>
                  </div>
                </div>
                <div className='flex flex-col gap-y-2'>
                  <p className='text-center text-sm text-slate-500'>
                    From{' '}
                    <span className='font-semibold text-base text-black ml-1'>
                      ${tour.price}
                    </span>
                  </p>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded-full'>
                    View details
                  </button>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default TourListView;

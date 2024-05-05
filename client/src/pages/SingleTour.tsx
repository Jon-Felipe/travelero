import { useParams } from 'react-router-dom';
import { BsClock, BsPeople, BsTranslate } from 'react-icons/bs';
import { FaShoePrints } from 'react-icons/fa';
import { useGetSingleTourQuery } from '../slices/tourSlice';

// components
import Spinner from '../components/Spinner';
import Rating from '../components/Rating';

type Props = {};

function SingleTour({}: Props) {
  const params = useParams();
  const { isLoading, data } = useGetSingleTourQuery(params.id!);

  if (isLoading) {
    return (
      <div className='mt-20'>
        <Spinner />;
      </div>
    );
  }

  return (
    <div className='px-6 py-14 max-w-screen-2xl mx-auto'>
      <h1 className='text-4xl font-medium mb-4 capitalize'>
        {data?.tour.title}
      </h1>
      <div className='flex items-center gap-x-4 mb-8'>
        <Rating value={5} />
        <p>(69 Reviews)</p>
      </div>
      <img
        src={`.${data?.tour.image}`}
        alt={data?.tour.title}
        className='rounded-2xl w-full max-h-[450px] object-cover'
      />
      <div className='grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-0 gap-4 md:gap-y-0 mt-10'>
        {/* duration */}
        <div className='flex items-center'>
          <div className='flex items-center justify-center border border-slate-200 rounded-xl p-3 w-12 h-12 mr-4'>
            <BsClock className='w-5 h-5' />
          </div>
          <div>
            <h4 className='text-base font-bold capitalize'>Duration</h4>
            <p className='text-sm font-normal text-slate-500 capitalize'>
              {data?.tour.duration}
            </p>
          </div>
        </div>
        {/* tour type */}
        <div className='flex items-center'>
          <div className='flex items-center justify-center border border-slate-200 rounded-xl p-3 w-12 h-12 mr-4'>
            <FaShoePrints className='w-5 h-5' />
          </div>
          <div>
            <h4 className='text-base font-bold capitalize'>Tour Type</h4>
            <p className='text-sm font-normal text-slate-500 capitalize'>
              {data?.tour.tourType}
            </p>
          </div>
        </div>
        {/* group size */}
        <div className='flex items-center'>
          <div className='flex items-center justify-center border border-slate-200 rounded-xl p-3 w-12 h-12 mr-4'>
            <BsPeople className='w-5 h-5' />
          </div>
          <div>
            <h4 className='text-base font-bold capitalize'>Group Size</h4>
            <p className='text-sm font-normal text-slate-500 capitalize'>
              {data?.tour.groupSize}
            </p>
          </div>
        </div>
        {/* languages */}
        <div className='flex items-center'>
          <div className='flex items-center justify-center border border-slate-200 rounded-xl p-3 w-12 h-12 mr-4'>
            <BsTranslate className='w-5 h-5' />
          </div>
          <div>
            <h4 className='text-base font-bold capitalize'>Languages</h4>
            <p className='text-sm font-normal text-slate-500 capitalize'>
              {data?.tour.languages.slice(0, 2).toString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleTour;

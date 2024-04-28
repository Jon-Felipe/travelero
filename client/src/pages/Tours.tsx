import { Link } from 'react-router-dom';
import { BsCaretDownFill } from 'react-icons/bs';
import { useGetToursQuery } from '../slices/tourSlice';

// components
import Spinner from '../components/Spinner';
import TourCard from '../components/TourCard';
import Sort from '../components/Sort';
import Checkbox from '../components/Checkbox';
import { tourCategories, tourLanguages } from '../utils/constants';
import Rating from '../components/Rating';

type Props = {};

function Tours({}: Props) {
  const { data, isLoading } = useGetToursQuery();

  if (isLoading) {
    return (
      <div className='mt-20'>
        <Spinner />;
      </div>
    );
  }

  return (
    <div className='grid md:grid-cols-[300px_1fr] md:gap-x-8 p-4 max-w-screen-2xl mx-auto mt-12'>
      <section className='hidden md:block'>
        {/* review score filter */}
        <article className='bg-slate-50 p-4 rounded-2xl shadow-sm'>
          <div className='flex items-center justify-between'>
            <h3 className='text-xl font-medium'>Review Score</h3>
            <BsCaretDownFill />
          </div>
          <div className='mt-4'>
            <Rating value={5} />
            <Rating value={4} />
            <Rating value={3} />
            <Rating value={2} />
            <Rating value={1} />
          </div>
        </article>
        <br />
        {/* category filter */}
        <article className='bg-slate-50 p-4 rounded-2xl shadow-sm'>
          <div className='flex items-center justify-between'>
            <h3 className='text-xl font-medium'>Categories</h3>
            <BsCaretDownFill />
          </div>
          <div className='mt-4'>
            {tourCategories.map((category) => {
              return <Checkbox key={category.id} label={category.text} />;
            })}
          </div>
        </article>
        <br />
        {/* languages filter */}
        <article className='bg-slate-50 p-4 rounded-2xl shadow-sm'>
          <div className='flex items-center justify-between'>
            <h3 className='text-xl font-medium'>Languages</h3>
            <BsCaretDownFill />
          </div>
          <div className='mt-4'>
            {tourLanguages.map((language) => {
              return <Checkbox key={language.id} label={language.text} />;
            })}
          </div>
        </article>
      </section>
      <section>
        <div className='flex items-center justify-between mb-10'>
          <h5 className='font-light text-base text-gray-500'>
            {data?.tours.length} tours found
          </h5>
          <Sort />
        </div>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-x-6'>
          {data?.tours?.map((tour) => {
            return (
              <Link key={tour._id} to={`/tours/${tour._id}`}>
                <TourCard tour={tour} />
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Tours;

import React from 'react';
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
      <section>
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
      </section>
      <section>
        <article className='grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-0 gap-4 md:gap-y-0 mt-10'>
          {/* duration */}
          <TourFeature
            icon={<BsClock className='w-5 h-5' />}
            title='Duration'
            text={data?.tour.duration!}
          />
          {/* tour type */}
          <TourFeature
            icon={<FaShoePrints className='w-5 h-5' />}
            title='Tour Type'
            text={data?.tour.tourType!}
          />
          {/* group size */}
          <TourFeature
            icon={<BsPeople className='w-5 h-5' />}
            title='Group Size'
            text={data?.tour.groupSize!}
          />
          {/* languages */}
          <TourFeature
            icon={<BsTranslate className='w-5 h-5' />}
            title='Languages'
            text={data?.tour.languages.join(', ')!}
          />
        </article>
        <hr />
      </section>
    </div>
  );
}

export default SingleTour;

type FeatureProps = {
  icon: React.ReactElement;
  title: string;
  text: string | number;
};

function TourFeature({ icon, title, text }: FeatureProps) {
  return (
    <div className='flex items-center'>
      <div className='flex items-center justify-center border border-slate-200 rounded-xl p-3 w-12 h-12 mr-4'>
        {icon}
      </div>
      <div>
        <h4 className='text-base font-bold capitalize'>{title}</h4>
        <p className='text-sm font-normal text-slate-500 capitalize'>{text}</p>
      </div>
    </div>
  );
}

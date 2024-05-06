import React from 'react';
import { useParams } from 'react-router-dom';
import {
  BsClock,
  BsPeople,
  BsTranslate,
  BsCheckCircleFill,
  BsFillXCircleFill,
} from 'react-icons/bs';
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
      {/* tour header */}
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
      {/* tour body */}
      <section>
        {/* tour features */}
        <article className='grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 gap-4 md:gap-y-0 mt-10'>
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
        <hr className='my-10' />
        {/* tour description */}
        <article className='mb-5'>
          <h2 className='font-bold text-2xl mb-5'>About this tour</h2>
          <p>{data?.tour.description}</p>
        </article>
        {/* tour highlights */}
        {data?.tour.highlights && (
          <article>
            <h2 className='font-bold text-2xl mb-5'>Highlights</h2>
            <ul>
              {data?.tour.highlights.map((highlight, index) => {
                return (
                  <div key={index} className='flex items-center gap-x-4 mb-4'>
                    <BsCheckCircleFill className='w-5 h-5 text-green-400' />
                    <li className='text-base font-normal text-slate-500'>
                      {highlight}
                    </li>
                  </div>
                );
              })}
            </ul>
          </article>
        )}
        <hr className='my-10' />
        {/* included/excluded */}
        {data?.tour.included && data?.tour.excluded && (
          <article>
            <h2 className='font-bold text-2xl mb-5'>Included/Excluded</h2>
            <div className='block md:flex md:items-center md:gap-x-16'>
              <ul>
                {data?.tour.included.map((item, index) => {
                  return (
                    <div key={index} className='flex items-center gap-x-4 mb-4'>
                      <BsCheckCircleFill className='w-5 h-5 text-green-400' />
                      <li className='text-base font-normal text-slate-500'>
                        {item}
                      </li>
                    </div>
                  );
                })}
              </ul>
              <ul>
                {data?.tour.excluded.map((item, index) => {
                  return (
                    <div key={index} className='flex items-center gap-x-4 mb-4'>
                      <BsFillXCircleFill className='w-5 h-5 text-red-400' />
                      <li className='text-base font-normal text-slate-500'>
                        {item}
                      </li>
                    </div>
                  );
                })}
              </ul>
            </div>
          </article>
        )}
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

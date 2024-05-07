import React, { useState } from 'react';
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
import InquiryForm from '../components/singletour/InquiryForm';

function SingleTour() {
  const [isBookingActive, setIsBookingActive] = useState<boolean>(true);
  const [isInquiryActive, setIsInquiryActive] = useState<boolean>(false);

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
        <div className='flex items-center gap-x-2 mb-8'>
          <Rating value={5} />
          <p className='text-slate-600'>(69 Reviews)</p>
          <div className='inline-block h-1 w-1 bg-slate-600 rounded-full mx-1'></div>
          <p className='text-slate-600'>
            {data?.tour.city}, {data?.tour.country}
          </p>
        </div>
        <img
          src={`.${data?.tour.image}`}
          alt={data?.tour.title}
          className='rounded-2xl w-full max-h-[450px] object-cover'
        />
      </section>
      <div className='grid lg:grid-cols-[1fr_300px] lg:gap-x-6 xl:gap-x-10 xl:grid-cols-[1fr_400px] mt-10'>
        {/* tour body */}
        <section>
          {/* tour features */}
          <section className='grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-1 gap-4 md:gap-y-0'>
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
          </section>
          <hr className='my-10' />
          {/* tour description */}
          <article className='mb-5'>
            <h2 className='font-bold text-2xl mb-5'>About this tour</h2>
            <p>{data?.tour.description}</p>
          </article>
          {/* tour highlights */}
          {data?.tour.highlights && (
            <TourFeatureList
              title='Highlights'
              items={data?.tour.highlights}
              icon={<BsCheckCircleFill className='w-5 h-5 text-green-400' />}
            />
          )}
          <hr className='my-10' />
          {/* included/excluded */}
          {data?.tour.included && data?.tour.excluded && (
            <section>
              <div className='block md:flex md:items-center md:gap-x-16'>
                <TourFeatureList
                  title='Included/Excluded'
                  items={data?.tour.included}
                  icon={
                    <BsCheckCircleFill className='w-5 h-5 text-green-400' />
                  }
                />
                <TourFeatureList
                  items={data?.tour.excluded}
                  icon={<BsFillXCircleFill className='w-5 h-5 text-red-400' />}
                />
              </div>
            </section>
          )}
        </section>
        {/* tour booking section */}
        <section>
          <article className='border rounded-2xl p-4'>
            {/* price and rating */}
            <div className='flex items-center justify-between'>
              <p className='text-sm font-normal text-slate-500'>
                From:{' '}
                <span className='text-lg font-bold text-black ml-1'>
                  ${data?.tour.price?.toFixed(2)}
                </span>
              </p>
              <div className='flex items-center gap-x-2'>
                <Rating value={5} />
                <p className='text-slate-600'>(69 Reviews)</p>
              </div>
            </div>
            {/* book & inquiry buttons */}
            <div className='my-5 flex items-center justify-between gap-x-4'>
              <button
                name='book'
                className={`w-full ${
                  isBookingActive
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-200 text-black'
                } py-3 text-base font-medium rounded-full`}
                onClick={() => {
                  setIsBookingActive(true);
                  setIsInquiryActive(false);
                }}
              >
                Book
              </button>
              <button
                className={`w-full ${
                  isInquiryActive
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-200 text-black'
                } py-3 text-base font-medium rounded-full`}
                onClick={() => {
                  setIsBookingActive(false);
                  setIsInquiryActive(true);
                }}
              >
                Inquiry
              </button>
            </div>
            {/* inquiry form */}
            <InquiryForm />
          </article>
        </section>
      </div>
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
    <article className='flex items-center'>
      <div className='flex items-center justify-center border border-slate-200 rounded-xl p-3 w-12 h-12 mr-4'>
        {icon}
      </div>
      <div>
        <h4 className='text-base font-bold capitalize'>{title}</h4>
        <p className='text-sm font-normal text-slate-500 capitalize'>{text}</p>
      </div>
    </article>
  );
}

type FeatureListProp = {
  icon: React.ReactElement;
  title?: string;
  items: string[];
};

function TourFeatureList({ icon, title, items }: FeatureListProp) {
  return (
    <article>
      <h2 className='font-bold text-2xl mb-5'>{title}</h2>
      <ul>
        {items.map((item, index) => {
          return (
            <div key={index} className='flex items-center gap-x-4 mb-4'>
              {icon}
              <li className='text-base font-normal text-slate-500'>{item}</li>
            </div>
          );
        })}
      </ul>
    </article>
  );
}

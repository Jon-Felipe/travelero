import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BsClock, BsChatLeft } from 'react-icons/bs';
import { useGetSingleTourQuery } from '../slices/tourSlice';

// components
import Spinner from '../components/Spinner';
import Rating from '../components/Rating';
import GuestForm from '../components/singletour/GuestForm';
import InquiryForm from '../components/singletour/InquiryForm';

function SingleTour() {
  const [isBookingActive, setIsBookingActive] = useState<boolean>(true);
  const [isInquiryActive, setIsInquiryActive] = useState<boolean>(false);

  const params = useParams();
  const navigate = useNavigate();
  const { isLoading, data } = useGetSingleTourQuery(params.id!);

  if (isLoading) {
    return (
      <div className='mt-20'>
        <Spinner />;
      </div>
    );
  }

  return (
    <div className='p-8 max-w-screen-xl mx-auto'>
      {/* tour header */}
      <section className='flex items-center justify-between gap-x-6'>
        <div>
          <h3 className='text-lg md:text-2xl font-semibold capitalize max-w-xl lg:max-w-3xl'>
            {data?.tour.title}
          </h3>
          <div className='flex flex-col md:flex-row md:items-center mb-8'>
            <div className='flex items-center gap-x-2'>
              <Rating value={5} />
              <p className='text-xs md:text-base capitalize'>69 Reviews</p>
            </div>
            <div className='hidden md:inline-block mx-1'>|</div>
            <p className='text-sm md:text-base text-slate-600 capitalize'>
              {data?.tour.location.city}, {data?.tour.location.country}
            </p>
          </div>
        </div>
        <button
          onClick={() => navigate(-1)}
          className='border md:border-2 border-blue-500 text-blue-500 text-xs md:text-base font-bold py-1 md:py-2 px-2 md:px-4 rounded-lg min-w-16'
        >
          Go Back
        </button>
      </section>
      <div className='grid lg:grid-cols-[1fr_400px] gap-y-4 lg:gap-y-0 lg:gap-x-4'>
        {/* tour gallery */}
        <section>
          <img
            src={`.${data?.tour.image}`}
            alt={data?.tour.title}
            className='rounded-2xl w-full max-h-[450px] object-cover'
          />
          <div className='mt-4'>
            <hr />
            <div className='flex items-center gap-x-4 md:gap-x-6 my-6'>
              {data?.tour.durations.map((item, index) => {
                return (
                  <div key={index} className='flex items-center gap-x-2'>
                    <BsClock />
                    <p className='text-sm md:text-base'>
                      {item.duration} {item.unit} (approx.)
                    </p>
                  </div>
                );
              })}
              <div className='flex items-center gap-x-2'>
                <BsChatLeft />
                <p className='text-sm md:text-base'>
                  Offered in: {data?.tour.availableLanguages.join(', ')}
                </p>
              </div>
            </div>
            <hr />
          </div>
        </section>
        {/* tour form */}
        <section>
          <article className='border rounded-2xl p-4 shadow'>
            {/* price */}
            <p className='text-lg font-semibold'>
              From: ${data?.tour.price?.toFixed(2)}
            </p>
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
            {isBookingActive ? (
              <GuestForm tour={data?.tour} />
            ) : (
              isInquiryActive && <InquiryForm />
            )}
          </article>
        </section>
      </div>
      {/* tour body */}
      <section className='max-w-screen-md'>
        <h3 className='text-xl md:text-3xl font-semibold mb-4'>Overview</h3>
        <p className='text-sm md:text-base'>{data?.tour.description}</p>
      </section>
    </div>
  );
}

export default SingleTour;

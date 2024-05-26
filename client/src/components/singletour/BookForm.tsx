import { useState } from 'react';
import { BsPlusCircle, BsDashCircle } from 'react-icons/bs';

type BookingForm = {
  date: string;
  adults: number;
  children: number;
  infants: number;
};

const initialBookingForm: BookingForm = {
  date: '',
  adults: 0,
  children: 0,
  infants: 0,
};

function BookForm() {
  const [bookingForm, setBookingForm] =
    useState<BookingForm>(initialBookingForm);

  return (
    <form>
      <div className='border rounded-xl'>
        <div className='p-4'>
          <label htmlFor='date' className='block font-medium'>
            Date
          </label>
          <input type='date' className='text-slate-400' />
        </div>
        <hr />
        {/* adults input */}
        <div className='p-4 flex items-center justify-between'>
          <div>
            <label htmlFor='date' className='block font-medium'>
              Adults
            </label>
            <p>Over 18+</p>
          </div>
          <div className='flex items-center justify-between gap-x-4'>
            <button>
              <BsDashCircle className='w-6 h-6' />
            </button>
            <p>{bookingForm.adults}</p>
            <button>
              <BsPlusCircle className='w-6 h-6' />
            </button>
          </div>
        </div>
        <hr />
        {/* children input */}
        <div className='p-4 flex items-center justify-between'>
          <div>
            <label htmlFor='date' className='block font-medium'>
              Children
            </label>
            <p>Under 12</p>
          </div>
          <div className='flex items-center justify-between gap-x-4'>
            <button>
              <BsDashCircle className='w-6 h-6' />
            </button>
            <p>{bookingForm.children}</p>
            <button>
              <BsPlusCircle className='w-6 h-6' />
            </button>
          </div>
        </div>
        <hr />
        {/* infant input */}
        <div className='p-4 flex items-center justify-between'>
          <div>
            <label htmlFor='date' className='block font-medium'>
              Infant
            </label>
            <p>Under 3</p>
          </div>
          <div className='flex items-center justify-between gap-x-4'>
            <button>
              <BsDashCircle className='w-6 h-6' />
            </button>
            <p>{bookingForm.infants}</p>
            <button>
              <BsPlusCircle className='w-6 h-6' />
            </button>
          </div>
        </div>
      </div>
      {/* total */}
      <div className='p-4 flex items-center justify-between'>
        <h5 className='text-lg font-bold'>Total</h5>
        <p className='text-lg font-bold'>$250.00</p>
      </div>
      <div className='w-11/12 mx-auto'>
        <button className='w-full bg-blue-500 text-white py-3 text-base font-medium rounded-full'>
          Book now
        </button>
      </div>
    </form>
  );
}

export default BookForm;

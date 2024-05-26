import { useState } from 'react';
import { BsPlusCircle, BsDashCircle } from 'react-icons/bs';

type GuestForm = {
  date: string;
  adults: number;
  children: number;
  infants: number;
};

const initialGuestDetails: GuestForm = {
  date: '',
  adults: 0,
  children: 0,
  infants: 0,
};

function BookForm() {
  const [guestForm, setGuestForm] = useState<GuestForm>(initialGuestDetails);

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
        <GuestPicker
          label='Adults'
          subLabel='Over 18+'
          amountOfGuests={guestForm.adults}
        />
        <hr />
        {/* children input */}
        <GuestPicker
          label='Children'
          subLabel='Under 12'
          amountOfGuests={guestForm.children}
        />
        <hr />
        {/* infant input */}
        <GuestPicker
          label='Infants'
          subLabel='Under 3'
          amountOfGuests={guestForm.infants}
        />
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

type GuestPickerProps = {
  label: string;
  subLabel: string;
  amountOfGuests: number;
};

function GuestPicker({ label, subLabel, amountOfGuests }: GuestPickerProps) {
  return (
    <div className='p-4 flex items-center justify-between'>
      <div>
        <label htmlFor='date' className='block font-medium'>
          {label}
        </label>
        <p>{subLabel}</p>
      </div>
      <div className='flex items-center justify-between gap-x-4'>
        <button>
          <BsDashCircle className='w-6 h-6' />
        </button>
        <p>{amountOfGuests}</p>
        <button>
          <BsPlusCircle className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
}

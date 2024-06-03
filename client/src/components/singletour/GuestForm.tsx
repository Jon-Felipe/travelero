import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsPlusCircle, BsDashCircle } from 'react-icons/bs';
import { useAppDispatch } from '../../hooks/hooks';
import { addToCart } from '../../slices/cartSlice';
import { Tour } from '../../utils/types';

type GuestForm = {
  date: string;
  guests: {
    adults: number;
    children: number;
    infants: number;
  };
};

const initialGuestDetails: GuestForm = {
  date: '',
  guests: {
    adults: 0,
    children: 0,
    infants: 0,
  },
};

type Props = {
  tour: Tour | undefined;
};

function GuestForm({ tour }: Props) {
  const [guestForm, setGuestForm] = useState<GuestForm>(initialGuestDetails);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleDecreaseClick(guest: string) {
    setGuestForm((prevState) => {
      return {
        ...prevState,
        guests: {
          ...prevState.guests,
          [guest]:
            prevState.guests[guest as keyof typeof GuestForm] === 0
              ? 0
              : prevState.guests[guest as keyof typeof GuestForm] - 1,
        },
      };
    });
  }
  function handleIncreaseClick(guest: string) {
    console.log(guest, 'guest');
    setGuestForm((prevState) => {
      return {
        ...prevState,
        guests: {
          ...prevState.guests,
          [guest]: prevState.guests[guest as keyof typeof GuestForm] + 1,
        },
      };
    });
  }

  function handleAddToCart() {
    const cart = {
      tour: {
        title: tour?.title,
        image: tour?.image,
        price: tour?.price,
        rating: 4,
        reviews: 69,
      },
      date: guestForm.date,
      guests: guestForm.guests,
    };
    dispatch(addToCart({ cart }));
    navigate('/cart');
  }

  return (
    <form>
      <div className='border rounded-xl'>
        <div className='p-4'>
          <label htmlFor='date' className='block font-medium'>
            Date
          </label>
          <input
            type='date'
            className='text-slate-400'
            value={guestForm.date}
            onChange={(e) =>
              setGuestForm((prevState) => {
                return { ...prevState, date: e.target.value };
              })
            }
          />
        </div>
        <hr />
        {/* adults input */}
        <GuestPicker
          label='Adults'
          subLabel='Over 18+'
          amountOfGuests={guestForm.guests.adults}
          onClickDecrease={() => handleDecreaseClick('adults')}
          onClickIncrease={() => handleIncreaseClick('adults')}
        />
        <hr />
        {/* children input */}
        <GuestPicker
          label='Children'
          subLabel='Under 12'
          amountOfGuests={guestForm.guests.children}
          onClickDecrease={() => handleDecreaseClick('children')}
          onClickIncrease={() => handleIncreaseClick('children')}
        />
        <hr />
        {/* infant input */}
        <GuestPicker
          label='Infants'
          subLabel='Under 3'
          amountOfGuests={guestForm.guests.infants}
          onClickDecrease={() => handleDecreaseClick('infants')}
          onClickIncrease={() => handleIncreaseClick('infants')}
        />
      </div>
      {/* total */}
      <div className='p-4 flex items-center justify-between'>
        <h5 className='text-lg font-bold'>Total</h5>
        <p className='text-lg font-bold'>$250.00</p>
      </div>
      <div className='w-11/12 mx-auto'>
        <button
          type='button'
          className='w-full bg-blue-500 text-white py-3 text-base font-medium rounded-full'
          onClick={handleAddToCart}
        >
          Book now
        </button>
      </div>
    </form>
  );
}

export default GuestForm;

type GuestPickerProps = {
  label: string;
  subLabel: string;
  amountOfGuests: number;
  onClickDecrease: React.MouseEventHandler<HTMLButtonElement>;
  onClickIncrease: React.MouseEventHandler<HTMLButtonElement>;
};

function GuestPicker({
  label,
  subLabel,
  amountOfGuests,
  onClickDecrease,
  onClickIncrease,
}: GuestPickerProps) {
  return (
    <div className='p-4 flex items-center justify-between'>
      <div>
        <label htmlFor='date' className='block font-medium'>
          {label}
        </label>
        <p>{subLabel}</p>
      </div>
      <div className='flex items-center justify-between gap-x-4'>
        <button type='button' onClick={onClickDecrease}>
          <BsDashCircle className='w-6 h-6' />
        </button>
        <p>{amountOfGuests}</p>
        <button type='button' onClick={onClickIncrease}>
          <BsPlusCircle className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
}

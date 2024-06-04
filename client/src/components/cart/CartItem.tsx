import { BsClock, BsPeople, BsPencil, BsTrash } from 'react-icons/bs';

// components
import Rating from '../Rating';

// extras
import { useAppDispatch } from '../../hooks/hooks';
import { removeFromCart } from '../../slices/cartSlice';
import { Cart } from '../../utils/types';

type Props = {
  cartItem: Partial<Cart>;
};

function CartItem({ cartItem: { tour, date, guests } }: Props) {
  const dispatch = useAppDispatch();

  return (
    <article className='border rounded-xl p-4 mb-4'>
      <div className='flex gap-x-4'>
        <img
          src={tour?.image}
          alt={tour?.title}
          className='w-24 h-24 object-cover rounded-xl'
        />
        {/* cart item info */}
        <div>
          <h6 className='font-semibold'>{tour?.title}</h6>
          {/* cart item details */}
          <div className='flex items-center gap-x-2 mb-2'>
            <Rating value={tour?.rating!} />
            <p className='text-sm'>{tour?.rating}</p>
            <p className='text-sm text-slate-500'>(69)</p>
          </div>
          {/* cart item user info */}
          <div className='space-y-1'>
            <div className='flex items-center gap-x-2'>
              <BsClock />
              <p>{date}</p>
            </div>
            <div className='flex items-center gap-x-2'>
              <BsPeople />
              <p>
                {guests?.adults ? guests.adults + ' Adults' : ''}
                {guests?.children ? ', ' + guests.children + ' Children' : ''}
                {guests?.infants ? ', ' + guests.infants + ' Infants' : ''}
              </p>
            </div>
          </div>
          {/* cart item action buttons */}
          <div className='flex items-center gap-x-2 mt-2'>
            <button className='flex items-center gap-x-2 bg-slate-200 py-2 px-4 rounded-2xl text-sm font-semibold shadow-sm'>
              <BsPencil /> Edit
            </button>
            <button
              className='p-3 bg-slate-200 rounded-full shadow-sm'
              onClick={() => dispatch(removeFromCart({ id: tour?._id! }))}
            >
              <BsTrash className='w-4 h-4' />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default CartItem;

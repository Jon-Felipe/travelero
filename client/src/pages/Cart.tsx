import { useAppSelector } from '../hooks/hooks';

// components
import CartItem from '../components/cart/CartItem';

type Props = {};

function Cart({}: Props) {
  const { cart } = useAppSelector((store) => store.cart);

  if (cart.length === 0) {
    return (
      <div className='text-center mt-20'>
        <p className='text-2xl font-semibold'>Your cart is empty</p>
      </div>
    );
  }

  return (
    <div className='max-w-screen-2xl mx-auto mt-8 p-6 grid lg:grid-cols-2 lg:gap-x-20'>
      {/* cart */}
      <section>
        {cart.map((cartItem, index) => {
          return <CartItem key={index} cartItem={cartItem} />;
        })}
      </section>
      {/* cart summary */}
      <section>cart summary</section>
    </div>
  );
}

export default Cart;

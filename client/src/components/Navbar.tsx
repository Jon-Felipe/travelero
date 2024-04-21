import { useState } from 'react';
import { BsBasket, BsPerson, BsX, BsList } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';

function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState<boolean>(false);

  const { user } = useAppSelector((store) => store.auth);

  return (
    <header className='h-20 flex items-center justify-between px-8 border-b border-b-slate-300'>
      <div>
        <h1 className='text-4xl font-bold'>Travelero</h1>
      </div>
      <div className='md:hidden'>
        <button type='button' onClick={() => setShowNavLinks(!showNavLinks)}>
          {showNavLinks ? (
            <BsList className='w-8 h-8' />
          ) : (
            <BsX className='w-10 h-10' />
          )}
        </button>
      </div>
      <nav className='hidden md:flex md:gap-x-10'>
        <a href='#' className='font-medium text-xl'>
          Home
        </a>
        <a href='#' className='font-medium text-xl'>
          About
        </a>
        <a href='#' className='font-medium text-xl'>
          Contact
        </a>
      </nav>
      <div className='hidden md:flex md:items-center md:gap-6'>
        {user.firstName ? (
          <div className='border rounded-full shadow p-3'>
            <BsPerson className='w-5 h-5' />
          </div>
        ) : (
          <div>
            <Link to='/login'>Login/Register</Link>
          </div>
        )}
        <div className='border rounded-full shadow p-3'>
          <BsBasket className='w-5 h-5' />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

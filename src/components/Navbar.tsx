import { useState } from 'react';
import { BsBasket, BsPerson, BsX, BsList } from 'react-icons/bs';

function Navbar() {
  const [showNavLinks, setShowNavLinks] = useState<boolean>(false);

  return (
    <header className='h-20 flex items-center justify-between px-8 border-b border-b-slate-300'>
      <div>
        <h1 className='text-4xl'>Travelero</h1>
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
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </nav>
      <div className='hidden md:flex md:gap-4'>
        <div className='border rounded-full shadow p-3'>
          <BsBasket className='w-5 h-5' />
        </div>
        <div className='border rounded-full shadow p-3'>
          <BsPerson className='w-5 h-5' />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

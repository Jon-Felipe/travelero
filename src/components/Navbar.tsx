import { BsBasket, BsPerson } from 'react-icons/bs';

function Navbar() {
  return (
    <header className='h-20 flex items-center justify-between px-8'>
      <div>
        <h1 className='text-4xl'>Travelero</h1>
      </div>
      <div className='md:hidden'>
        <p className='text-4xl'>x</p>
      </div>
      <nav className='hidden md:flex md:gap-x-5'>
        <a href='#'>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
      </nav>
      <div className='hidden md:flex md:gap-5'>
        <div className='border rounded-full shadow p-3'>
          <BsBasket className='w-6 h-6' />
        </div>
        <div className='border rounded-full shadow p-3'>
          <BsPerson className='w-6 h-6' />
        </div>
      </div>
    </header>
  );
}

export default Navbar;

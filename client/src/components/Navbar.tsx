// import { useState } from 'react';
import { BsPerson, BsCart2, BsHeart } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import { useAppSelector } from '../hooks/hooks';

// components
import Search from './Search';

function Navbar() {
  // const [showNavLinks, setShowNavLinks] = useState<boolean>(false);

  // const { user } = useAppSelector((store) => store.user);

  return (
    <header className='h-20 flex items-center justify-between px-8 max-w-screen-xl mx-auto'>
      <div className='lg:flex lg:items-center lg:gap-10 lg:w-full'>
        <h1 className='text-2xl md:text-4xl font-bold'>Travelero</h1>
        <div className='hidden lg:block w-full lg:max-w-md'>
          <Search />
        </div>
      </div>
      <div className='flex items-center gap-x-6 md:gap-x-8'>
        <NavbarLink
          icon={<BsHeart className='md:w-5 md:h-5' />}
          text='Wishlist'
        />
        <NavbarLink icon={<BsCart2 className='md:w-5 md:h-5' />} text='Cart' />
        <NavbarLink
          icon={<BsPerson className='md:w-5 md:h-5' />}
          text='Profile'
        />
      </div>
    </header>
  );
}

export default Navbar;

type NavbarLinkProp = {
  icon: React.ReactElement;
  text: string;
};

function NavbarLink({ icon, text }: NavbarLinkProp) {
  return (
    <div className='flex flex-col items-center'>
      {icon}
      <p className='text-sm md:text-base'>{text}</p>
    </div>
  );
}

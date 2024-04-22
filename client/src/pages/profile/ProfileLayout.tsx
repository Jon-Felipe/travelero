import { Link, Outlet } from 'react-router-dom';
import { BsBoxSeam, BsHeart, BsPerson, BsLock } from 'react-icons/bs';

const profileLinks = [
  {
    id: 1,
    text: 'Personal data',
    link: '',
    icon: <BsPerson className='w-6 h-6' />,
  },
  {
    id: 2,
    text: 'Favourites',
    link: 'favourites',
    icon: <BsHeart className='w-6 h-6' />,
  },
  {
    id: 3,
    text: 'My Tours',
    link: 'my-tours',
    icon: <BsBoxSeam className='w-6 h-6' />,
  },
  {
    id: 4,
    text: 'Change password',
    link: 'change-password',
    icon: <BsLock className='w-6 h-6' />,
  },
];

type Props = {};

function ProfileLayout({}: Props) {
  return (
    <div className='p-8 max-w-screen-xl mx-auto'>
      <h2 className='text-3xl font-bold'>My account</h2>
      <div className='grid mt-8 lg:grid-cols-[350px_1fr] lg:gap-x-4'>
        {/* profile links */}
        <section className='hidden lg:block shadow rounded p-8'>
          <h4 className='text-xl font-medium'>Welcome, John Doe</h4>
          <div className='mt-4'>
            {profileLinks.map((link) => {
              return (
                <Link key={link.id} to={link.link}>
                  <div className='flex items-center gap-x-4 px-4 py-6 border-b'>
                    <span>{link.icon}</span>
                    <p className='text-sm font-medium'>{link.text}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
        {/* profile pages */}
        <section className='shadow rounded p-4'>
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default ProfileLayout;

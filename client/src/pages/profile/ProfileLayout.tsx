import { Link, Outlet, useNavigate, Navigate } from 'react-router-dom';
import { BsArrowBarRight } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

// extras
import { profileLinks } from '../../utils/constants';
import { useLogoutMutation } from '../../slices/authSlice';
import { clearUser } from '../../slices/userSlice';

type Props = {};

function ProfileLayout({}: Props) {
  const [logout, { isLoading }] = useLogoutMutation();

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector((store) => store.user);

  if (!user) {
    return <Navigate to='/login' replace={true} />;
  }

  async function handleOnLogout() {
    try {
      await logout();
      dispatch(clearUser());
      navigate('/login');
    } catch (error) {}
  }

  return (
    <div className='p-8 max-w-screen-xl mx-auto'>
      <h2 className='text-3xl font-bold'>My account</h2>
      <div className='grid mt-8 lg:grid-cols-[350px_1fr] lg:gap-x-4'>
        {/* profile links */}
        <section className='hidden lg:block shadow rounded p-8'>
          <h4 className='text-xl font-medium'>
            Welcome, {user?.firstName} {user?.lastName}
          </h4>
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
            <button
              type='button'
              onClick={handleOnLogout}
              className='flex items-center gap-x-4 px-4 py-6 text-sm font-medium w-full'
              disabled={isLoading}
            >
              <span>
                <BsArrowBarRight className='w-6 h-6' />
              </span>
              Logout
            </button>
          </div>
        </section>
        {/* profile pages */}
        <section className='shadow rounded p-8'>
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default ProfileLayout;

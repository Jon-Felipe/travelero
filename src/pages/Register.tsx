import { Link } from 'react-router-dom';

// components
import FormRow from '../components/FormRow';

// extras
import registerImage from '../assets/registerImage.svg';

type Props = {};

function Register({}: Props) {
  return (
    <div className='p-10 mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-12 w-full max-w-screen-xl mx-auto'>
      <div className='hidden lg:inline-block'>
        <img src={registerImage} alt='register' className='w-full bg-cover' />
      </div>
      <div className='lg:shadow-xl lg:p-6 xl:p-12 lg:rounded-xl'>
        <h3 className='text-2xl font-semibold'>Register</h3>
        <p className='text-slate-400 mt-1'>
          Already have an account?{' '}
          <Link to='/login' className='text-blue-500'>
            Sign In
          </Link>
        </p>
        <form>
          <div className='mt-10'>
            <FormRow
              label='First Name'
              type='text'
              name='firstName'
              placeholder='John'
            />
          </div>
          <div className='mt-4'>
            <FormRow
              label='Last Name'
              type='text'
              name='lastName'
              placeholder='Doe'
            />
          </div>
          <div className='mt-4'>
            <FormRow
              label='email address'
              type='text'
              name='email'
              placeholder='you@example.com'
            />
          </div>
          <div className='mt-4'>
            <FormRow
              type='password'
              name='password'
              placeholder='Enter 6 or more character'
            />
          </div>
          <div className='mt-4'>
            <FormRow
              type='password'
              label='confirm password'
              name='confirmPassword'
              placeholder='Type your password again'
            />
          </div>
          <button
            type='submit'
            className='mt-8 w-full bg-blue-500 text-white font-bold py-2 rounded-md'
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

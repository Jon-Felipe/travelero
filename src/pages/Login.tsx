// component
import FormRow from '../components/FormRow';

import loginImg from '../assets/login.svg';

function Login() {
  return (
    <div className='p-10 mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-12 w-full max-w-screen-xl mx-auto'>
      <div className='lg:shadow-xl lg:p-6 xl:p-12 lg:rounded-xl'>
        <h3 className='text-2xl font-semibold'>Login</h3>
        <p className='text-slate-400 mt-1'>
          Don't have an account yet?{' '}
          <span className='text-blue-500'>Sign Up</span>
        </p>
        <form>
          <div className='mt-10 flex flex-col gap-y-2'>
            <FormRow
              label='email address'
              type='text'
              name='email'
              placeholder='you@example.com'
            />
          </div>
          <div className='mt-4 flex flex-col gap-y-2'>
            <FormRow
              type='password'
              name='password'
              placeholder='Enter 6 or more character'
            />
          </div>
          <button
            type='submit'
            className='mt-8 w-full bg-blue-500 text-white font-bold py-2 rounded-md'
          >
            Login
          </button>
        </form>
      </div>
      <div className='hidden lg:inline-block'>
        <img src={loginImg} alt='login' className='w-full bg-cover' />
      </div>
    </div>
  );
}

export default Login;

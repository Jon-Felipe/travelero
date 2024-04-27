import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../slices/authSlice';
import { useAppDispatch } from '../hooks/hooks';
import { setUser } from '../slices/userSlice';

// component
import FormRow from '../components/FormRow';

// extras
import loginImage from '../assets/loginImage.svg';
import { LoginFormData } from '../utils/types';

function Login() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  async function handleOnSubmit(e: FormEvent) {
    e.preventDefault();

    const { email, password } = formData;

    try {
      const { user } = await login({ email, password }).unwrap();
      dispatch(setUser({ user }));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='p-10 mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-x-12 w-full max-w-screen-xl mx-auto'>
      <div className='lg:shadow-xl lg:p-6 xl:p-12 lg:rounded-xl'>
        <h3 className='text-2xl font-semibold'>Login</h3>
        <p className='text-slate-400 mt-1'>
          Don't have an account yet?{' '}
          <Link to='/register' className='text-blue-500'>
            Sign Up
          </Link>
        </p>
        <form onSubmit={handleOnSubmit}>
          <div className='mt-10'>
            <FormRow
              label='email address'
              type='text'
              name='email'
              value={formData.email}
              placeholder='you@example.com'
              onChange={handleOnChange}
            />
          </div>
          <div className='mt-4'>
            <FormRow
              type='password'
              name='password'
              value={formData.password}
              placeholder='Enter 6 or more character'
              onChange={handleOnChange}
            />
          </div>
          <button
            type='submit'
            className='mt-8 w-full bg-blue-500 text-white font-bold py-2 rounded-md'
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Login'}
          </button>
        </form>
      </div>
      <div className='hidden lg:inline-block'>
        <img src={loginImage} alt='login' className='w-full bg-cover' />
      </div>
    </div>
  );
}

export default Login;

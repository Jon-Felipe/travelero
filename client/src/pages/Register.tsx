import { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRegisterMutation } from '../slices/apiSlice';

// components
import FormRow from '../components/FormRow';

// extras
import registerImage from '../assets/registerImage.svg';
import { RegisterFormData } from '../utils/types';

function Register() {
  const [formData, setFormData] = useState<RegisterFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  async function handleOnSubmit(e: FormEvent) {
    e.preventDefault();

    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      alert('Passwords do no match');
    } else {
      try {
        await register({ firstName, lastName, email, password }).unwrap();
        navigate('/');
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className='p-10 mt-16 lg:grid lg:grid-cols-[500px_1fr] lg:items-center lg:gap-x-12 w-full max-w-screen-xl mx-auto'>
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
        <form onSubmit={handleOnSubmit}>
          <div className='mt-10 flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 lg:gap-x-4'>
            <div className='w-full'>
              <FormRow
                label='First Name'
                type='text'
                name='firstName'
                value={formData.firstName}
                placeholder='John'
                onChange={handleOnChange}
              />
            </div>
            <div className='w-full'>
              <FormRow
                label='Last Name'
                type='text'
                name='lastName'
                value={formData.lastName}
                onChange={handleOnChange}
                placeholder='Doe'
              />
            </div>
          </div>
          <div className='mt-4'>
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
          <div className='mt-4'>
            <FormRow
              type='password'
              label='confirm password'
              name='confirmPassword'
              value={formData.confirmPassword}
              placeholder='Type your password again'
              onChange={handleOnChange}
            />
          </div>
          <button
            type='submit'
            className='mt-8 w-full bg-blue-500 text-white font-bold py-2 rounded-md'
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

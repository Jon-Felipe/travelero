import { useState } from 'react';
import { useUpdateProfileMutation } from '../../slices/userSlice';
import { setUser } from '../../slices/userSlice';

// components
import FormRow from '../../components/FormRow';

// extras
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { User } from '../../utils/types';

function PersonalData() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.user);

  const [updateUser, { isLoading }] = useUpdateProfileMutation();

  const [userInfo, setUserInfo] = useState<Omit<User, 'email' | 'password'>>({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    dateOfBirth: user?.dateOfBirth || '',
    phoneNumber: user?.phoneNumber || '',
    address: user?.address || '',
    country: user?.country || '',
    city: user?.city || '',
    postalCode: user?.postalCode || '',
  });

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  async function handleOnSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const { user } = await updateUser(userInfo).unwrap();
      dispatch(setUser({ user }));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h4 className='text-xl font-medium mb-4'>Update profile information</h4>
      <form onSubmit={handleOnSubmit}>
        <div className='block md:flex md:items-center md:gap-x-4'>
          <div className='w-full'>
            <FormRow
              label='First Name'
              type='text'
              name='firstName'
              value={userInfo.firstName}
              placeholder='John'
              onChange={handleOnChange}
            />
          </div>
          <div className='w-full mt-4 md:mt-0'>
            <FormRow
              label='Last Name'
              type='text'
              name='lastName'
              value={userInfo.lastName}
              placeholder='Doe'
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className='block md:flex md:items-center md:gap-x-4 mt-4'>
          <div className='w-full'>
            <FormRow
              label='Date of birth'
              type='date'
              name='dateOfBirth'
              value={userInfo.dateOfBirth}
              onChange={handleOnChange}
            />
          </div>
          <div className='w-full mt-4 md:mt-0'>
            <FormRow
              label='Phone number'
              type='text'
              name='phoneNumber'
              value={userInfo.phoneNumber}
              placeholder='+12 345 6789'
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className='w-full mt-4'>
          <FormRow
            label='address'
            type='text'
            name='address'
            value={userInfo.address}
            placeholder='123 example street'
            onChange={handleOnChange}
          />
        </div>
        <div className='block md:flex md:items-center md:gap-x-4 mt-4'>
          <div className='w-full'>
            <FormRow
              label='country'
              type='text'
              name='country'
              value={userInfo.country}
              placeholder='Portugal'
              onChange={handleOnChange}
            />
          </div>
          <div className='w-full mt-4 md:mt-0'>
            <FormRow
              label='city'
              type='text'
              name='city'
              value={userInfo.city}
              placeholder='Porto'
              onChange={handleOnChange}
            />
          </div>
          <div className='w-full mt-4 md:mt-0'>
            <FormRow
              type='text'
              label='Postal Code'
              name='postalCode'
              value={userInfo.postalCode}
              placeholder='1234'
              onChange={handleOnChange}
            />
          </div>
        </div>
        <div className='block md:flex md:justify-end'>
          <button
            type='submit'
            className='w-full md:w-auto bg-blue-500 text-white font-medium px-4 py-3 rounded-2xl mt-4'
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Update profile'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalData;

import { useState } from 'react';

// components
import FormRow from '../../components/FormRow';

// extras
import { useAppSelector } from '../../hooks/hooks';

type UserInfo = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
  address: string;
  country: string;
  city: string;
  postalCode: string;
};

type Props = {};

function PersonalData({}: Props) {
  const { user } = useAppSelector((store) => store.auth);

  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: user.firstName || '',
    lastName: user.lastName || '',
    dateOfBirth: '',
    phoneNumber: '',
    address: '',
    country: '',
    city: '',
    postalCode: '',
  });

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  return (
    <div>
      <h4 className='text-xl font-medium mb-4'>Update profile information</h4>
      <form>
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
              type='text'
              name='country'
              value={userInfo.country}
              placeholder='Portugal'
              onChange={handleOnChange}
            />
          </div>
          <div className='w-full mt-4 md:mt-0'>
            <FormRow
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
          >
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default PersonalData;

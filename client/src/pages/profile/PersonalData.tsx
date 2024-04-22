// components
import FormRow from '../../components/FormRow';

type Props = {};

function PersonalData({}: Props) {
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
              value=''
              placeholder='John'
              onChange={() => console.log('firstName')}
            />
          </div>
          <div className='w-full mt-4 md:mt-0'>
            <FormRow
              label='Last Name'
              type='text'
              name='lastName'
              value=''
              placeholder='Doe'
              onChange={() => console.log('lastName')}
            />
          </div>
        </div>
        <div className='block md:flex md:items-center md:gap-x-4 mt-4'>
          <div className='w-full'>
            <FormRow
              label='Date of birth'
              type='date'
              name='dob'
              value=''
              onChange={() => console.log('dob')}
            />
          </div>
          <div className='w-full mt-4 md:mt-0'>
            <FormRow
              label='Phone number'
              type='text'
              name='phoneNumber'
              value=''
              placeholder='+12 345 6789'
              onChange={() => console.log('phoneNumber')}
            />
          </div>
        </div>
        <div className='w-full mt-4'>
          <FormRow
            type='text'
            name='address'
            value=''
            placeholder='123 example street'
            onChange={() => console.log('address')}
          />
        </div>
        <div className='block md:flex md:items-center md:gap-x-4 mt-4'>
          <div className='w-full'>
            <FormRow
              type='text'
              name='country'
              value=''
              placeholder='Portugal'
              onChange={() => console.log('country')}
            />
          </div>
          <div className='w-full mt-4 md:mt-0'>
            <FormRow
              type='text'
              name='city'
              value=''
              placeholder='Porto'
              onChange={() => console.log('city')}
            />
          </div>
          <div className='w-full mt-4 md:mt-0'>
            <FormRow
              type='text'
              label='Postal Code'
              name='postalCode'
              value=''
              placeholder='1234'
              onChange={() => console.log('postalCode')}
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

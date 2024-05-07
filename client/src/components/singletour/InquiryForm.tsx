// components
import FormRow from '../FormRow';

function InquiryForm() {
  return (
    <form>
      <div className='space-y-5'>
        <FormRow
          type='text'
          name='name'
          value=''
          onChange={() => console.log('name')}
          placeholder='Name*'
        />
        <FormRow
          type='email'
          name='email'
          value=''
          onChange={() => console.log('email')}
          placeholder='Email*'
        />
        <FormRow
          type='number'
          name='phone'
          value=''
          onChange={() => console.log('phone')}
          placeholder='Phone*'
        />
        <textarea
          name='note'
          id='note'
          placeholder='Note*'
          rows={3}
          className='border-2 px-4 py-2 rounded-md w-full'
        ></textarea>
        <button className='w-full bg-blue-500 text-white py-2 text-base font-medium rounded-full'>
          Send
        </button>
      </div>
    </form>
  );
}

export default InquiryForm;

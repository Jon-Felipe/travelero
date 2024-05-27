import { useState } from 'react';

// components
import FormRow from '../FormRow';

type FormData = {
  name: string;
  email: string;
  phone: string;
  note: string;
};

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  note: '',
};

function InquiryForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  function handleOnChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log('form submitted');
      }}
    >
      <div className='space-y-5'>
        <FormRow
          type='text'
          name='name'
          value={formData.name}
          onChange={handleOnChange}
          placeholder='Name*'
        />
        <FormRow
          type='email'
          name='email'
          value={formData.email}
          onChange={handleOnChange}
          placeholder='Email*'
        />
        <FormRow
          type='string'
          name='phone'
          value={formData.phone}
          onChange={handleOnChange}
          placeholder='Phone*'
        />
        <textarea
          name='note'
          id='note'
          value={formData.note}
          onChange={handleOnChange}
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

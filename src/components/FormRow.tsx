import React from 'react';

type Props = {
  label?: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
  placeholder?: string;
};

function FormRow({ label, type, name, placeholder }: Props) {
  return (
    <>
      <label
        htmlFor={name}
        className='block text-sm font-semibold tracking-wide capitalize'
      >
        {label || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className='mt-2 border-2 py-2 px-4 rounded-md w-full'
      />
    </>
  );
}

export default FormRow;

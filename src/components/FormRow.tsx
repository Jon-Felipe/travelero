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
        className='text-sm font-semibold tracking-wide capitalize'
      >
        {label || name}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className='border-2 py-2 px-4 rounded-md'
      />
    </>
  );
}

export default FormRow;

import React from 'react';

type Props = {
  label?: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
  value: React.InputHTMLAttributes<HTMLInputElement>['value'];
  placeholder?: string;
};

function FormRow({ label, type, name, value, placeholder }: Props) {
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
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        className='mt-2 border-2 py-2 px-4 rounded-md w-full'
      />
    </>
  );
}

export default FormRow;

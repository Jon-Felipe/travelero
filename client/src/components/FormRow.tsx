import React from 'react';

type Props = {
  label?: string;
  type: React.HTMLInputTypeAttribute;
  name: string;
  value: React.InputHTMLAttributes<HTMLInputElement>['value'];
  placeholder?: string;
  onChange: React.InputHTMLAttributes<HTMLInputElement>['onChange'];
};

function FormRow({ label, type, name, value, onChange, placeholder }: Props) {
  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className='block text-sm font-semibold tracking-wide capitalize'
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        defaultValue={value}
        onChange={onChange}
        placeholder={placeholder}
        min={0}
        className='mt-2 border-2 py-2 px-4 rounded-md w-full'
      />
    </>
  );
}

export default FormRow;

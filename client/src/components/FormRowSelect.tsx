import React from 'react';

type Select = {
  id: string | number;
  text: string;
  value: string;
};

type Props = {
  label?: string;
  name: React.SelectHTMLAttributes<HTMLSelectElement>['name'];
  listItems: Select[];
  onChange: React.SelectHTMLAttributes<HTMLSelectElement>['onChange'];
};

function FormRowSelect({ label, name, listItems, onChange }: Props) {
  return (
    <>
      {label && (
        <label
          htmlFor='duration'
          className='block text-sm font-semibold tracking-wide capitalize'
        >
          {label}
        </label>
      )}
      <select
        name={name}
        id={name}
        onChange={onChange}
        className='mt-2 border-2 py-2 px-4 rounded-md w-full'
      >
        <option value=''>Any</option>
        {listItems.map((item) => {
          return (
            <option key={item.id} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default FormRowSelect;

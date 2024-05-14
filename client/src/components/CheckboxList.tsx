import React from 'react';

// extras
import { TourFilter } from '../utils/types';

type Props = {
  label: string;
  name: React.InputHTMLAttributes<HTMLInputElement>['name'];
  listItems: TourFilter[];
};

function CheckboxList({ label, name, listItems }: Props) {
  return (
    <div className='space-y-3 my-8'>
      <h3 className='text-base font-bold'>{label}</h3>
      {listItems.map((item) => {
        return (
          <div key={item.id} className='flex items-center'>
            <input
              type='checkbox'
              name={name}
              value=''
              className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500focus:ring-2'
            />
            <label className='ms-2 text-base font-normal text-slate-600 capitalize'>
              {item.text}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default CheckboxList;

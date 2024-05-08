import React from 'react';

type Props = {
  icon: React.ReactElement;
  title?: string;
  items: string[];
};

function FeatureList({ icon, title, items }: Props) {
  return (
    <article>
      <h2 className='font-bold text-2xl mb-5'>{title}</h2>
      <ul>
        {items.map((item, index) => {
          return (
            <div key={index} className='flex items-center gap-x-4 mb-4'>
              {icon}
              <li className='text-base font-normal text-slate-500'>{item}</li>
            </div>
          );
        })}
      </ul>
    </article>
  );
}

export default FeatureList;

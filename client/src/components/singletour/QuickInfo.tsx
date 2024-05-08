import React from 'react';

type Props = {
  icon: React.ReactElement;
  title: string;
  text: string | number;
};

function QuickInfo({ icon, title, text }: Props) {
  return (
    <article className='flex items-center'>
      <div className='flex items-center justify-center border border-slate-200 rounded-xl p-3 w-12 h-12 mr-4'>
        {icon}
      </div>
      <div>
        <h4 className='text-base font-bold capitalize'>{title}</h4>
        <p className='text-sm font-normal text-slate-500 capitalize'>{text}</p>
      </div>
    </article>
  );
}

export default QuickInfo;

type Props = {
  label: string;
};

function Checkbox({ label }: Props) {
  return (
    <div className='flex items-center my-2'>
      <input
        type='checkbox'
        value=''
        className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500focus:ring-2 '
      />
      <label
        htmlFor='checked-checkbox'
        className='ms-2 text-base font-normal text-slate-600'
      >
        {label}
      </label>
    </div>
  );
}

export default Checkbox;

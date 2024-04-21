import { useState } from 'react';
import { BsGeoAlt } from 'react-icons/bs';

// extras
import { HeroFormData } from '../utils/types';

function Hero() {
  const [formData, setFormData] = useState<HeroFormData>({
    location: '',
    date: '',
    checkOut: '',
  });

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((prevState) => {
      return { ...prevState, [name]: value };
    });
  }

  function onFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(formData);
  }

  return (
    <section className='bg-[url(./assets/heroImage.jpg)] w-full h-[500px] bg-center bg-cover flex items-center justify-center'>
      <div className='w-full px-4'>
        <h1 className='text-center text-3xl md:text-5xl lg:text-7xl font-bold text-white'>
          Your world of joy
        </h1>
        <p className='text-center text-base md:text-lg font-medium text-white mt-1'>
          Find what makes you happy anytime, anywhere
        </p>
        <form className='bg-white border rounded-2xl lg:rounded-full mt-6 w-full max-w-[850px] mx-auto overflow-y-hidden lg:grid lg:grid-cols-[1fr_2fr_150px] lg:px-8 lg:py-4'>
          <div className='flex items-center gap-x-4 px-6 lg:px-0 py-4 lg:py-0 border-b lg:border-b-0'>
            <BsGeoAlt className='w-6 h-6' />
            {/* location */}
            <div className='w-full'>
              <label htmlFor='location' className='block font-medium'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                value={formData.location}
                onChange={handleOnChange}
                placeholder='Where are you going?'
                className='text-sm text-slate-400 w-full focus:outline-none'
              />
            </div>
          </div>
          <div className='flex items-center gap-x-2 px-6 lg:px-0 py-4 lg:py-0 w-full'>
            {/* date */}
            <div className='w-full'>
              <label htmlFor='date' className='block font-medium'>
                Date
              </label>
              <input
                type='date'
                id='date'
                name='date'
                value={formData.date}
                onChange={handleOnChange}
                className='text-sm text-slate-400 focus:outline-none'
              />
            </div>
            {/* check out */}
            <div className='w-full'>
              <label htmlFor='checkOut' className='block font-medium'>
                Check out
              </label>
              <input
                type='date'
                id='checkOut'
                name='checkOut'
                value={formData.checkOut}
                onChange={handleOnChange}
                className='text-sm text-slate-400 focus:outline-none'
              />
            </div>
          </div>
          <button
            type='submit'
            className='bg-blue-600 text-white font-bold text-base w-full py-4 lg:py-0 lg:rounded-full'
            onClick={onFormSubmit}
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;

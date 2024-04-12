function Hero() {
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
          <div className='flex items-center'>
            {/* location */}
            <div className='px-6 lg:px-0 py-4 lg:py-0 border-b lg:border-b-0 w-full'>
              <label htmlFor='location' className='block font-medium'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
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
                name='Date'
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
                className='text-sm text-slate-400 focus:outline-none'
              />
            </div>
          </div>
          <button className='bg-blue-600 text-white font-bold text-base w-full py-4 lg:rounded-full'>
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;

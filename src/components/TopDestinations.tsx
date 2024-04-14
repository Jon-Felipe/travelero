import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

// extras
import { topDestinations } from '../utils/constants';

function TopDestinations() {
  return (
    <section className='text-center py-10 lg:py-20 px-4 lg:px-0'>
      <h3 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>
        Top destinations
      </h3>
      <div className='mt-12 max-w-[1366px] mx-auto'>
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          navigation={true}
          modules={[Navigation]}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1440: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
        >
          {topDestinations.map((item) => (
            <SwiperSlide key={item.id}>
              <div className='relative w-full pb-[100%] rounded-full mb-4 overflow-hidden'>
                <img
                  src={item.image}
                  alt={item.title}
                  className='absolute top-0 left-0 w-full h-full bg-cover'
                />
              </div>
              <h3 className='text-lg font-bold text-center mb-1'>
                {item.title}
              </h3>
              <p className='text-base font-normal text-center text-slate-500'>
                {item.toursTotal} Tours
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TopDestinations;

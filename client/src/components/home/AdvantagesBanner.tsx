import React from 'react';
import { BsCash, BsGift, BsStar, BsTelephone } from 'react-icons/bs';

function AdvantagesBanner() {
  return (
    <section className='my-16'>
      <h3 className='text-2xl font-semibold text-center'>
        Why book with Travelero
      </h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 mt-10'>
        <AdventureBannerCard
          icon={<BsCash className='w-6 h-6' />}
          title='Ultimate flexibility'
          text='Free cancellation and payment options to satisfy any plans or budget'
        />
        <AdventureBannerCard
          icon={<BsGift className='w-6 h-6' />}
          title='Earn rewards'
          text='Explore, earn, redeem, repeat with our loyalty program'
        />
        <AdventureBannerCard
          icon={<BsStar className='w-6 h-6' />}
          title='Quality at our core'
          text='High quality standards. Reliable reviews.'
        />
        <AdventureBannerCard
          icon={<BsTelephone className='w-6 h-6' />}
          title='24/7 customer support'
          text="New price? New plan? No problem. We're here to help, 24/7"
        />
      </div>
    </section>
  );
}

export default AdvantagesBanner;

type AdventureBannerCardProps = {
  icon: React.ReactElement;
  title: string;
  text: string;
};

function AdventureBannerCard({ icon, title, text }: AdventureBannerCardProps) {
  return (
    <article className='flex flex-col items-center justify-center text-center'>
      <span className='mb-4'>{icon}</span>
      <h5 className='mb-4 font-semibold text-xl'>{title}</h5>
      <p>{text}</p>
    </article>
  );
}

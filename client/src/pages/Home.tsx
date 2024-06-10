// components
import TopDestinations from '../components/home/TopDestinations';
import AdvantagesBanner from '../components/home/AdvantagesBanner';
import TopTours from '../components/home/TopTours';

type Props = {};

function Home({}: Props) {
  return (
    <div className='max-w-screen-xl mx-auto px-8'>
      <TopTours />
      <AdvantagesBanner />
      <TopDestinations />
    </div>
  );
}

export default Home;

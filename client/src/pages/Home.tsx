// components
import TopDestinations from '../components/home/TopDestinations';
import TopTours from '../components/home/TopTours';

type Props = {};

function Home({}: Props) {
  return (
    <div className='max-w-screen-xl mx-auto px-8'>
      <TopTours />
      <TopDestinations />
    </div>
  );
}

export default Home;

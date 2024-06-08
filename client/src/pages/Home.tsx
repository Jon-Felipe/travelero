// components
import TopDestinations from '../components/TopDestinations';
import TopTours from '../components/TopTours';

type Props = {};

function Home({}: Props) {
  return (
    <div className='max-w-screen-xl mx-auto px-8'>
      <TopDestinations />
      <TopTours />
    </div>
  );
}

export default Home;

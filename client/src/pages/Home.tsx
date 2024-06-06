// components
import FeaturedTrips from '../components/FeaturedTrips';

type Props = {};

function Home({}: Props) {
  return (
    <div className='max-w-screen-xl mx-auto px-8'>
      <FeaturedTrips />
    </div>
  );
}

export default Home;

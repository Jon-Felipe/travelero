// components
import Hero from '../components/Hero';
import TopDestinations from '../components/TopDestinations';
import FeaturedTrips from '../components/FeaturedTrips';

type Props = {};

function Home({}: Props) {
  return (
    <>
      <Hero />
      <TopDestinations />
      <FeaturedTrips />
    </>
  );
}

export default Home;

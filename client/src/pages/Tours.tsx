import TourCard from '../components/TourCard';
import { useGetToursQuery } from '../slices/tourSlice';

type Props = {};

function Tours({}: Props) {
  const { data, isLoading } = useGetToursQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='grid md:grid-cols-[300px_1fr] p-4 max-w-screen-2xl mx-auto mt-12'>
      <section className='hidden md:block'>
        <h3>Filers</h3>
      </section>
      <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-x-6'>
        {data?.tours?.map((tour) => {
          return <TourCard key={tour._id} tour={tour} />;
        })}
      </section>
    </div>
  );
}

export default Tours;

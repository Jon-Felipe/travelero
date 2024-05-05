import { useParams } from 'react-router-dom';
import { useGetSingleTourQuery } from '../slices/tourSlice';

// components
import Spinner from '../components/Spinner';

type Props = {};

function SingleTour({}: Props) {
  const params = useParams();
  const { isLoading, data } = useGetSingleTourQuery(params.id!);

  if (isLoading) {
    return (
      <div className='mt-20'>
        <Spinner />;
      </div>
    );
  }

  return (
    <div>
      <h1>{data?.tour.title}</h1>
    </div>
  );
}

export default SingleTour;

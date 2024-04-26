import { useGetToursQuery } from '../slices/tourSlice';

type Props = {};

function Tours({}: Props) {
  const { data, isLoading, error } = useGetToursQuery();

  return (
    <section>
      {isLoading ? (
        <p>loading...</p>
      ) : error ? (
        <p>Error</p>
      ) : (
        <>
          {data?.tours?.map((item) => {
            return <p key={item._id}>{item.title}</p>;
          })}
        </>
      )}
    </section>
  );
}

export default Tours;

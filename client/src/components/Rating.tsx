import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

type Props = {
  value: number;
};

function Rating({ value }: Props) {
  return (
    <div className='flex items-center my-2'>
      <span>
        {value >= 1 ? (
          <BsStarFill className='text-yellow-400' />
        ) : value >= 0.5 ? (
          <BsStarHalf className='text-yellow-400' />
        ) : (
          <BsStar className='text-yellow-400' />
        )}
      </span>
      <span>
        {value >= 2 ? (
          <BsStarFill className='text-yellow-400' />
        ) : value >= 1.5 ? (
          <BsStarHalf className='text-yellow-400' />
        ) : (
          <BsStar className='text-yellow-400' />
        )}
      </span>
      <span>
        {value >= 3 ? (
          <BsStarFill className='text-yellow-400' />
        ) : value >= 2.5 ? (
          <BsStarHalf className='text-yellow-400' />
        ) : (
          <BsStar className='text-yellow-400' />
        )}
      </span>
      <span>
        {value >= 4 ? (
          <BsStarFill className='text-yellow-400' />
        ) : value >= 3.5 ? (
          <BsStarHalf className='text-yellow-400' />
        ) : (
          <BsStar className='text-yellow-400' />
        )}
      </span>
      <span>
        {value >= 5 ? (
          <BsStarFill className='text-yellow-400' />
        ) : value >= 4.5 ? (
          <BsStarHalf className='text-yellow-400' />
        ) : (
          <BsStar className='text-yellow-400' />
        )}
      </span>
    </div>
  );
}

export default Rating;

import Image from 'next/image';
import { FaQuoteLeft, FaThumbsUp } from 'react-icons/fa';

export default function ReviewCard({ review, reviewerSrc, reviewer, first }) {
  return (
    <div
      className={`bg-primaryLight py-8 px-8 lg:mr-8 mt-8 ${
        first ? 'mt-0' : ''
      } lg:mt-0`}
    >
      <FaQuoteLeft />
      <p className='text-gray-400 py-8'>{review}</p>
      <div className='flex justify-between border-t pt-8'>
        <div className='flex justify-center items-center'>
          <Image
            className='rounded-full mr-4'
            src={reviewerSrc}
            width={40}
            height={40}
            alt={reviewer}
          />
          <span className='text-sm text-gray-400'>{reviewer}</span>
        </div>
        <div className=''>
          <button className='flex items-center px-4 py-4 rounded-xl'>
            <FaThumbsUp className='mr-4' />
            <span className='text-sm text-gray-400'>Helpful</span>
          </button>
        </div>
      </div>
    </div>
  );
}

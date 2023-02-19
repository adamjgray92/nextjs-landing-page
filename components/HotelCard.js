import Image from 'next/image';
import { FaEye, FaHatWizard } from 'react-icons/fa';

export default function HotelCard({ imgUrl, name, startingPrice }) {
  return (
    <div className='bg-white px-4 py-4 rounded-2xl'>
      <div>
        <Image
          className='rounded-3xl'
          src={imgUrl}
          height={400}
          width={400}
          alt={`Viewing ${name}`}
        />
      </div>
      <h3 className='text-black font-semibold mt-4'>{name}</h3>
      <p className='mt-4 text-gray-400 text-sm'>
        start from £{startingPrice}/night
      </p>
      <div className='mt-8 flex'>
        <button className='btn flex-1 mr-4'>Book Now</button>
        <button className='rounded-full bg-red-400 h-[52px] w-[52px] flex items-center justify-center'>
          <FaEye size={24} />
        </button>
      </div>
    </div>
  );
}

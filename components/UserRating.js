import Image from 'next/image';

export default function UserRating({ imgSrc, name, rating, style }) {
  return (
    <div
      className={`bg-white flex items-center rounded-3xl py-4 pl-4 pr-8 ${style}`}
    >
      <div className='mr-4'>
        <Image
          className='rounded-full'
          src={imgSrc}
          height={45}
          width={45}
          alt={name}
        />
      </div>
      <div>
        <span className='text-black block font-semibold text-sm'>{name}</span>
        <span className='text-gray-400 block mt-1 text-sm'>
          Give rating{' '}
          <span className='text-secondary text-sm font-semibold'>{rating}</span>
        </span>
      </div>
    </div>
  );
}

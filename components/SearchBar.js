import {
  FaAngleRight,
  FaBuilding,
  FaCalendarAlt,
  FaCrosshairs,
  FaGlobe,
} from 'react-icons/fa';

export default function SearchBar() {
  return (
    <div className='bg-white rounded-3xl py-8 px-6 lg:px-12 max-w-7xl mx-auto absolute inset-6 xl:inset-0 h-[700px] sm:h-[660px] lg:h-[440px] xl:h-64 top-[-160px] xl:top-[-120px]'>
      <div className='flex items-center justify-between'>
        <h3 className='text-2xl text-black font-semibold flex items-center font-display'>
          <FaCrosshairs className='mr-6 text-secondary' />
          <span>Hotels and Resorts in Bali</span>
        </h3>
        <button className='text-gray-400 font-display flex items-center'>
          Latest Searching <FaAngleRight className='text-secondary ml-4' />
        </button>
      </div>
      <div className='flex flex-col xl:flex-row xl:items-end border-t border-gray-200 mt-8'>
        <div className='block lg:flex lg:items-end'>
          <div className='mt-8 mr-6 lg:w-1/2'>
            <span className='text-gray-400'>Destination</span>
            <div className='mt-4 bg-gray-100 py-4 px-4 rounded-xl text-black flex items-center'>
              <FaGlobe className='text-secondary' size={20} />
              <input
                className='bg-transparent ml-4 font-semibold outline-none'
                type='text'
              />
            </div>
          </div>
          <div className='mt-4 mr-6 lg:w-1/2'>
            <span className='text-gray-400'>Check-In</span>
            <div className='mt-4 bg-gray-100 py-4 px-4 rounded-xl text-black flex items-center'>
              <FaCalendarAlt className='text-secondary' size={20} />
              <input
                className='bg-transparent ml-4 font-semibold outline-none'
                type='text'
              />
            </div>
          </div>
        </div>
        <div className='block lg:flex lg:items-end'>
          <div className='mt-4 mr-6 lg:w-1/2'>
            <span className='text-gray-400'>Check-Out</span>
            <div className='mt-4 bg-gray-100 py-4 px-4 rounded-xl text-black flex items-center'>
              <FaCalendarAlt className='text-secondary' size={20} />
              <input
                className='bg-transparent ml-4 font-semibold outline-none'
                type='text'
              />
            </div>
          </div>
          <div className='mt-4 mr-6 lg:w-1/2'>
            <span className='text-gray-400'>Room & Guest</span>
            <div className='mt-4 bg-gray-100 py-4 px-4 rounded-xl text-black flex items-center'>
              <FaBuilding className='text-secondary' size={20} />
              <input
                className='bg-transparent ml-4 font-semibold outline-none'
                type='text'
              />
            </div>
          </div>
        </div>
        <div className='mt-6 xl:mt-0'>
          <button className='btn'>Search</button>
        </div>
      </div>
    </div>
  );
}

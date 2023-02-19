import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaPlayCircle } from 'react-icons/fa';

import UserRating from '@/components/UserRating';
import HotelCard from '@/components/HotelCard';
import ReviewCard from '@/components/ReviewCard';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <main className='bg-primary'>
      {/* Landing */}
      <section className='grid grid-cols-12 gap-4 max-w-[1140px] mx-auto px-6 pt-16 pb-24 lg:px-8'>
        <div className='col-span-12 lg:col-span-8'>
          <h2 className='text-6xl font-semibold font-display leading-relaxed'>
            Discover the Best Hotels <br />& Resorts to Stay
          </h2>
        </div>
        <div className='col-span-12 lg:col-span-4'>
          <p className='text-gray-400 leading-relaxed mt-5'>
            We provide a variety of the best lodging accommodations for those of
            you who need it. Don&apos;t worry about the quality of the service.
          </p>
          <div className='mt-8 flex'>
            <button className='btn mr-8'>Explore More</button>
            <button className='flex items-center text-sm px-4 py-4 rounded-xl'>
              <FaPlayCircle className='mr-4' />
              <span className='text-gray-400'>Play Demo</span>
            </button>
          </div>
        </div>
      </section>
      {/* Featured Hotels */}
      <section className='px-6 pt-4 pb-64 lg:px-8'>
        <div className='flex overflow-scroll scrollbar-hide'>
          <div className='mr-8'>
            <h3 className='text-2xl font-semibold'>Sunset Hill Resort & Spa</h3>
            <span className='text-gray-400 text-sm block mt-4'>
              Start from £1,098/night
            </span>
            <div className='relative w-[300px] h-[500px] overflow-hidden mt-4'>
              <Image
                className='rounded-3xl'
                src='https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80'
                alt='Sunset Hill Resort & Spa'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className='mr-8'>
            <h3 className='text-2xl font-semibold'>Java Heritage Hotel</h3>
            <span className='text-gray-400 text-sm block mt-4'>
              Start from £1,098/night
            </span>
            <div className='relative w-[300px] h-[500px] overflow-hidden mt-4'>
              <Image
                className='rounded-3xl'
                src='https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
                alt='Java Heritage Hotel'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className='mr-8'>
            <h3 className='text-2xl font-semibold'>Nihi Sumba Resort</h3>
            <span className='text-gray-400 text-sm block mt-4'>
              Start from £1,098/night
            </span>
            <div className='relative w-[300px] h-[500px] overflow-hidden mt-4'>
              <Image
                className='rounded-3xl'
                src='https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80'
                alt='Nihi Sumba Resort'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className='mr-8'>
            <h3 className='text-2xl font-semibold'>Bobocabin Kintamani</h3>
            <span className='text-gray-400 text-sm block mt-4'>
              Start from £1,098/night
            </span>
            <div className='relative w-[300px] h-[500px] overflow-hidden mt-4'>
              <Image
                className='rounded-3xl'
                src='https://images.unsplash.com/photo-1549294413-26f195200c16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80'
                alt='Bobocabin Kintamani'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className='mr-8'>
            <h3 className='text-2xl font-semibold'>
              Ocean Breeze Paradise Resort
            </h3>
            <span className='text-gray-400 text-sm block mt-4'>
              Start from £1,098/night
            </span>
            <div className='relative w-[300px] h-[500px] overflow-hidden mt-4'>
              <Image
                className='rounded-3xl'
                src='https://images.unsplash.com/photo-1585551897231-77fe523c288a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
                alt='Ocean Breeze Paradise Resort'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
      {/* Search */}
      <div className='relative'>
        <SearchBar />
      </div>
      {/* Why you should choose us */}
      <section className='bg-customGrey pt-[600px] lg:pt-72'>
        <div className='max-w-[1140px] mx-auto px-6 lg:px-8'>
          <h2 className='text-5xl text-black font-semibold font-display text-center'>
            Why You Should Choose Us
          </h2>
          <p className='text-gray-400 text-lg mt-8 text-center w-10/12 mx-auto'>
            You should choose us because we provide the best accommodation and
            we have sorted all the hotels here based on their quality
          </p>
          <div className='grid grid-cols-12 gap-4 mt-16'>
            <div className='col-span-12 lg:col-span-4'>
              <ol>
                <li>
                  <span className='bg-secondary px-3 py-1 rounded-xl font-display text-sm spacing'>
                    01
                  </span>
                  <h3 className='text-black font-semibold text-lg mt-6'>
                    We provide the best choice of hotels for you to stay.
                  </h3>
                  <p className='text-gray-400 mt-4'>
                    We always prioritise customer comfort and satisfaction.
                    That&apos;s why we only accept the best hotels.
                  </p>
                </li>
                <li className='mt-8'>
                  <span className='bg-secondary px-3 py-1 rounded-xl font-display text-sm spacing'>
                    02
                  </span>
                  <h3 className='text-black font-semibold text-lg mt-6'>
                    Low price with best quality
                  </h3>
                  <p className='text-gray-400 mt-4'>
                    Although the price tends to be cheaper but it will not
                    affect the quality of service, so don&apos;t worry.
                  </p>
                </li>
                <li className='mt-8'>
                  <span className='bg-secondary px-3 py-1 rounded-xl font-display text-sm spacing'>
                    03
                  </span>
                  <h3 className='text-black font-semibold text-lg mt-6'>
                    Can refund up to 100%
                  </h3>
                  <p className='text-gray-400 mt-4'>
                    Don&apos;t worry if suddenly you have a problem and want to
                    do a refund, with Nginep you can get a full refund.
                  </p>
                </li>
              </ol>
            </div>
            <div className='hidden lg:flex col-span-8 justify-end'>
              <div className='relative'>
                <Image
                  src='https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
                  width={500}
                  height={1000}
                  className='rounded-3xl'
                  alt='Hotel'
                />
                <div className='absolute left-[-150px] top-[300px] border-white border-[10px] bg-white rounded-3xl'>
                  <Image
                    src='https://images.unsplash.com/photo-1541480551145-2370a440d585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80'
                    width={400}
                    height={250}
                    className='rounded-3xl'
                    alt='Bed'
                  />
                </div>
                <UserRating
                  style='absolute right-10 top-[-30px]'
                  name='Vincent Rompies'
                  rating='4.7'
                  imgSrc='/images/male-1.jpeg'
                />
                <UserRating
                  style='absolute left-[-100px] top-[150px]'
                  name='Caesar Mario'
                  rating='4.5'
                  imgSrc='/images/male-2.jpeg'
                />
                <UserRating
                  style='absolute right-[-30px] bottom-[100px]'
                  name='Jasmine Nadiko'
                  rating='4.7'
                  imgSrc='/images/male-3.jpeg'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* best hotels */}
      <section className='bg-customGrey py-32'>
        <div className='max-w-[1140px] mx-auto px-6 lg:px-8'>
          <h2 className='text-black font-display text-5xl font-semibold text-center'>
            The Best Hotels For You
          </h2>
          <p className='text-gray-400 text-center mt-8'>
            These are some of the hotels that we highly recommend for you. We
            guarantee the quality of the service, the food, the hotel area and
            various other aspects.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-8'>
            <HotelCard
              name='Java Heritage Hotel'
              startingPrice='79'
              imgUrl='https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            />
            <HotelCard
              name='Java Heritage Hotel'
              startingPrice='79'
              imgUrl='https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            />
            <HotelCard
              name='Java Heritage Hotel'
              startingPrice='79'
              imgUrl='https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            />
            <HotelCard
              name='Java Heritage Hotel'
              startingPrice='79'
              imgUrl='https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            />
            <HotelCard
              name='Java Heritage Hotel'
              startingPrice='79'
              imgUrl='https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            />
            <HotelCard
              name='Java Heritage Hotel'
              startingPrice='79'
              imgUrl='https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            />
          </div>
        </div>
      </section>
      {/* feedback */}
      <section className='py-16 lg:py-32'>
        <div className='max-w-[1140px] mx-auto px-6 lg:px-8'>
          <div className='flex flex-col lg:flex-row justify-between'>
            <h2 className='text-5xl font-semibold font-display flex-1 leading-relaxed'>
              What Our Customers Say About Nginep?
            </h2>
            <div className='flex-1 mt-8 lg:mt-0'>
              <p className='text-sm text-gray-400'>
                If you don&apos;t trust us enough, take a look at the reviews
                from some of our users below. We hope it can help you in making
                your decision.
              </p>
              <div className='flex justify-end mt-8'>
                <div className='flex space-x-5'>
                  <button className='btn rounded-full bg-secondaryLight text-secondary'>
                    <FaArrowLeft />
                  </button>
                  <button className='btn rounded-full'>
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-col lg:flex-row mt-16'>
            <ReviewCard
              review='Nhinep is very easy to use, the customer service is friendly and very responsive when there are questions and complaints from customers. I am very satisfied using Nginep to book my dream hotel.'
              reviewer='Jesselyn Wu'
              reviewerSrc='/images/female-1.jpeg'
              first
            />
            <ReviewCard
              review='The price of the hotel in the stay tends to be cheap compared to the price on other platforms, I am very satisfied with Nginep. Hope it grows to be a better booking platform.'
              reviewer='Enzy Storia'
              reviewerSrc='/images/female-2.jpeg'
            />
            <ReviewCard
              review='Nhinep is very easy to use, the customer service is friendly and very responsive when there are questions and complaints from customers. I am very satisfied using Nginep to book my dream hotel.'
              reviewer='Freya Kayyona'
              reviewerSrc='/images/female-3.jpeg'
            />
          </div>
        </div>
      </section>
    </main>
  );
}

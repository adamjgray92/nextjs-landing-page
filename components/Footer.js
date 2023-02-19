import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-customGrey pt-24 pb-16 lg:pt-32'>
      <div className='max-w-[1140px] mx-auto px-6 lg:px-8'>
        <div className='flex flex-col lg:flex-row justify-between'>
          <div className='w-full mr-12 lg:w-1/4'>
            <Image
              src='/images/footer-logo.png'
              width={140}
              height={80}
              alt='NGINEP'
            />
            <p className='text-gray-400 mt-4'>
              The best hotel booking platform in the world
            </p>
            <div>
              <ul className='flex space-x-6 mt-10'>
                <li>
                  <a href='' target='_blank'>
                    <FaFacebook
                      color='#1b1b1b'
                      className='text-4xl lg:text-base'
                    />
                  </a>
                </li>
                <li>
                  <a href='' target='_blank'>
                    <FaTwitter
                      color='#1b1b1b'
                      className='text-4xl lg:text-base'
                    />
                  </a>
                </li>
                <li>
                  <a href='' target='_blank'>
                    <FaInstagram
                      color='#1b1b1b'
                      className='text-4xl lg:text-base'
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <nav className='flex flex-col lg:flex-row justify-between flex-1 w-2/4 mr-12'>
            <div className='mt-6 lg:mt-0'>
              <h3 className='text-gray-700 font-semibold'>Rooms</h3>
              <ul className='space-y-8 mt-8'>
                <li className='text-gray-400'>
                  <Link href='/rooms/standard'>Standard</Link>
                </li>
                <li className='text-gray-400'>
                  <Link href='/rooms/deluxe'>Deluxe</Link>
                </li>
                <li className='text-gray-400'>
                  <Link href='/rooms/family'>Family</Link>
                </li>
              </ul>
            </div>
            <div className='mt-6 lg:mt-0'>
              <h3 className='text-gray-700 font-semibold'>Resources</h3>
              <ul className='space-y-8 mt-8'>
                <li className='text-gray-400'>
                  <Link href='/resources/help-center'>Help Center</Link>
                </li>
                <li className='text-gray-400'>
                  <Link href='/resources/guides'>Guides</Link>
                </li>
                <li className='text-gray-400'>
                  <Link href='/resources/partner-network'>Partner Network</Link>
                </li>
                <li className='text-gray-400'>
                  <Link href='/resources/developers'>Developers</Link>
                </li>
              </ul>
            </div>
            <div className='mt-6 lg:mt-0'>
              <h3 className='text-gray-700 font-semibold'>Company</h3>
              <ul className='space-y-8 mt-8'>
                <li className='text-gray-400'>
                  <Link href='/company/about-us'>About Us</Link>
                </li>
                <li className='text-gray-400'>
                  <Link href='/company/testimonials'>Testimonials</Link>
                </li>
                <li className='text-gray-400'>
                  <Link href='/company/terms-of-service'>Terms of Service</Link>
                </li>
                <li className='text-gray-400'>
                  <Link href='/company/privacy-policy'>Privacy Policy</Link>
                </li>
                <li className='text-gray-400'>
                  <Link href='/company/cookie-policy'>Cookie Policy</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className='mt-6 w-full lg:mt-0 lg:w-1/4'>
            <h3 className='text-gray-700 font-semibold'>Newsletter</h3>
            <p className='text-gray-400 mt-8'>
              Subscribe and get the latest updates
            </p>
            <form className='flex mt-4'>
              <input
                className='bg-white py-4 px-4 rounded-lg text-sm flex-1 mr-4 lg:mr-0'
                type='text'
                placeholder='Enter your email'
              />
              <button className='btn' type='submit'>
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className='mt-16'>
          <span class='block text-sm text-gray-500 text-center dark:text-gray-400'>
            <Link href='https://flowbite.com/' className='hover:underline'>
              NGINEP
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}

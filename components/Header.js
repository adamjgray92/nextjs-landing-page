'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'About Us', href: '#' },
  { name: 'Rooms', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'Contact', href: '#' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className='bg-primary'>
        <div className='max-w-[1140px] mx-auto px-6 pt-6 lg:px-8'>
          <nav
            className='flex items-center justify-between'
            aria-label='Global'
          >
            <div className='flex lg:flex-1'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Nginep</span>
                <Image
                  src='/images/logo.png'
                  width={120}
                  height={70}
                  alt='NGINEP'
                />
              </a>
            </div>
            <div className='flex lg:hidden'>
              <button
                type='button'
                className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <span className='sr-only'>Open main menu</span>
                <Bars3Icon className='h-6 w-6 text-white' aria-hidden='true' />
              </button>
            </div>
            <div className='hidden lg:flex lg:gap-x-12'>
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className='text-sm leading-6 text-gray-400 hover:text-white'
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
              <button className='btn'>Sign Up</button>
            </div>
          </nav>
          <Dialog
            as='div'
            open={isMobileMenuOpen}
            onClose={setIsMobileMenuOpen}
          >
            <Dialog.Panel
              focus='true'
              className='fixed inset-0 z-10 overflow-y-auto bg-primary px-6 py-6 lg:hidden'
            >
              <div className='flex items-center justify-between'>
                <a href='#' className='-m-1.5 p-1.5'>
                  <span className='sr-only'>Nginep</span>
                  <Image
                    src='/images/logo.png'
                    width={120}
                    height={70}
                    alt='NGINEP'
                  />
                </a>
                <button
                  type='button'
                  className='-m-2.5 rounded-md p-2.5 text-gray-700'
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XMarkIcon
                    className='h-6 w-6 text-white'
                    aria-hidden='true'
                  />
                </button>
              </div>
              <div className='mt-6 flow-root'>
                <div className='-my-6 divide-y divide-gray-500/10'>
                  <div className='space-y-2 py-6'>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className='-mx-3 block rounded-lg py-2 px-3 text-base leading-7 text-gray-400 hover:bg-gray-400/10'
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className='py-6'>
                    <a
                      href='#'
                      className='-mx-3 block rounded-lg py-2.5 px-3 text-base leading-6 text-gray-400 hover:bg-gray-400/10'
                    >
                      Sign Up
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </>
  );
}

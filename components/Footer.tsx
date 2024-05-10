import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import React from 'react';
import Logo from '@/components/Logo';
import Bounded from '@/components/Bounded';

const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle('settings');

  return (
    <Bounded as='footer'>
      <div className='flex flex-col items-center justify-between gap-6 sm:flex-row'>
        <Link href='/'>
          <Logo />
        </Link>

        <p className='text-xs'>&copy; {new Date().getFullYear()}</p>

        <ul className='flex'>
          {settings.data.navigation.map(({ link, label }) => (
            <li key={label}>
              <PrismicNextLink className='p-3' field={link}>
                {label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </Bounded>
  );
};

export default Footer;

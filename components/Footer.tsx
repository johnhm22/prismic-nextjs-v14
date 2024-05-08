import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import React from 'react';

const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle('settings');

  return (
    <footer>
      <Link href='/'> {settings.data.site_title}</Link>

      <p>&copy; {new Date().getFullYear()}</p>

      <ul>
        {settings.data.navigation.map(({ link, label }) => (
          <li key={label}>
            <PrismicNextLink field={link}>{label}</PrismicNextLink>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;

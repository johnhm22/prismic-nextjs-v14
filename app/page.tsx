import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle('homepage');

  // return (
  //   <section className='container border border-red-500 py-20 font-semibold'>
  //     Homepage - It worked!!
  //   </section>
  // );

  return <SliceZone slices={page.data.slices} components={components} />;
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle('homepage');

  return {
    title: page.data.meta_title,
    description: page.data.meta_description
  };
}

import { Content, isFilled } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicLink,
  PrismicRichText,
  SliceComponentProps
} from '@prismicio/react';

import Bounded from '@/components/Bounded';
import Heading from '@/components/Heading';

import { createClient } from '@/prismicio';
import { PrismicNextImage } from '@prismicio/next';

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as='h2' size='md' className='mb-9 text-center font-semibold'>
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className='mb-8 font-body text-xl font-normal text-slate-600 md:text-2xl'>
      {children}
    </p>
  )
};

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials = async ({
  slice
}: TestimonialsProps): Promise<JSX.Element> => {
  // console.log(slice.items);

  const client = createClient();

  const testimonials = await Promise.all(
    slice.items.map(item => {
      if (
        isFilled.contentRelationship(item.testimonial) &&
        item.testimonial.uid
      ) {
        return client.getByUID('testimonial', item.testimonial.uid);
      }
    })
  );

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={components} field={slice.primary.heading} />
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
        {testimonials.map(
          (item, idx) =>
            item && (
              <div
                key={idx}
                className='grid grid-cols-1 content-between rounded-lg border bg-white px-8 py-10 shadow-lg md:px-14 md:py-16'
              >
                <PrismicRichText
                  components={components}
                  field={item.data.quote}
                />
                <div className='flex items-center'>
                  <div>
                    <PrismicNextImage
                      field={item.data.avatar}
                      height={56}
                      width={56}
                      imgixParams={{ ar: '1:1', fit: 'crop' }}
                      className='mr-4 rounded-full'
                      alt=''
                    />
                  </div>
                  <div>
                    <p className='text-base font-medium text-slate-700'>
                      {item.data.name}
                    </p>
                    <p className='text-base text-slate-600'>
                      {item.data.job_title}
                    </p>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </Bounded>
  );
};

export default Testimonials;

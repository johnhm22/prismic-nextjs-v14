import { Content } from '@prismicio/client';
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps
} from '@prismicio/react';

import Bounded from '@/components/Bounded';
import Button from '@/components/Button';
import Heading from '@/components/Heading';

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading
      as='h1'
      size='xl'
      className='mb-4 mt-12 first:mt-0 last:mb-0 md:mb-8'
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className='max-w mb-4 max-w-md font-body text-2xl font-normal leading-10 text-slate-600 md:mb-8'>
      {children}
    </p>
  )
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <>
      {slice.variation === 'default' && (
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className='grid grid-cols-1 place-items-center text-center'>
            <PrismicRichText
              field={slice.primary.heading}
              components={components}
            />
            <PrismicRichText
              field={slice.primary.body}
              components={components}
            />
            <Button className='mb-8 md:mb-10' field={slice.primary.button_link}>
              {' '}
              <>{slice.primary.button_text}</>
            </Button>

            <PrismicNextImage
              field={slice.primary.image}
              className='w-full max-w-4xl drop-shadow-xl'
              alt=''
            />
          </div>
          {/* </section> */}
        </Bounded>
      )}
      {slice.variation === 'horizontal' && (
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className='grid grid-cols-1 place-items-center md:grid-cols-2'>
            <div className='grid h-fit grid-rows-[1fr,auto,auto]'>
              <PrismicRichText
                field={slice.primary.heading}
                components={components}
              />
              <PrismicRichText
                field={slice.primary.body}
                components={components}
              />
              <Button
                className='mb-8 md:mb-10'
                field={slice.primary.button_link}
              >
                {' '}
                <>{slice.primary.button_text}</>
              </Button>
            </div>

            <PrismicNextImage
              field={slice.primary.image}
              className='w-full max-w-4xl drop-shadow-xl'
              alt=''
            />
          </div>
          {/* </section> */}
        </Bounded>
      )}
    </>
  );
};

export default Hero;

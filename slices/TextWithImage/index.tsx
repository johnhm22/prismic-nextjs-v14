import { Content } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps
} from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

import Bounded from '@/components/Bounded';
import Heading from '@/components/Heading';
import clsx from 'clsx';

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as='h2' size='lg' className=''>
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className='max-w-md font-body text-lg text-slate-600'>{children}</p>
  )
};

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='grid place-items-center gap-8 md:grid-cols-2'>
        <PrismicNextImage
          field={slice.primary.image}
          className={clsx(
            'rounded-lg',
            slice.variation === 'imageRight' && 'md:order-2'
          )}
        />
        <div className='grid gap-4'>
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
          <PrismicRichText field={slice.primary.body} components={components} />
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;

import { Content } from '@prismicio/client';
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps
} from '@prismicio/react';

import Bounded from '@/components/Bounded';
import Heading from '@/components/Heading';
import Button from '@/components/Button';

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as='h2' size='sm' className='mb-4 text-center font-semibold'>
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className='mb-8 text-center text-slate-600'>{children}</p>
  )
};

/**
 * Props for `CallToAction`.
 */
export type CallToActionProps = SliceComponentProps<Content.CallToActionSlice>;

/**
 * Component for "CallToAction" Slices.
 */
const CallToAction = ({ slice }: CallToActionProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className='m-auto grid max-w-4xl place-items-center rounded-lg bg-gradient-to-tr from-cyan-50 via-white to-emerald-50 px-4 py-12 shadow-xl md:px-12'>
        <PrismicRichText
          field={slice.primary.heading}
          components={components}
        />
        <PrismicRichText field={slice.primary.body} components={components} />
        <Button field={slice.primary.button_link} className='mt-8'>
          <>{slice.primary.button_text}</>
        </Button>
      </div>
    </Bounded>
  );
};

export default CallToAction;

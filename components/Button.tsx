import React from 'react';
import { PrismicNextLink, PrismicNextLinkProps } from '@prismicio/next';
import clsx from 'clsx';

const Button = ({ className, ...restProps }: PrismicNextLinkProps) => {
  return (
    <PrismicNextLink
      className={clsx(
        'transition-color block w-fit rounded-full bg-cyan-700 px-12 py-3 font-display text-base font-bold tracking-wider text-white duration-200 ease-in-out hover:bg-cyan-800',
        className
      )}
      {...restProps}
    />
  );
};

export default Button;

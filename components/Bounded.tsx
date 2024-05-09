import React from 'react';
import clsx from 'clsx';

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

const Bounded = ({
  as: Comp = 'section',
  children,
  className,
  ...restProps
}: BoundedProps) => {
  return (
    <Comp
      className={clsx('px-4 py-10 md:px-6 md:py-14 lg:py-16', className)}
      {...restProps}
    >
      <div className='mx-auto w-full max-w-6xl'>{children}</div>
    </Comp>
  );
};

export default Bounded;

import { useController } from 'react-hook-form';
import { TTextFieldProps } from './types';
import { FC, ReactElement } from 'react';
import clsx from 'clsx';

export const TextField: FC<TTextFieldProps> = (props): ReactElement => {
  const { status = 'none', variant = 'md' } = props;
  const { field } = useController({
    ...props,
    rules: {
      required: props.required,
    },
  });

  const inputStatus = clsx(
    'rounded-lg disabled:bg-gray-200 disabled:text-gray-100 ',
    {
      'bg-gray-50 border border-gray-300 text-gray-900 focus:ring-primary-600 focus:border-primary-600 block ':
        status === 'none',
      'bg-red-50 border border-red-300 text-red-900 focus:ring-red-600 focus:border-red-600 block ':
        status === 'error',
    }
  );

  const inputVariant = clsx('w-full', {
    'p-3 text-lg': variant === 'lg',
    'p-2.5 text-md': variant === 'md',
    'p-2 text-sm': variant === 'sm',
  });

  const className = `${inputVariant} ${inputStatus}`;

  const labelClassName = clsx('font-medium text-gray-900 ', {
    block: props.label,
    hidden: !props.label,
  });

  return (
    <section className="flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-2">
        <label htmlFor={props.name} className={labelClassName}>
          {props.label}
        </label>
        <input {...{ ...props, ...field }} className={className} />
      </div>
    </section>
  );
};

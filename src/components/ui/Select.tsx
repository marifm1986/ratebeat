import React, { forwardRef } from 'react';
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}
export const Select = forwardRef<HTMLSelectElement, SelectProps>(({
  className = '',
  children,
  label,
  id,
  ...props
}, ref) => {
  return <div className="space-y-2">
        {label && <label htmlFor={id} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>}
        <select className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`} ref={ref} id={id} {...props}>
          {children}
        </select>
      </div>;
});
Select.displayName = 'Select';
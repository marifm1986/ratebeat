import React, { forwardRef } from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
  loading?: boolean;
  stepperForm?: boolean;
  currentStep?: number;
  totalSteps?: number;
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className = '',
  variant = 'default',
  size = 'default',
  asChild = false,
  loading = false,
  stepperForm = false,
  currentStep = 0,
  totalSteps = 3,
  disabled,
  children,
  onClick,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background';
  const variantStyles = {
    default: 'bg-gray-800 text-white hover:bg-gray-900',
    destructive: 'bg-red-500 text-white hover:bg-red-600',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
    ghost: 'hover:bg-gray-100 hover:text-gray-900',
    link: 'underline-offset-4 hover:underline text-gray-700'
  };
  const sizeStyles = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3 rounded-md',
    lg: 'h-11 px-8 rounded-md',
    icon: 'h-10 w-10'
  };
  const allClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${loading || stepperForm ? 'relative overflow-hidden' : ''}`;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (stepperForm) {
      // Handle stepper form navigation logic here
      console.log(`Navigating to step ${currentStep + 1} of ${totalSteps}`);
      // This would typically call a state update function to move to the next step
      // or open a modal with the stepper form
    }
    // Call the original onClick handler if provided
    if (onClick) {
      onClick(e);
    }
  };
  return <button className={allClasses} ref={ref} disabled={disabled || loading} aria-busy={loading} onClick={handleClick} {...props}>
        {stepperForm && <div className="absolute top-0 left-0 w-full h-2 bg-gray-200 rounded-t-md overflow-hidden">
            <div className="h-full bg-orange-500 transition-all duration-300" style={{
        width: `${(currentStep || 0) / (totalSteps || 1) * 100}%`
      }}></div>
          </div>}
        {loading && <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>}
        <span className={`${loading ? 'invisible' : ''} ${stepperForm ? 'mt-1' : ''}`}>
          {children}
        </span>
      </button>;
});
Button.displayName = 'Button';
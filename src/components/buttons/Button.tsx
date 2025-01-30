interface ButtonProps {
    label: string;
    action: (e:any) => void;
    type?: 'button' | 'submit';
    className?: string; // Optional prop to add additional styles to the button. Example: className="my-class"  // Optional prop to add additional styles to the button. Example: className="my-class"  // Optional prop to add additional styles to the button. Example: className="my-class"  // Optional prop to add additional styles to the button. Example: className="my-class"  // Optional prop to add additional styles to the button. Example: className="
    variant: 'primary' | 'secondary' | 'danger' | 'primary-outline' | 'danger-outline' | 'secondary-outline';
    disabled?: boolean; // Optional prop to disable the button. Example: disabled={true}  // Optional prop to disable the button. Example: disabled={true}  // Optional prop to disable the button. Example: disabled={true}  // Optional prop to disable the button. Example: disabled={true}  // Optional prop to disable the button. Example: disabled={true}  // Optional prop to disable the button. Example: disabled={true}  // Optional prop to disable
}

type ButtonVariants = {
    primary: string;
    secondary: string;
    danger: string;
    ['primary-outline']: string;
    ['secondary-outline']: string;
    ['danger-outline']: string;
}

export const Button = ({label, action, className, type, variant, disabled}: ButtonProps) => {

    const buttonVariants:ButtonVariants = {
        primary: 'border-primary bg-primary text-white hover:bg-primary-hover active:text-primary',
        secondary: 'bg-white text-primary',
        danger: 'bg-red-500 text-white',
        ['primary-outline']: 'border-primary text-primary',
        ['secondary-outline']: '',
        ['danger-outline']: 'border-red-500 text-red-500',
    }

    return (
        <button
            type={type || 'button'}
            className={`inline-block shrink-0 rounded-md border px-12 py-3 text-sm font-medium transition-all hover:cursor-pointer ${buttonVariants[variant]} focus:outline-none focus:ring  ${className}`}
            onClick={action}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

import { ChangeEvent, useId } from "react";

interface InputProps {
    label: string;
    type: string;
    value?: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    name: string;
    id?: string; // Required for accessibility (aria-label, aria-labelledby)
    className?: string; // Additional CSS class for styling purposes  // Optional prop to add additional styles to the input field. Example: className="my-class"  // Optional prop to add additional styles to the input field. Example: className="my-class"  // Optional prop to add additional styles to the input field. Example: className="my-class"  // Optional prop to add additional styles to the input field. Example: className="my-class"  // Optional prop
    placeholder?: string;
    checked?: boolean; // Optional prop to make the input field a checkbox. Example: checkbox={true}  // Optional prop to make the input field a checkbox. Example: checkbox={true}  // Optional prop to make the input field a checkbox. Example: checkbox={true}  // Optional prop to make the input field a checkbox. Example: checkbox={true}  // Optional prop to make the input field a checkbox. Example: checkbox={true}  // Optional prop to make
}

export const Input = ({ id, label, type, value, onChange, name, className, placeholder, checked }: InputProps) => {
    const generatedId = useId(); // Genera un ID único
    const inputId = id || generatedId; // Usa el ID proporcionado o el generado
    const customClass = className || ''; // Optional prop to add additional styles to the input field. Example: className="my-class"
    const isCheckbox = type === 'checkbox'

    return (
        <div className={`w-full flex gap-1 ${isCheckbox ? 'items-center flex-row-reverse justify-end' : 'flex-col'} ${customClass}`}>
            <label 
                htmlFor={inputId}
                className={`block text-sm ${isCheckbox ? '' : 'font-medium text-gray-700'}`}
            >
                {label}
            </label>
            <input
                id={id}
                aria-label={`Cuadro de entrada para colocar ${label}`}
                type={type}
                name={name}
                className={` py-2.5 px-2.5 ${!isCheckbox && 'w-full'} rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm`}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                checked={checked}
            />
        </div>
    );
};

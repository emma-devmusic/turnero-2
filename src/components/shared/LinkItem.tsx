import { Link } from "react-router-dom";

interface LinkItemProps {
    to: string;
    children: React.ReactNode;
    variant?: "navbar" | "sidebar" | "text"; // Variantes
    className?: string;
}

export const LinkItem: React.FC<LinkItemProps> = ({ to, children, variant = "text", className }) => {
    const variantStyles = {
        navbar: "text-white font-bold px-4 py-2",
        sidebar: "text-gray-300 block px-3 py-1",
        text: "text-gray-700 underline hover:text-primary-hover",
    };
    const variantClass = variantStyles[variant];
    return (
        <Link
            to={to}
            className={`${variantClass} ${className}`}
        >
            {children}
        </Link>
    );
};

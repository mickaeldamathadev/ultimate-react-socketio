import { InputHTMLAttributes } from 'react';
export default function Select({ name, options, placeholder, ...props }: {
    options?: {
        value: string | boolean;
        title: string;
    }[];
} & InputHTMLAttributes<HTMLSelectElement>): import("react/jsx-runtime").JSX.Element;

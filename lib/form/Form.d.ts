import { InputHTMLAttributes, ReactNode } from 'react';
interface TagElement {
    select: boolean;
    options?: {
        value: string;
        title: string;
    }[];
}
declare module 'react' {
    interface HTMLAttributes<T> extends TagElement {
        select?: boolean;
        options?: {
            value: string;
            title: string;
        }[];
    }
}
export default function Form(props: {
    children?: ReactNode;
    bottom?: ReactNode;
    onSubmission: any;
    onChange?: any;
    formData?: InputHTMLAttributes<HTMLInputElement | HTMLSelectElement>[];
    submitTitle?: string;
}): import("react/jsx-runtime").JSX.Element;
export declare function FormFrame(props: {
    children?: ReactNode;
    onSubmission: any;
    onChange?: any;
}): import("react/jsx-runtime").JSX.Element;
export {};

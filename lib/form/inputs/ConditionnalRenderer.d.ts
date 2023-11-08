import { ReactNode } from "react";
interface ConditonnalRendererProps {
    dependOn: string;
    children: ReactNode;
    condition?: (data: any) => boolean;
}
export default function ConditonnalRenderer({ dependOn, children, condition, }: ConditonnalRendererProps): import("react/jsx-runtime").JSX.Element;
export {};

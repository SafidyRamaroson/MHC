"use client";

import { cn } from "@/utils/tailwind";
import Link from "next/link";

type Props = {
    items: {
        label: string;
        url: string;
    }[],
    showSidebar?: boolean;
}

export function MenuItems({ items, showSidebar = false }: Props) {
    return (
        <ul className={cn("flex flex-row items-center gap-4", { "flex-col gap-y-4 items-start pl-8": showSidebar })}>
            {items.map((item, index) => (
                <li key={index} className="text-title">
                    <Link href={item.url}>{item.label}</Link>
                </li>
            ))}
        </ul>
    );
}
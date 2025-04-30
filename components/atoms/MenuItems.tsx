"use client";

import Link from "next/link";

type Props = {
    items: {
        label: string;
        url: string;
    }[]
}

export function MenuItems({ items }: Props) {
    return (
        <ul className="flex flex-row items-center gap-4">
            {items.map((item, index) => (
                <li key={index} className="text-title">
                    <Link href={item.url}>{item.label}</Link>
                </li>
            ))}
        </ul>
    );
}
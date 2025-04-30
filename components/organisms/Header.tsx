"use client";

import { menu } from "@/data";
import { ContactUsButton, Logo, MenuItems } from "../atoms";

export function Header() {

    return <div className="sticky top-0 flex flex-row items-center justify-between md:w-full md:px-4 lg:px-0 lg:w-5/6 bg-transparent backdrop-blur-sm mx-auto py-4">
        <Logo />
        <MenuItems
            items={menu}
        />
        <ContactUsButton />
    </div>
}
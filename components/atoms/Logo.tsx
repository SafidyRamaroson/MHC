"use client";

import LogoSvg from "@/public/assets/Logo.svg";
import Image from "next/image";

export function Logo(){
    return(
        <Image src={LogoSvg} width={186} height={45} alt="Logo Image"/>
    )
}
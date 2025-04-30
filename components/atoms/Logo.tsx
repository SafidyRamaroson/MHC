"use client";

import Image from "next/image";
import LogoImg from "@/public/assets/logo.png";


export function Logo(){
    return(
        <Image src={LogoImg} alt="Logo Image" width={40} height={30} className="rounded-full"/>
    )
}
"use client";

import { Button } from "../ui/button";
import Image from "next/image";

export function HeroSection() {
    const heroImgs = [
        {
            img: "/assets/hero4.svg",
            alt: "image-4",
            bgColor: "bg-primary-green"
        },
        {
            img: "/assets/hero3.svg",
            alt: "image-3",
            bgColor: "bg-secondary-pinkMedium"
        },
        {
            img: "/assets/hero1.svg",
            alt: "image-1",
            bgColor: "bg-primary-greenLight"
        },
        {
            img: "/assets/hero2.svg",
            alt: "image-2",
            bgColor: "bg-secondary-pinkLight"
        },
    ]
    return (
        <div className="w-5/6 h-fit grid grid-cols-1 md:grid-cols-2 mx-auto py-[100px] gap-4 ">
            <div className="flex flex-col justify-center">
                <h1 className="max-sm:text-lg">Find Your Path to Emotional Wellness <br/>Today</h1>
                <p className="mt-[30px]">Find Your Path to Emotional Wellness Today
                We believe in creating a safe, supportive space for individuals seeking mental and emotional healing
                </p>
                <Button className="bg-primary-green text-white mt-[40px] w-fit shadow-sm">Book Appointment</Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {heroImgs.map((heroImg,idx) => <div className={"border h-[300px] max-sm:h-[250px] rounded-xl flex items-end justify-center " + heroImg.bgColor} key={idx}>
                    <Image src={heroImg.img} alt={heroImg.alt} height={140} width={100} className="w-5/6 object-cover"/>
                </div>)}
            </div>
        </div>
    )
}
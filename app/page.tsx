"use client";

import { BenefitsSectionTemplate } from "@/components/templates/BenefitsSectionTemplate";
import { FooterSectionTemplate } from "@/components/templates/FooterSectionTemplate";
import { HeroTemplate } from "@/components/templates/HeroTemplate";
import { LittleMHTStatsListTemplate } from "@/components/templates/LittleMHTStatsListTemplate";
import { OurServicesTemplate } from "@/components/templates/OurServicesTemplate";
import { OurTeamSectionTemplate } from "@/components/templates/OurTeamSectionTemplate";
import { ScheduleSectionTemplate } from "@/components/templates/ScheduleSectionTemplate";
import { TestimonialsSectionTemplate } from "@/components/templates/TestimonialsSectionTemplate";
import { TherapySectionTemplate } from "@/components/templates/TherapySectionTemplate";
import { WhyChooseUsSectionTemplate } from "@/components/templates/WhyChooseUsSectionTemplate";

export default function IndexPage() {
    return (
        <>
            <HeroTemplate />
            <LittleMHTStatsListTemplate />
            <OurServicesTemplate />
            <BenefitsSectionTemplate />
            <WhyChooseUsSectionTemplate />
            <TherapySectionTemplate />
            <OurTeamSectionTemplate />
            <TestimonialsSectionTemplate />
            <ScheduleSectionTemplate />
            <FooterSectionTemplate />
        </>          
    )
}
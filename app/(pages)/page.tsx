'use client'
import HeroSection from "../components/HeroSection";
import React from "react";
import { Suspense } from "react";
import AboutSection from "../components/AboutSection";
import OfferSection from "../components/OfferSection";
import ServiceSection from "../components/ServiceSection";
import CounterArea from "../components/CounterArea";
import WhyChooseUs from "../components/WhyChooseUs";
import PricingPlan from "../components/PricingPlan";
import Testimonials from "../components/Testimonials";
export default function HomePage() {

    return(
        <>
            <Suspense>
            <HeroSection />
            </Suspense>
            <AboutSection/>
            <OfferSection />
            <ServiceSection />
            <CounterArea />
            <WhyChooseUs />
            <PricingPlan />
            <Testimonials />
            </>
    )
}
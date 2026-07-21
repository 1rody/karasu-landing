'use client';

import Link from "next/dist/client/link";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const cards = [
    {
        title: "Red Team",
        text: "We simulate real attacks to expose vulnerabilities before an intruder finds them.",
    },
    {
        title: "Blue Team",
        text: "Active defense that monitors, detects and neutralizes threats across your infrastructure in real time.",
    },
    {
        title: "Penetration Test",
        text: "Intrusion tests that find and prove exploitable flaws in your systems.",
    },
    {
        title: "SOC Operations",
        text: "24/7 monitoring of your environment, with continuous threat detection and response.",
    },
    {
        title: "Intel",
        text: "Actionable threat intelligence that anticipates risks and maps who, how and why they attack you.",
    },
    {
        title: "Risk Assessment",
        text: "A full assessment of your risks, prioritizing what truly matters to protect first.",
    },
    {
        title: "Security Research",
        text: "Cutting-edge research into new flaws and techniques to keep you one step ahead.",
    },
    {
        title: "Incident Response",
        text: "Fast incident response: containment, investigation and recovery to reduce impact.",
    },
];

const CARD_BG_DARK = "/assets/backgrounds/CardDark.svg";
const CARD_BG_LIGHT = "/assets/backgrounds/CardLight.svg";

const swiperBreakpoints = {
    0: { slidesPerView: 1.3, spaceBetween: 12 },
    640: { slidesPerView: 2.5, spaceBetween: 16 },
    1024: { slidesPerView: 5, spaceBetween: 20 },
};

export default function Featured() {

    const renderSlides = (bg: string) =>
        cards.map((card, index) => (
            <SwiperSlide key={index}>
                <div className="@container relative w-full aspect-[7/4] rounded-2xl overflow-hidden ">
                    <img
                        src={bg}
                        alt="Card Image"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="relative z-10 flex flex-col justify-end h-full p-[7cqw] text-left">
                        <h3 className="text-[7.5cqw] font-bold leading-tight text-(--foreground) line-clamp-1">
                            {card.title}
                        </h3>
                        <p className="mt-[2cqw] text-[3.5cqw] leading-snug text-(--foreground)/80 line-clamp-3 min-h-[10.5cqw]">
                            {card.text}
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        ));

    return (
        <>
            <section id="services" className=" w-full overflow-hidden items-center flex flex-col">
                    <img className=" dark:hidden w-full" width={100000} height={32} src="/assets/backgrounds/transition_dark.svg" alt="Hero Crow" />
                    <img className="hidden dark:block w-full" width={100000} height={32} src="/assets/backgrounds/transition_light.svg" alt="Hero Crow" />
                <div className="flex flex-col -mt-3 sm:-mt-10 md:-mt-25 z-10 p-6 md:p-10 w-full text-left bg-(--foreground)">
                    <div className="flex flex-col md:flex-row mb-16 md:mb-40 gap-8 md:gap-4 w-full p-2 md:p-5 justify-around ">
                        <h2 className="text-(--background) text-2xl font-bold text-center md:text-left">WHAT WE OPERATE</h2>
                        <div className="flex gap-2 justify-center items-center">
                        <img src="/assets/misc/assets-2.svg" alt="karasu" width={120} height={32} className="dark:invert-100 mb-24 select-none hidden md:flex lg:flex" />
                            <div>
                                <p className="text-(--background) text-base sm:text-lg md:text-xl text-center md:text-right font-bold">
                                    Offensive and defensive operations that shield your company before, during and <br className="hidden md:block" /> after every attack.
                                </p>
                                <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-5 mt-6 md:mt-10">
                                    <button className="primary-btn"><Link href="#contact">BOOK A BRIEFING </Link></button>
                                    <Link className="tertiary-btn font-bold" href="#about">SEE MORE →</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 md:gap-10 mb-20 md:mb-50">
                        <div className="swipe-container dark:hidden flex">
                            <Swiper
                                modules={[Autoplay]}
                                slidesPerView={5}
                                spaceBetween={20}
                                breakpoints={swiperBreakpoints}
                                loop={true}
                                grabCursor={true}
                                autoplay={{ delay: 2000, disableOnInteraction: false }}
                                className="mySwiper"
                            >
                                {renderSlides(CARD_BG_LIGHT)}
                            </Swiper>
                        </div>
                        <div className="swipe-container dark:flex hidden flex">
                            <Swiper
                                modules={[Autoplay]}
                                slidesPerView={5}
                                spaceBetween={20}
                                breakpoints={swiperBreakpoints}
                                loop={true}
                                grabCursor={true}
                                autoplay={{ delay: 2000, disableOnInteraction: false }}
                                className="mySwiper"
                            >
                                {renderSlides(CARD_BG_DARK)}
                            </Swiper>
                        </div>
                    </div>
                </div>
                    <img className=" dark:hidden -mt-4 sm:-mt-12 md:-mt-20 z-2 relative w-full" width={1000} height={52} src="/assets/backgrounds/transition_dark.svg" alt="Hero Crow" />
                    <img className="hidden dark:block -mt-4 sm:-mt-12 md:-mt-20 z-2 relative w-full" width={1000} height={52} src="/assets/backgrounds/transition_light.svg" alt="Hero Crow" />
            </section>
        </>
    )
}
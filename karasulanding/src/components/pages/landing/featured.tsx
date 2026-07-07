'use client';

import Link from "next/dist/client/link";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


export default function Featured() {

    const cards = [1, 2, 3, <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTE8ay_bHBVrLjPbCq6iUYGM6YM9mRrFm_oQSVLT3iw&s=10" alt="Card Image" />, 5, 6, 7, 8];

    return (
        <>
            <section className="h-screen w-full overflow-hidden items-center flex flex-col">
                    <img className=" dark:hidden" width={4000} height={32} src="/assets/backgrounds/transition_dark.svg" alt="Hero Crow" />
                    <img className="hidden dark:block" width={4000} height={32} src="/assets/backgrounds/transition_light.svg" alt="Hero Crow" />
                <div className="flex flex-col -mt-25  p-10 h-screen w-full text-left bg-(--foreground)">
                    <div className="flex gap-4 w-full justify-around items-center">
                        <h2 className="text-black text-2xl font-bold">WHAT WE OPERATE</h2>
                        <div className="flex gap-4 justify-center gap-5 items-center">
                            <img src="/assets/icons/LogoDark.svg" alt="karasu" width={120} height={32} className="dark:hidden" />
                            <div class flex flex-col text-end items-end gap-5> 
                                    <img src="/assets/icons/LogoDark.svg" alt="karasu" width={120} height={32} className="dark:hidden" />
                                    <p className="text-black text-2xl font-bold">
                                        Lorem ypsun salut nomet drosdon hepets, nomis inup
                                    </p>
                                    <div className="flex items-center gap-5 mt-10">
                                        <button className="primary-btn"><Link href="/get-started">BOOK A BRIEFING </Link></button>
                                        <Link className="secondary-btn font-bold" href="/get-started">SEE MORE →</Link>
                                    </div>
                            </div>
                        </div>
                    </div>
                        <div className="swipe-container flex">
                            <Swiper
                                modules={[Autoplay]}
                                slidesPerView={5}
                                spaceBetween={20}
                                loop={true}
                                grabCursor={true}
                                autoplay={{ delay: 2000, disableOnInteraction: false }}
                                className="mySwiper"
                            >
                                {cards.map((card, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="h-64 bg-slate-800 text-white flex items-center justify-center rounded-2xl text-6xl font-black shadow-lg select-none border border-slate-700">
                                            {card}
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                </div>
            </section>
        </>
    )
}


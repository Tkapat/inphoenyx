'use client'

import { ubuntu, ubuntulight, ubuntubold, leckerli, ubuntumd, audiowide, poiret } from "@/app/fonts";
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useRouter } from "next/navigation";
import { FullPage } from "../components/Animations";
import GlassSurface from "../components/GlassSurface";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scroll_Delay = 1000;

const projectdata = [
    {
        id: 1,
        sectionNumber: "01",
        title: "V I D Y A",
        link: "https://vidya-rouge.vercel.app/",
        description: "A smart School management system",
        tech_stack: "Projects",
        features: ""
    },

];


export default function Projects() {

    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const touchStart = useRef(0);
    const changeSection = (direction: 'next' | 'prev') => {
        if (isScrolling) return;

        if (direction === 'next' && activeIndex === projectdata.length - 1) return;
        if (direction === 'prev' && activeIndex === 0) return;

        setIsScrolling(true);
        setActiveIndex((prev) => {
            if (direction === 'next' && (projectdata[activeIndex].id < projectdata.length + 1)) {
                return prev < projectdata.length ? prev + 1 : prev;
            } else {
                return prev > 0 ? prev - 1 : prev;
            }
        });
        setTimeout(() => setIsScrolling(false), Scroll_Delay);
    };


    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaY) > 50) {
                changeSection(e.deltaY > 0 ? 'next' : 'prev');
            }
        }
        const handleTouchStart = (e: TouchEvent) => {
            touchStart.current = e.touches[0].clientY;
        };
        const handleTouchEnd = (e: TouchEvent) => {
            const touchEnd = e.changedTouches[0].clientY;
            const diff = touchStart.current - touchEnd;
            if (Math.abs(diff) > 20) {
                changeSection(diff > 100 ? 'next' : 'prev');
            }
        };
        const handleTouchMove = (e: TouchEvent) => {
            e.preventDefault();
        };

        window.addEventListener('wheel', handleWheel);
        window.addEventListener('touchstart', handleTouchStart, { passive: false });
        window.addEventListener('touchend', handleTouchEnd, { passive: false });
        window.addEventListener('touchmove', handleTouchMove);

        return () => {
            window.removeEventListener('wheel', handleWheel);
            window.removeEventListener('touchstart', handleTouchStart);
            window.removeEventListener('touchend', handleTouchEnd);
            window.removeEventListener('touchmove', handleTouchMove);
        };
    }, [isScrolling, activeIndex]);
    return (
        <div className=" bg-[#000] h-screen w-screen ">
            <section>
            <FullPage className=" h-screen w-screen flex items-center justify-center fixed text-black bg-black z-0 " >
                <video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full  object-cover opacity-40 z-0">
                    <source src="/cosmos.mp4" type="video/mp4" />
                </video>
                <div className=" h-screen w-screen justify-center items-center flex " >

                    <div key={activeIndex} className="h-[70%] lg:h-[90%] md:h-[90%] sm:h-[80%] w-[90%] -top-10 sm:-top-10 md:top-0 lg:top-0 backdrop-blur-[10px] border-[1px] border-white/50 rounded-[10px] flex  p-2  snap-start touch-none z-0 relative" >
                        <div className={`${audiowide.className} w-full flex fixed justify-center text-[1.5rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2rem] text-white `}>
                            <div  className="  px-5 py-2 " >
                                {projectdata[activeIndex].title}
                            </div>
                        </div>
                        <div className={`${poiret.className}  flex  fixed top-15 sm:top-15 md:top-18 lg:top-18 w-full justify-center text-[12px] sm:text-[12px] md:text-[16px] lg:text-[16px] text-white `}>
                            {projectdata[activeIndex].description}
                        </div>
                    </div>
                </div>
            </FullPage>
            </section>
        </div>
    );
}
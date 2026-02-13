'use client';
import { ubuntu, ubuntulight, ubuntubold, leckerli, ubuntumd, audiowide, poiret } from "@/app/fonts";
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, easeIn, hover } from 'framer-motion';
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import { AnimFromStart, AnimFromEnd, AnimLine,Rotate } from "./Animations";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const Scroll_Delay = 1000;

gsap.registerPlugin(SplitText);

const sectionsData = [
    {
        id: 1,
        sectionNumber: "01",
        title_p_1: "Computer",
        title_p_2: "Science",
        box_1: "Pursuing my degree in Computer Sceince & Engineering",
        box_2: "Projects"
    },
    {
        id: 2,
        sectionNumber: "02",
        title_p_1: "Space",
        title_p_2: "Science",
        box_1: "Passionate about knowing about space & astronomy. Pursuing a Minor degree in Astronomy.",
        box_2: "Projects"
    },
    {
        id: 3,
        sectionNumber: "03",
        title_p_1: "Sketch",
        title_p_2: "Painting",
        box_1: "Hyperrealism is my favourite about making sketches.",
        box_2: "Sketches"
    }
];



// --- 2. THE RENDER COMPONENT ---
export default function SectionLayout() {
    const router = useRouter();
    const [isHovered,setIsHovered]=useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const touchStart = useRef(0);
    const changeSection = (direction: 'next' | 'prev') => {
        if (isScrolling) return;

        if (direction === 'next' && activeIndex === sectionsData.length - 1) return;
        if (direction === 'prev' && activeIndex === 0) return;

        setIsScrolling(true);
        setActiveIndex((prev) => {
            if (direction === 'next' && (sectionsData[activeIndex].id < sectionsData.length + 1)) {
                return prev < sectionsData.length ? prev + 1 : prev;
            } else {
                return prev > 0 ? prev - 1 : prev;
            }
        });
        setTimeout(() => setIsScrolling(false), Scroll_Delay);
    };


    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (Math.abs(e.deltaY) > 70) {
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
        <motion.div className="z-60">
            <motion.div
                layout
                layoutId="loader-circle"
                className="fixed bottom-40  h-16 right-20 z-50 flex items-center justify-center cursor-pointer transition-transform"

            >
            </motion.div>
            <AnimatePresence >
                <div
                    key={activeIndex}

                    className="h-screen w-screen flex items-center justify-center fixed  snap-start touch-none"


                >
                    <div className=" flex  items-center relative  justify-center z-50 top-[-70]  ">
                        <div className="grid h-20 gap-x-3 grid-cols-2 grid-cols-[50%_50%] w-[17rem] md:w-[30rem] lg:w-[38rem] text-[2rem]  relative sm:text-[2rem] md:text-[4rem] lg:text-[4rem]  " >
                            <AnimFromEnd trigger={activeIndex} className={`${poiret.className} text-white  
                                flex justify-end items-center  `} >
                                {sectionsData[activeIndex].title_p_1}
                            </AnimFromEnd>
                            <div className={`${ubuntulight.className} text-white text-[9px] sm:text-[10px] md:text-[10px] lg:text-[13px] flex   justify-center items-center  `} >
                                <button onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} onClick={() => router.push(`/${sectionsData[activeIndex].box_2}`)} className=" cursor-pointer border-[1px] border-white w-[4rem] sm:w-[4rem] md:w-[4.5rem] lg:w-[4.5rem]  h-[1rem] sm:h-[1rem] md:h-[1.3rem] lg:h-[1.3rem] rounded-[5px] flex items-center justify-center ">
                                    {sectionsData[activeIndex].box_2}
                                    <Rotate  trigger={isHovered} ><FaArrowRightLong size={10} className=" ml-1 -rotate-45 " /></Rotate>
                                </button>
                            </div>
                            <AnimLine className={`${ubuntulight.className} text-white/60 text-[9px] sm:text-[10px] md:text-[10px] lg:text-[14px] text-right flex justify-end items-center  `} >
                                {sectionsData[activeIndex].box_1}
                            </AnimLine>
                            <AnimFromStart trigger={activeIndex} className={`${leckerli.className} text-white left-0 flex justify-start items-center `} >
                                {sectionsData[activeIndex].title_p_2}
                            </AnimFromStart>
                        </div>
                    </div>
                </div>
            </AnimatePresence>
        </motion.div>
    );
};


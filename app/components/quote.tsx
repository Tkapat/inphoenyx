'use client'
import { ubuntu, ubuntulight, ubuntubold, leckerli, ubuntumd, poiret } from "@/app/fonts";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";

export default function Quote() {
    return (
        <div className="flex relative " >
            <div className={` ${poiret.className} text-white relative text-[2rem] sm:text-[2rem] md:text-[4rem] lg:text-[4rem] rotate-[-90deg]   `}>
                exploring
            </div>
            <div className={`${poiret.className} text-white relative text-[3rem] md:text-[5rem] lg:text-[5rem] right-14 sm:right-14 sm:right-14 md:right-25 lg:right-25 top-5 sm:top-5 md:top-13 lg:top-13  `} >
                life
            </div>
            <div className={`${poiret.className} text-white relative text-[1.5rem] md:text-[3rem] lg:text-[3rem] top-17 md:top-31.5 lg:top-31.5 right-27 md:right-48 lg:right-48 `}>
                <span className={`${poiret.className} text-white text-[1rem] sm:text-[1rem] md:lg:text-[2rem] lg:text-[2rem] mr-1 sm:mr-1 md:mr-2 lg:mr-2 `} >
                    &
                </span>
                Universe
            </div>
        </div>
    )
}
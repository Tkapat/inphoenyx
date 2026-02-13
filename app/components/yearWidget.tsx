"use client"
import { useEffect, useState } from "react";
import GlassSurface from "./GlassSurface";
import { ubuntu, ubuntulight, ubuntubold, leckerli, ubuntumd,audiowide } from "@/app/fonts";


export default function YearWidget() {
    const [year, setYear] = useState<number | string>("");
    useEffect(() => {
        const updateYear = () => {
            const now = new Date();
            const curYear=now.getFullYear();
            setYear(curYear);
        };
        updateYear();
        const interval = setInterval(updateYear, 60000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className={`${audiowide.className} fixed z-50 
        text-transparent [-webkit-text-stroke:0.5px_white] text-[25px] sm:text-[25px] md:text-[40px] lg:text-[40px] 
         flex items-center justify-center rounded-[2rem]`} >
        <div className="rotate-[-90deg] translate-x-7 sm:translate-x-7 lg:translate-x-10 md:translate-x-10  scale-x-55 " >YEAR</div>
        <span className="tracking-wider scale-y-250">
            {year}
        </span>
        </div>
    );
}
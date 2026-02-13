"use client"
import { useEffect, useState } from "react";
import GlassSurface from "./GlassSurface";

export default function CurTime() {
    const [time, setTime] = useState("");
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(
                now.toLocaleTimeString("en-IN", {
                    timeZone: "Asia/Kolkata",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })
                
            );
            const year=now.getFullYear;
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <GlassSurface className="fixed z-50 
        text-white text-[10px] sm:text-[9px] md:text-[10px] lg:text-[12px]  h-6
         w-23 lg:w-28 sm:w-20 md:w-25 
         flex items-center justify-center rounded-[2rem] ">
        <span className="tracking-wider">
            {time} IST
        </span>
        </GlassSurface>
    );

}
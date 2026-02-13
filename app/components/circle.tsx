'use client'
import { ubuntu, ubuntulight, ubuntubold, leckerli, ubuntumd, audiowide, poiret } from "@/app/fonts";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, easeIn } from 'framer-motion';
import gsap from 'gsap';

export default function LoaderCircle({ progress }: { progress: number }) {
    const circleRef = useRef<SVGCircleElement>(null);

    const radius = 45;
    const circumference = 2 * Math.PI * radius;
    useEffect(() => {
        if (!circleRef.current) return;
        gsap.to(circleRef.current, {
            strokeDashoffset:
                circumference - (progress / 100) * circumference,
            duration: 0.4,
            ease: "power2.out"
        });
    }, [progress, circumference]);

    return (
        <svg width="120" height="120" viewBox="0 0 100 100" className=" -rotate-90 " >
            
            <circle
            
                ref={circleRef}
                cx="50"
                cy="50"
                r={radius}
                stroke="white"
                strokeWidth="1"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
            />
        </svg>
    )
}
import { ubuntu, ubuntulight, ubuntubold, leckerli, ubuntumd, poiret } from "@/app/fonts";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState,useRef } from "react";
import LoaderCircle from "./circle";

interface Props {
    onComplete: () => void;
}

export default function LoadingPage({ onComplete }: Props) {
    const [counter, setCounter] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCounter((prev) => {
                if (prev < 100) return prev + 1;
                clearInterval(interval);
                return 100;
            });
        }, 10);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (counter === 100) {
            onComplete();
        }
    }, [counter, onComplete]);
    const circle=useRef(null);
    useGSAP(()=>{
        gsap.fromTo(circle.current,{opacity:0,scale:0.5},
            {opacity:1,scale:1,duration:1.5})
    });
    return (
        <div className="w-screen h-screen fixed z-9999 bg-[#001f3a] items-center flex text-white justify-center"

        >
           
            <div className="relative z-10 flex items-center justify-center">
                <LoaderCircle progress={counter}/>
                <div className={`fixed ${poiret.className} text-[32px] text-white `} >
                    {counter}%
                </div>
            </div>
        </div>
    );
}
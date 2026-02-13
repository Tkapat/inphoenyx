"use client";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { ubuntu,ubuntulight } from "@/app/fonts";


export default function About({ show, close }: { show: boolean; close: () => void }) {
    const [disp, setDisp] = useState(show);

    useEffect(() => {
        setDisp(show);
    }, [show]);
    const [closing, setClosing] = useState(false);
    if (!disp) return null;

    return (
        <div className={` fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9999] flex flex-col justify-center items-center  w-[40rem] h-[25rem] rounded-2xl bg-white/10 backdrop-blur-2xl p-10  
        ${closing ? "animate-popclose" : "animate-pop"}`} style={{ borderRadius: '1.5rem', borderWidth: '1px', borderColor: '#807F7F' }}>
            <div className={`${ubuntu.className} text-[3rem] text-[#FFAE0B] mb-2`} >About Me</div>
            <div className="mt-5 mb-10">
                <p className={` text-white  leading-relaxed`}>
                    I&apos;m Tirthadeep Kapat, a Computer Science and Engineering student with a deep interest in space technology and software development.
                    I work with website and app development, and I&apos;ve got hands-on experience in C, Python, TypeScript, Next.js, and React Native.
                    Outside of code, I love creating hyper-realistic sketches—it&apos;s my way of blending logic with imagination.
                    I&apos;m someone who genuinely admires the universe and stays thankful for life, always curious about what&apos;s out there and what&apos;s next.
                </p>
            </div>
            <div>
                <button onClick={() => {
                    setClosing(true);
                    setTimeout(() => {
                        close();
                        setClosing(false);
                    }, 500);
                }
                }
                    className="axnbutton"><IoClose size={20} /></button>
            </div>
        </div>
    );
}

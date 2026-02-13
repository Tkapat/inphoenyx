'use client';
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import GlassSurface from "./GlassSurface";
import GlassElements from "./GlassElements";
import About from "./about";
import { ubuntu, ubuntulight, ubuntubold, leckerli, ubuntumd } from "@/app/fonts";
import {motion, AnimatePresence} from 'framer-motion';


export default function Sidebar() {
    const [show, setShow] = useState(false);

    return (
        <>
            <GlassSurface width={320} height={64} borderRadius={32} className="z-50  ">
                <div className=" flex flex-row gap-6 items-center  justify-center  backdrop-blur-[1rem] rounded-[32] w-[320] h-[64]   p-6 z-50 " >
                    
                    <button
                
                        className=" sidebutton  flex items-center justify-center backdrop-blur-1xl " >
                        <GlassElements width={80} borderRadius={24} height={48} className="z-50 ">
                            <div className={` ${ubuntulight.className} w-[80] h-[48] relative text-white/70 flex items-center justify-center rounded-[24]  `} style={{ filter: 'drop-shadow(0px 4px 0.5px rgba(0,0,0,0.9)' }} >
                                About
                            </div>
                        </GlassElements>

                    </button>

                    <button
                        className=" sidebutton  flex items-center justify-center backdrop-blur-1xl" >
                        <GlassElements width={80} borderRadius={24} height={48} blur={10} className="z-50">
                            <div className="` ${ubuntulight.className} w-[80] h-[48] relative text-white/70 flex items-center justify-center rounded-[24]  " style={{ filter: 'drop-shadow(0px 4px 0.5px rgba(0,0,0,0.9)' }} >
                                Projects
                            </div>
                        </GlassElements>
                    </button>
                    <button
                        className=" sidebutton  flex items-center justify-center backdrop-blur-1xl " >
                        <GlassElements width={80} borderRadius={24} height={48} className="z-50">
                            <div className="` ${ubuntulight.className} w-[80] h-[48] relative text-white/70 flex items-center justify-center rounded-[24]  " style={{ filter: 'drop-shadow(0px 4px 0.5px rgba(0,0,0,0.9)' }} >
                                Gallery
                            </div>
                        </GlassElements>
                    </button>

                </div>
            </GlassSurface>
            {show && (
                <div className="fixed inset-0 backdrop-blur-md bg-black/30 z-[500]"></div>
            )}
            <About
                show={show}
                close={() => setShow(false)}
            />
        </>
    );
}

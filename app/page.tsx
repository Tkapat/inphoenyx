'use client'
import { ubuntu, ubuntulight, ubuntubold, leckerli, ubuntumd, audiowide, poiret } from "@/app/fonts";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import Sidebar from "./components/sidebar";
import InfoBox from "./components/infobox";
import About from "./components/about";
import { useState, useEffect } from "react";
import CurTime from "./components/time";
import YearWidget from "./components/yearWidget";
import Quote from "./components/quote";
import SectionLayout from "./components/SectionLayout";
import LoadingPage from "./components/loadingPage";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  

  return (

    <div className="body fixed h-screen w-screen custom-scrollbar z-0">
      <LayoutGroup>
        { isLoading && <LoadingPage key="loader" onComplete={()=>setIsLoading(false)} />}
          <SectionLayout  />
      </LayoutGroup>
      <video autoPlay loop muted playsInline className="fixed inset-0 w-full h-full  object-cover opacity-30 z-10">
        <source src="/earth.mp4" type="video/mp4" />
      </video>
      <div className="fixed flex bottom-10 lg:bottom-10  items-center left-1/2 -translate-x-1/2 z-90 ">
        <Sidebar />
      </div>
      <div className="fixed z-50 text-white text-[1.5rem] left-5 top-4 ">
        <div className={ubuntubold.className} >Tirtha<span className={ubuntulight.className}><i>deep</i></span></div>
      </div>
      <div className="fixed z-50 text-white text-[10px]  flex items-center justify-center rounded-[2rem] top-6 
                      right-5   ">
        <div className={`${ubuntulight.className} text-white/50`} ><CurTime /></div>
      </div>
      <div className="fixed z-60  top-20 lg:top-30 md:top-30 sm:top-20 right-46 lg:left-20 md:left-50 sm:right-30 opacity-35
                         ">
        <div className={`${ubuntulight.className} text-white`} ><YearWidget /></div>
      </div>

      <div className="fixed bottom-38 sm:bottom-35 md:bottom-25 lg:bottom-25  left-[-20] sm:left-[-20] md:left-[-65] lg:left-[-65] z-50 opacity-30  " >
        <Quote />
      </div>
    </div>
  );
}

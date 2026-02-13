"use client";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { animFromStart, animFromEnd,animLine ,rotate,fullPage} from "./animtions";
import { OnHoverStartEvent } from "framer-motion";

gsap.registerPlugin(SplitText);

export const AnimFromStart = ({ 
  children, 
  className = "", 
  trigger 
}: { 
  children: React.ReactNode, 
  className?: string, 
  trigger?: any 
}) => {
  const el = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animFromStart(el.current)
    }, el);
    return () => ctx.revert();
  }, [trigger]); 

  return <div ref={el} className={className}>{children}</div>;
};


export const AnimFromEnd = ({ 
  children, 
  className = "", 
  trigger 
}: { 
  children: React.ReactNode, 
  className?: string, 
  trigger?: any 
}) => {
  const el = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animFromEnd(el.current)
    }, el);
    return () => ctx.revert();
  }, [trigger]); 

  return <div ref={el} className={className}>{children}</div>;
};

export const AnimLine = ({ 
  children, 
  className = "", 
  trigger 
}: { 
  children: React.ReactNode, 
  className?: string, 
  trigger?: any 
}) => {
  const el = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      animLine(el.current)
    }, el);
    return () => ctx.revert();
  }, [trigger]); 

  return <div ref={el} className={className}>{children}</div>;
};
export const Rotate = ({ 
  children, 
  className = "", 
  trigger 
}: { 
  children: React.ReactNode, 
  className?: string, 
  trigger?: boolean 
}) => {
  const el = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      rotate(el.current,trigger||false)
    }, el);
    return () => ctx.revert();
  }, [trigger]); 

  return <div ref={el} className={className}>{children}</div>;
};
export const FullPage = ({ 
  children, 
  className = "", 
  trigger 
}: { 
  children: React.ReactNode, 
  className?: string, 
  trigger?: any 
}) => {
  const el = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      fullPage(el.current,trigger||false)
    }, el);
    return () => ctx.revert();
  }, [trigger]); 

  return <div ref={el} className={className}>{children}</div>;
};



type CradProps = {
  isActive?:boolean;
  children: React.ReactNode;
};

export const Cards = ({ 
  children, 
  className = "", 
  trigger 
}: { 
  children: React.ReactNode, 
  className?: string, 
  trigger?: any 
}) => {
  const el = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      fullPage(el.current,trigger||false)
    }, el);
    return () => ctx.revert();
  }, [trigger]); 

  return <div ref={el} className={className}>{children}</div>;
};
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';


gsap.registerPlugin(SplitText);
export const animFromStart = (element: HTMLElement | null) => {
    if (!element) return;

    const split = new SplitText(element, {
        type: "lines, words, chars",
        linesClass: 'split-line',
    });
    return gsap.fromTo(split.chars, {
        opacity: 0,
        x: -50,
    }, {
        duration: 0.5,
        opacity: 1,
        x: 0,
        ease: 'power2.out',
    });

};

export const animFromEnd = (element: HTMLElement | null) => {
    if (!element) return;

    const split = new SplitText(element, {
        type: "lines, words, chars",
        linesClass: 'split-line',
    });
    return gsap.fromTo(split.chars, {
        opacity: 0,
    }, {
        duration: 0.5,
        opacity: 1,
        stagger: {
            each: 0.08,
            from: 'end',
        },
        ease: 'power2.out',
    });

};

export const animLine = (element: HTMLElement | null) => {
    if (!element) return;

    const split = new SplitText(element, {
        type: "lines, words, chars",
        linesClass: 'split-line',
    });
    return gsap.fromTo(split.words, {
        opacity: 0,
        y: 50
    }, {
        duration: 0.5,
        opacity: 1,
        stagger: 0.05,
        y: 0,
        ease: 'power2.out',
    });

};
export const rotate = (element: HTMLElement | null, isActive: boolean) => {
    if (!element) return;
    return gsap.to(element, {
        rotate:isActive?45:0,
        scale:isActive?1.3:1,
        x:isActive?30:0,
        transition:3,
        ease: isActive ? 'back.out(2)' : 'power2.out',
        overwrite: true,
        
    });

};
export const fullPage = (element: HTMLElement | null, isActive: boolean) => {
    if (!element) return;
    return gsap.fromTo(element,{
        opacity:0,
        duration:1,
    },{
        duration:0.8,
        opacity:1,
    })
};
export const cards = (element: HTMLElement | null, isActive: boolean) => {
    if (!element) return;
    return gsap.fromTo(element,{
        opacity:1,
        duration:1,
        y:40,
    },{
        duration:0.8,
        opacity:1,
        y:0,
        ease: "power2.out",
        scrollTrigger:{
            trigger:element,
            start: "top 80%",
            toggleActions: " play none none reverse",
        }
    })
};

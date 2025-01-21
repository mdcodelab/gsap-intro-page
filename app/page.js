"use client";
import React from 'react'
import {useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';


function Home() {
  const comp=useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      })
        .from(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.5,
        })
        .to(["#title-1", "#title-2", "#title-3"], {
          opacity: 0,
          y: "-=30",
          delay: 0.3,
          stagger: 0.5,
        })
        .to("#intro-slider", {
          xPercent: "-100",
          duration: 1.3,
        })
        .from("#welcome", {
          opacity: 0,
          duration: 0.5,
        }).from("#help", {
          opacity: 0,
          duration: 1
        })
    }, comp)

    return () => ctx.revert()
  }, [])

  return (
    <div className="relative" ref={comp}>
    <div className="h-screen p-10 bg-gray-50 absolute top-o left-0 
    z-20 w-full flex flex-col gap-10 tracking-tight" id="intro-slider">
      <h1 className="text-8xl" id="title-1">Software engineer</h1>
      <h1 className="text-8xl" id="title-2">Designer</h1>
      <h1 className="text-8xl" id="title-3">Freelancer</h1>
    </div>

      <div className="h-screen flex flex-col bg-black justify-center items-center">
      <h1 id="welcome" className="text-9xl font-bold text-white">Welcome.</h1>
      <h2 id="help" className="text-2xl text-white py-4">We are here to help you.</h2>
    </div>
    </div>
  )
}

export default Home

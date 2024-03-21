"use client"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";


const HorizontalScrollCarousel = () => {
  const sectionRef = useRef(null)
  const triggerRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, [])

  return (
    <section className="overflow-hidden">
        <div ref={triggerRef}>
          <div ref={sectionRef} className=" h-screen w-[400vw] flex flex-row relative  ">
        {Images.map((image)=>{
          return ( 
            <Link href="" key={image.id} className=" overflow-hidden h-screen w-screen flex justify-center items-center bg-black/20">
              <img src={image.img} alt="horizontal images" className="shrink-0 min-w-[100%] min-h-[100%]" />
            </Link>
          )
        })}
          </div>
          
        </div>
    </section>
  )
}

export default HorizontalScrollCarousel


const Images = [
  {id: 1, img: "/mobile-vectran3.webp"},
  {id: 2, img: "/big-vectran.webp"},
  {id: 3, img: "/mobile-vectran2.webp"},
  {id: 4, img: "/mobile-vectran2.webp"},

 
  
]

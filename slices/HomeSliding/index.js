import { PrismicRichText } from '@prismicio/react'

/**
 * @typedef {import("@prismicio/client").Content.ScrollingSlice} ScrollingSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ScrollingSlice>} ScrollingProps
 * @param { ScrollingProps }
 */

import React, { useRef, useState, useLayoutEffect, useCallback } from "react"
import Image from "next/image"
import ResizeObserver from "resize-observer-polyfill"
import Link from 'next/link'
import {
  motion,
  useViewportScroll,
  useTransform,
  useSpring
} from "framer-motion"

const HomeSliding = ({ slice }) => {
  const scrollRef = useRef(null)
  const ghostRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useLayoutEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth)
  }, [scrollRef])

  const onResize = useCallback(entries => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => onResize(entries))
    resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useViewportScroll()
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  )
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)

  return (
    <>
      <div className="scroll-container">
        <motion.section
          ref={scrollRef}
          style={{ x: spring }}
          className="thumbnails-container"
        >
          <div className="thumbnails w-screen">
          <section className="absolute top-0 left-0 2xs:top-0 2xs:left-0 sm:top-0 sm:left-0 w-full h-screen 2xs:w-full 2xs:h-screen sm:w-full sm:h-screen bg-gray-900 text-white">
   
   <Image
     src="/coverbg.png"
     width={1920}
     height={1080}
     alt=""
     className="pointer-events-none select-none w-full h-screen 2xs:w-full 2xs:h-screen object-cover"
   />

 <div>
 <Image
     className="scale-75 top-[4%] left-[10%] xxs:scale-1 xxs:hover:scale-5 xl:scale-85 xl:hover:scale-95  2xl:scale-90 2xl:hover:scale-105  ease-in duration-100 absolute xxs:top-[0px] xxs:left-[60px] md:top-[5%] md:left-[35%] 2lg:top-[5%] 2lg:left-[60%] xl:top-[5%] xl:left-[65%]"
     width={550}
     height={567}
     alt=""
     src="/cross.svg"
   />
   </div>

   <div className="absolute top-[26rem] xxs:top-[1.3rem] xxs:left-[0.2rem] xs:top-[18rem] xs:left-[2rem] 2xs:top-[19rem] 2xs:left-[2rem]  sm:top-[28rem] sm:left-[2rem]  left-[4rem] md:top-[35rem] md:left-[8rem] 2lg:top-[15rem] 2lg:left-[10rem] xl:top-[23rem] xl:left-[10rem] 2xl:top-[27rem] 2xl:left-[25rem] font-serif">
   <h2 className="text-white text-[4rem] xxs:text-[2rem]  xs:text-[2.5rem] sm:text-[3rem] md:text-[7rem] 2lg:text-[8rem] lg:text-[8rem] xl:text-[15rem] 2xl:text-[18rem] uppercase ">Serenite</h2>
   <h3 className="xxs:ml-0 ml-2 mt-[1rem] xxs:mt-[0rem] xl:mt-[-4rem] w-[350px] xl:w-[1500px] text-stone-400 text-[1.05rem] xxs:text-[.5rem] xs:text-[.7rem] sm:text-[1.1rem] md:text-[1.2rem] xl:text-[1.32rem] 2xl:text-[1.6rem] ">
     ASSISTANCE MAITRISE D’OUVRAGE 
     <span className="pl-2 pr-3 hidden xl:inline">■</span>
     <span className="block xl:hidden leading-[.3rem]" ><br/></span>
    CONCEPTION & REALISATION
     <span className="pl-2 pr-3 hidden xl:inline">■</span> 
     <span className="block xl:hidden leading-[.3rem]" ><br/></span>
     MAITRISE D’OUVRAGE DELEGUEE</h3>  
   </div>
</section>

          </div>
          
          <div className="absolute top-[30%] right-[-5%] thumbnails font-serif text-[2.5rem]">
          <ul className="leading-[5rem]">
          <li>
            <Link className="link underline  underline-offset-8 hover:text-stone-400" href="/particuliers">
          Particuliers
            </Link></li>
          <li>
            <Link className="link underline  underline-offset-8 hover:text-stone-400" href="professionnels">
          Professionnel
            </Link>
          </li>
          </ul>
          <div className="text-xs text-white font-sans w-[300px] relative top-[20%]"> 
          <PrismicRichText field={slice.primary.description} />
<br/> 
</div>
<Link className="link underline  underline-offset-8 hover:text-stone-400 text-right relative right-[-50%] top-[20%] text-[1.1rem]" href="professionnels">
         en savoir +
            </Link>
          </div>
          
        </motion.section>
      </div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </>
  )
}

export default HomeSliding
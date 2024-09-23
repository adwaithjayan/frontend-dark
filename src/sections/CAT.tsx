import { useRef } from "react";
import { Circle } from "../components/Circle";
import { CutcornerButton } from "../components/CutcornerButton";
import { Hexogon } from "../components/Hexogon";
import { useScroll, useTransform,motion } from "framer-motion";

export default function CAT() {
    const sectionRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: sectionRef,
        offset:["start end","end start"],
    })
    const cuboidRotate = useTransform(scrollYProgress,[0,1],[45,-45]);
  return (
    <section className="py-60 overflow-hidden" ref={sectionRef}>
        <div className="container">
            <div className="relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Hexogon className="size-[700px]" size={700}/>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Hexogon className="size-[1100px]" size={1100} reverse duration={50}/>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Circle className="absolute left-0 -top-[400px]" animate>
                        <motion.img style={{rotate:cuboidRotate}} src="/assets/images/cuboid.png" alt="cuboid" className="size-[140px]"/>
                    </Circle>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Circle className="absolute -left-[600px] -top-[70px]" animate>
                        <motion.img style={{rotate:cuboidRotate}} src="/assets/images/cylinder.png" alt="cuboid" className="size-[140px]"/>
                    </Circle>
                </div>
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">Ready to <span className="block">get started?</span></h2>
            <p className="text-xl text-zinc-400 text-center lg:text-2xl mt-8 max-w-sm mx-auto">Start buling using blockchain technology,with Blockforge.</p>
            <div className="flex justify-center mt-12">
                <CutcornerButton>Get Started</CutcornerButton>
            </div>
            </div>
        </div>
    </section>
  )
}

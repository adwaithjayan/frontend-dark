import { useRef } from "react"
import { Circle } from "../components/Circle"
import { CutcornerButton } from "../components/CutcornerButton"
import { Hexogon } from "../components/Hexogon"
import { useScroll, useTransform,motion } from "framer-motion"

export const Hero=()=> {
    const icoshapedRef =useRef(null);
    const cubeRef =useRef(null);
    const torusRef =useRef(null);
    const cuboidRef =useRef(null);
 const {scrollYProgress} =   useScroll({
        target: icoshapedRef,
        offset:['start end','end start']
    });
 const {scrollYProgress :cubeScrollYProgress} =   useScroll({
        target: cubeRef,
        offset:['start end','end start']
    });
 const {scrollYProgress :torusScrollYProgress} =   useScroll({
        target: torusRef,
        offset:['start end','end start']
    });
 const {scrollYProgress :cuboidScrollYProgress} =   useScroll({
        target: cuboidRef,
        offset:['start end','end start']
    });
    const icosahedronRotate = useTransform(scrollYProgress,[0,1],[30,-45]);
    const cubeRotate = useTransform(cubeScrollYProgress,[0,1],[100,-45]);
    const torusRotate = useTransform(torusScrollYProgress,[0,1],[20,-20]);
    const cuboidRotate = useTransform(cuboidScrollYProgress,[0,1],[20,-20]);
  return (
    <section className="py-24 overflow-x-clip md:py-52">
        <div className="container">
            <p className="uppercase font-extrabold text-center text-zinc-500 tracking-wider">Introducing Blockforge</p>
            <h1 className="font-heading font-black text-5xl text-center mt-4 md:text-6xl lg:text-7xl max-w-3xl mx-auto">The Future of Blockchain is Here.</h1>
            <p className="text-center text-xl mt-6 text-zinc-400 md:text-2xl mxa-w-xl mx-auto">Blockforge is pineering smart contract integrity ith cutting-edge data solutions.</p>
            <div className="flex justify-center mt-10">
                <CutcornerButton className="">Get Starded</CutcornerButton>
            </div>
            <div className="flex mt-24 justify-center">
            <div className="inline-flex relative z-0">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                <Hexogon className="size-[1100px]" size={1100}/>

                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                <Hexogon className="size-[1800px]" size={1800} reverse duration={60}/>

                </div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Circle className="absolute left-[200px] -top-[900px]" animate>

                                    <motion.img ref={cubeRef} style={{rotate:cubeRotate}} src="/assets/images/cube.png" alt="cube" className="size-[140px]"/>
                </Circle>
                <Circle animate className="absolute left-[200px] top-[270px]">
                    <motion.img ref={cuboidRef} style={{rotate:cuboidRotate}} src="/assets/images/cuboid.png" alt="cube" className="size-[140px]"/>
                </Circle>
                <Circle className="absolute -left-[600px] -top-[80px]">
                    <motion.img ref={torusRef} style={{rotate:torusRotate}} src="/assets/images/torus.png" alt="cube" className="size-[140px]"/>
                </Circle>

                </div>
                <motion.div style={{
                    rotate:icosahedronRotate,
                }} ref={icoshapedRef} className="inline-flex">
            <img src="/assets/images/icosahedron.png" alt="" className="absolute w-[calc(100%+100px)] max-w-none -z-10 saturate-[10%] brightness-[4%] hue-rotate-[240deg] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
            <img src="/assets/images/icosahedron.png" alt="icosahedron" className="w-[500px]" />
            </motion.div>
            </div>
            </div>
            <div className="flex justify-center flex-col items-center mt-40 md:mt-80 gap-4">
                <div className="h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex pt-2 justify-center rounded-full">
                    <motion.div 
                    animate={{translateY:12,opacity:0.2}}
                    transition={{
                        duration:2,
                        ease:'linear',
                        repeat:Infinity,
                        repeatType:'loop'

                    }}
                    className="h-3 w-1 bg-fuchsia-500 rounded-full"></motion.div>
                </div>
                <p className="uppercase text-zinc-500 tracking-wider font-extrabold">Scroll to learn more</p>
            </div>
        </div>
    </section>
  )
}

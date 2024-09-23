import { useRef } from "react"
import { CutcornerButton } from "../components/CutcornerButton"
import { LearnMorebutton } from "../components/LearnMorebutton"
import { useScroll,motion, useTransform } from "framer-motion";

const list =[
    "Experience unparalleled security and scalability" ,
    "Fully benefit from scalable network effects",
    "Unlock the potential of decentralized networks"
]
export  function FuturesGrid() {
    const tourusRef =useRef(null);
    const hemesRef =useRef(null);
    const consRef =useRef(null);
    const seconhemRef =useRef(null);
    const {scrollYProgress} = useScroll({
        target: tourusRef,
        offset: ["start end", "end start"],
        
    })
    const {scrollYProgress:hemsY} = useScroll({
        target: hemesRef,
        offset: ["start end", "end start"],
        
    })
    const {scrollYProgress:cony} = useScroll({
        target: consRef,
        offset: ["start end", "end start"],
        
    })
    const {scrollYProgress:seconhem} = useScroll({
        target: seconhemRef,
        offset: ["start end", "end start"],
        
    })
    const toruTranslateY = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const tourusRotate = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const hemsTranslateY = useTransform(hemsY, [0, 1], [50, -50]);
    const hemsRotate = useTransform(hemsY, [0, 1], [-20, -50]);
    const conTranslateY = useTransform(cony, [0, 1], [100, -100]);
    const conRotate = useTransform(cony, [0, 1], [12,45]);
    const seconhemTranslateY = useTransform(seconhem, [0, 1], [50, -50]);
    const seconhemRotate = useTransform(seconhem, [0, 1], [-20,10]);
  return (
    <section className="py-24 overflow-x-clip">
    <div className="container">
        <div className="flex flex-col gap-56 md:gap-48 lg:gap-80 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">Empowering the future of blockchain.</h2>
        <p className="text-xl text-zinc-400 mt-8 lg:text-2xl">Blockforge provides robust and secure infrastructure to support the
        next generation of decentralized applications.</p>
        <ul className="flex flex-col gap-8 mt-12">
            {list.map((item)=>(
                <li key={item} className="flex items-center gap-3">
                    <div className="inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 rounded-full outline-fuchsia-500/20">
                        <div className="size-1.5 bg-fuchsia-500 rounded-full"></div>
                    </div>
                    <span className="text-xl font-bold">{item}</span>
                    </li>
            ))}
        </ul>
        <div className="flex gap-8 mt-12">
            <CutcornerButton>Get Started</CutcornerButton>
            <LearnMorebutton>Learn More</LearnMorebutton>
        </div>
        </div>
        <div className="hidden md:block">
            <div className="relative inline-flex z-0">

            <motion.img src="/assets/images/torus-knot.png" ref={tourusRef} style={{translateY:toruTranslateY,rotate:tourusRotate}} alt="tourus knot" className="size-96 max-w-none scale-x-[-1]"/>
            <motion.img src="/assets/images/hemisphere.png" alt="tourus knot" ref={hemesRef} style={{translateY:hemsTranslateY,rotate:hemsRotate}} className="size-96 absolute top-3/4 -z-10 scale-x-[-1]" />
            </div>
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative hidden md:block">
            <div className="absolute right-0 z-0">
                <motion.img src="/assets/images/cone.png" ref={consRef} style={{translateY:conTranslateY,rotate:conRotate}} alt="cone" className="size-96 max-x-none rotate-12" />
                <motion.img ref={seconhemRef} style={{translateY:seconhemTranslateY,rotate:seconhemRotate}}  src="/assets/images/hemisphere.png" alt="cone" className="-z-10 absolute top-3/4 left-0"/>
            </div>
            </div>
        <div className="col-span-2">
            <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">Blockforge leads the way.</h2>
            <div className="flex flex-col text-xl text-zinc-400 mt-6 gap-6 lg:text-2xl"></div>
           <p> Blockforge is dedicated to supporting the evolution of Web3
            applications by delivering the necessary infrastructure and
            security
            for Web3.</p>
            <p>
            Blockforge champtions Web3 for everyone. As a decentralized
            blockchain scaling platform, Blockforge enables developers to
            c reate
            scalable, user—friendly dApps with low transaction costs, all while
            ensuring robust security.
            </p>
            <div className="flex gap-8 mt-12 ">
                <CutcornerButton>Get Started</CutcornerButton>
                <LearnMorebutton>Learn More</LearnMorebutton>
            </div>
        </div>
        </div>
        </div>
    </div>
    </section>
  )
}

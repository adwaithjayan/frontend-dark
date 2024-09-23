import type { CollectionEntry } from "astro:content"
import Cards from "../components/Cards"
import { getColor } from "../../utils/postUtil";
import Tag from "../components/Tag";
import { CutcornerButton } from "../components/CutcornerButton";
import { twMerge } from "tailwind-merge";
import { useScroll,motion, useTransform } from "framer-motion";
import { useRef } from "react";

function LatesPosts(props:{
    latestPosts:CollectionEntry<'blog'>[]
}) {
    const {latestPosts} = props;
    const targetRef =useRef(null)
    const {scrollYProgress} = useScroll({
        target:targetRef,
        offset:['start end','start center'],
    })
    const marginTop = useTransform(scrollYProgress,[0,1],[0,64])
  return (
    <section className="py-60">
        <div className="container">
            <div className="max-w-3xl mx-auto">

            <h2 className="font-heading font-black text-4xl text-center md:text-5xl lg:text-7xl">Your portal to everything blockchain</h2>
            <p className="text-xl text-center text-zinc-400 mt-8 lg:text-2xl">Keep up with the newest trends, updates, and insights in the blockchain world, updates weekly.</p>
            </div>
            <div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-8">
                {latestPosts.map(({data},i)=>(
                    <Cards key={i} buttonText="Read more" color={getColor(data.category)}
                    className={twMerge((i=== 1 || i === 3) &&"md:hidden" )}>
                    <Tag category={data.category} color={getColor(data.category)}/>
                    <h3 className="font-heading font-black text-3xl mt-3">{data.title}</h3>
                    <p className="text-lg text-zinc-400 mt-6">
                    {data.description}
                    </p>
                    
                </Cards>
                ))}
                </div>
                

                 <motion.div className="hidden md:flex flex-col gap-8 mt-16" ref={targetRef} style={{marginTop}}>
                {latestPosts.map(({data},i)=>(
                    <Cards key={i} buttonText="Read more" color={getColor(data.category)}
                    className={twMerge((i=== 0 || i === 2) &&"md:hidden" )}>
                    <Tag category={data.category} color={getColor(data.category)}/>
                    <h3 className="font-heading font-black text-3xl mt-3">{data.title}</h3>
                    <p className="text-lg text-zinc-400 mt-6">
                    {data.description}
                    </p>
                    
                </Cards>
                ))}
                </motion.div>
            </div>
            <div className="flex justify-center mt-48 md:mt-32">
                <CutcornerButton>Read the Blog</CutcornerButton>
            </div>
        </div>
    </section>
  )
}

export default LatesPosts
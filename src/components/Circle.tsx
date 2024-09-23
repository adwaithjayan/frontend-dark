import type { ComponentPropsWithoutRef } from "react";
import {  twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
export const Circle=(props:ComponentPropsWithoutRef<"div">& {animate?:boolean})=> {
    const { className, children,animate } = props;
    return(
        <div className={twMerge("inline-flex justify-center items-center rounded-full bg-zinc-900 size-[240px] relative",className)}>
            <motion.div animate={animate && {rotate: 360}}
            transition={{
                ease:'linear',
                duration:15,
                repeat:Infinity,
            }} className={twMerge("outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10 absolute rounded-full inset-0 border-[6px] border-transparent ",animate && "border-t-fuchsia-500/30")}></motion.div>
                {children}
        </div>
    )
}
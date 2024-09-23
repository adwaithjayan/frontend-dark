import React, { type ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

export  function LearnMorebutton(props:ComponentPropsWithoutRef<"button">&{color?:string}) {
    const {color,className,children} = props
  return (
    <button className={twMerge("font-extrabold text-fuchsia-500 uppercase font-heading text-sm tacking-wider",color ==='lime' && "text-lime-500",color ==='cyan' && "text-cyan-500",color ==='violet' && "text-violet-500",className)}>{children}</button>

  )
}

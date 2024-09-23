import { twMerge } from "tailwind-merge"

export default function Tag({category,color,className}:{category:string,color?:string,className?:string}) {
  return (
    <div className={twMerge("px-3 py-1.5 uppercase font-heading font-extrbold tracking-wider text-xs bg-fuchsia-500/15 text-fuchsia-500 inline-flex rounded-full",color === 'lime' && "text-lime-500 bg-lime-500/15",color === 'cyan' && "text-cyan-500 bg-cyan-500/15",color === 'violet' && "bg-violet-500/15 text-violet-500",className)}>{category}</div>
  )
}

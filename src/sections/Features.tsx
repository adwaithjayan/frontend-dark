import { twMerge } from "tailwind-merge"
import { LearnMorebutton } from "../components/LearnMorebutton"
import Cards from "../components/Cards"
import { useEffect, useState } from "react"

const cardData = [
  {
    image:"/assets/images/pill.png",
    title:'Revolutionary Blockchain Api',
    description:'Effortlessly integrate and manage blockchain data with our cutting-edge APi,designed for seamless connectivity.',
    color:'fuchsia',

  },
  {
    image:"/assets/images/cuboid.png",
    title:'Decentralized Data Solutions',
    description:'Empower your agencies with decentralized data solutions, ensuring security and transparency at every step.',
    color:'lime',

  },
  {
    image:"/assets/images/cone.png",
    title:'Next-Gen Smart Contracts',
    description:'Unlock the potential of next-gen smart contracts with our robust and scalable API, tailored for morden blockchain needs.',
    color:'cyan',

  },
  {
    image:"/assets/images/icosahedron.png",
    title:'Seamless Blockchain Integration',
    description:'Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency',
    color:'violet',

  },
]
export  function Features() {
  const [selectedIndex,setSelectedIndex] = useState<number>(0);
  const [isHovered,setIsHovered] = useState<boolean>(false);
  useEffect(()=>{
    if(isHovered) return;
  const timeout  =setTimeout(()=>{
      setSelectedIndex(curr =>curr === cardData.length-1 ? 0 : curr+1);
    },2000);
    return ()=>clearTimeout(timeout);
  },[selectedIndex,isHovered])
  return (
    <section className="overflow-x-clip py-24 md:-mt-28">
      <div className="container">
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl">Discover the future of blockchain with Blockforce</h2>
        <div className="mt-36 flex lg:mt-48 overflow-x-clip">
          <div className="flex flex-none gap-8">

         

          {cardData.map(({image, title, description, color},i) =>{
           
           return (
            <div className="inline-flex transition-all duration-500" style={{transform: `translateX(-${selectedIndex * 100}%)`}} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
            <Cards key={title} className="max-w-xs md:max-w-md" color={color}>
            
            <div className="flex justify-center -mt-28">
            <div className="inline-flex relative">
              <div className="absolute h-4 w-full top-[calc(100%+16px)] bg-zinc-950/70 rounded-[100%] group-hover:bg-zinc-950/30 transition duration-300 [mask-image:radial-gradient(closest-side,black,transparent)]"></div>
            <img src={image} alt="image" className="size-40 group-hover:-translate-y-16 transition duration-300"/>

            </div>
            </div>
            <h3 className="font-heading font-blck text-3xl mt-10 ">{title}</h3>
            <p className="text-lg text-zinc-400 mt-4">{description}</p>
           
          </Cards>
          </div>
          )})}
           </div>
        </div>
        <div className="flex justify-center  mt-10">
          <div className="bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full">
            {cardData.map(({title},i)=>(
              <div key={title} className={twMerge("size-2.5 bg-zinc-500 rounded cursor-pointer",i === selectedIndex && "bg-zinc-300")} onClick={() => setSelectedIndex(i)}>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

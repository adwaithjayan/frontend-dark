import { twMerge } from "tailwind-merge"
import {motion} from "framer-motion"

const testimonials =[
  {
    text: "The user experience is phenomenal, and the support team is always there to help. Highly recommended!",
    name: "Erica Wyatt",
    title: "Product Manager -BlockLink",
    avatar:'/assets/images/avatar-erica-wyatt.jpg',
  },
  {
    title:'Lead Developer -BitBridge',
    name:"Noel Baldwin",
    text:'Our productivity has skyrocketes since we started using Blockforge',
    avatar:"/assets/images/avatar-noel-baldwin.jpg",
  },
  {
    title:'CTO - CryptoSolutions',
    name:"Harry Bender",
    text:'The integration process was seamless, and the performance improved',
    avatar:"/assets/images/avatar-harry-bender.jpg",
  },

]
export default function Testimonials() {
  return (
    <section className="py-32 bg-zinc-800">
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-8 lg:gap-12">
              {testimonials.map((testimonial,i)=>(
                  
                    <motion.blockquote initial={{opacity:0,y:24,}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.5,ease:'easeInOut',duration:1}} viewport={{once:true}} key={i} className={twMerge((i === 2 && "md:hidden lg:block"))}>
                      <p className="font-heading text-3xl lg:text-4xl font-black">&ldquo;{testimonial.text}&rdquo;</p>
                      <cite className="mt-8 block ">
                        <div className="flex gap-3 items-center">
                          <div>
                            <div className="size-16 bg-zinc-700 rounded-full bg-cover" style={{backgroundImage:`url(${testimonial.avatar})`}} ></div>
                          </div>
                          <div>
                            <div className="text-lg not-italic font-black">{testimonial.name}</div>
                            <div className="text-zinc-400 not-italic">{testimonial.title}</div>
                          </div>
                        </div>
                      </cite>
                    </motion.blockquote>
                  
              ))}
            </div>
        </div>
    </section>
  )
}

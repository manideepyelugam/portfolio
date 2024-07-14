import {motion} from 'framer-motion'

function SplitText ({text}){
       const words = text.split(' ');
  
       const container = {
         hidden: { opacity: 0 },
         visible: (i = 1) => ({
           opacity: 1,
           transition: { staggerChildren: 0.1, delayChildren: 0.02 * i },
         }),
       };

      

  return (
    <motion.div
      className="flex flex-wrap text-text font-regular text-[25px] tracking-wide text-wrap uppercase"
      variants={container}
        initial="hidden"
        animate="visible"
      >
    {words.map((word, index) => (
        <motion.span key={index} initial={{y:60,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.4}} className="mr-2">
          <>
          {word}
          {" "}
          </>
        </motion.span>
      ))}
      </motion.div>

  )
}


export default SplitText;
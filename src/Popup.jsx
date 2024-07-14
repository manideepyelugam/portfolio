import React from 'react'
import {delay, motion} from 'framer-motion'
import { useRef ,useEffect} from 'react'

const Popup = ({projectname,gitlink,livelink,bigpara,stacks,isOpen,onClose,img}) => {
    const modelRef = useRef()

   
    

    function closemodel(e){
        if (modelRef.current === e.target){
            onClose()
        }
    }



  return (
    <motion.div  ref={modelRef}  onClick={closemodel}  className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 flex justify-center items-center  rounded-lg'>
        <button onClick={onClose}><i class="fa-solid fa-xmark text-bg absolute top-0 right-1 text-[40px] p-7 "></i></button>
         <div className='h-[700px] sm:h-[800px] w-[330px] bg-bg rounded-lg sm:w-[650px] overflow-y-scroll mb:10 sm:mb-0'>
            <div className='bg-black h-[240px] sm:h-[400px] w-full flex justify-center items-center'>
              <img src={img} className='h-full' alt="" />
            </div>
            <div className='p-4'>
                <p className='font-bold sm:text-4xl text-xl'>{projectname}</p>
                
                <div className='my-2 '>
                    <p className='text-text font-regular sm:my-4 tracking-wide sm:text-[17px] text-[14px] my-2 '>{stacks}</p>
                </div>

                <p className='font-regular tracking-wide sm:text-lg sm:leading-8 leading-6 text-md '>{bigpara}</p>

      <h1 className='font-bold my-4 text-lg'>Project Links.</h1>

      <div className='flex p-0 '>
        <div className='flex items-center mr-6'><a href={gitlink}className='text-text font-medium underline' ><i class="text-[20px] fa-brands fa-github mr-2"></i> Source Code</a> </div>
        <div className='flex items-center'><a href={livelink} className='font-medium underline text-text'><i class="fa-solid fa-right-to-bracket text-2xl text-[20px] mr-2"></i>Live Project</a></div>

      </div>


            </div>
         </div>

        </motion.div>
  )
}

export default Popup

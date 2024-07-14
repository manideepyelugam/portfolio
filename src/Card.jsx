import React from 'react'
import Popup from './Popup'
import { useState } from 'react'

const Card = ({projectname,gitlink,livelink,smallpara,bigpara,stacks,img}) => {
    const [modal,setmodal] = useState(false);
    
     
  return (
    
    <>
    <div className='h-[500px] w-[400px] rounded-lg overflow-hidden mb-5'>
        <div onClick={() => setmodal(true)} className='h-2/5 w-full  rounded-lg flex justify-center items-center'>
            <img className='h-full rounded-lg'  src={img} alt="" />
        </div>
        <div className='py-4 '>

            <div className='flex text-text items-center'>
            <h1 className='pr-6 font-medium text-xl sm:text-2xl'>{projectname}</h1>
            <div className='h-[2px] w-72 bg-text mr-3'></div>
            <a href={gitlink}><i class="fa-brands fa-github text-xl sm:text-2xl px-1 sm:px-2 "></i></a>
            <a href={livelink}><i class="fa-solid fa-right-to-bracket text-xl sm:text-2xl px-1 sm:px-2"></i>
            </a>
            </div>

            <div className='my-2 '>
                <p className='text-text font-regular tracking-wide text-[13px] sm:text-[15px]'>{stacks}</p>
            </div>

            <div >
                <p className='font-regular sm:text-xl text-lg'>{smallpara} &nbsp; <button onClick={() => setmodal(true)} className='font-regular text-[16px] sm:text-[18px] text-text underline'>Learn more <i class="fa-solid fa-angle-right text-text"></i></button></p>
            </div>
        </div>
        {modal &&  <Popup projectname = {projectname} gitlink={gitlink} livelink={livelink} bigpara={bigpara} stacks={stacks} isOpen={modal} img={img} onClose={() => setmodal(false)} />}

    </div>
    </>
  )
}

export default Card
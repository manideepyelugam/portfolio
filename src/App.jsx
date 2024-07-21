
import './App.css'
import { useState } from 'react';
import Locomotive from 'locomotive-scroll'
import {delay, motion} from 'framer-motion'
import SplitText from './SplitText';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Card from './Card';
import img1 from '../src/assets/naked.png'
import maven from '../src/assets/maven.png'
import twogood from '../src/assets/twogood.png'
import shiv from '../src/assets/shiv.png'




function App() {

  const loco = new Locomotive()


  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);




  const box = useRef();

const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  function inc() {
    setCount((prevCount) => {
      const newCount = prevCount < 7 ? prevCount + 1 : 0;
      let newTheme = 'light';

      switch (newCount) {
        case 0:
          newTheme = 'dark';
          break;

        case 1:
          newTheme = 'green';
          break;

        case 2: 
          newTheme = 'pink';
          break;

        case 3:
          newTheme = 'orange';
          break;
        
        case 4:
          newTheme = 'blue';
          break;

        case 5:
          newTheme = 'snow';
          break;

        case 6:
          newTheme = 'light-blue';
          break;
        
        default:
          break;
      }

      document.querySelector('body').setAttribute('data-theme', newTheme);
      setTheme(newTheme);

      return newCount;
    });


  

  }  return (
   <>
         <div className='min-h-screen  bg-bg text-text'>
          
           <motion.header initial={{y:"-100px"}} animate={{y:"0px"}} transition={{ease:[0.76, 0, 0.24, 1],duration:1.2}} className='h-[100px] text-text flex justify-between items-center sm:px-14 px-8 sticky top-0 bg-transparent z-50'>

            <h1 id='mani' className='text-text font-medium sm:text-[22px] text-[16px]'>Yelugam Manideep</h1>

            <button onClick={() => inc()} className='font-regular border sm:text-[15px] text-[13px] px-2  border-btnCol hover:text-bg hover:bg-text py-[1px] rounded-3xl'>Click me</button>
{/* 
            <div className=' gap-5 cursor-pointer hidden sm:flex'>
              <p className='text-text font-medium text-[20px]'>About</p>
              <p className='text-text font-medium text-[20px]'>Projects</p>
              <p className='text-text font-medium text-[20px]'>Contact</p>

            </div> */}

             
          </motion.header>  



          <h1 className='text-text w-2/4 text-[40px] leading-[40px] font-medium ml-6 mt-24 md:text-[60px] md:leading-[60px] lg:text-[130px] lg:leading-[120px] sm:text-[50px]  sm:ml-16 sm:leading-[50px] lg:ml-16 lg:mt-10'>
          
          <motion.p initial={{y:"50px",opacity:0}} animate={{y:"0px",opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.8,delay:0.8}}>CREATIVE </motion.p>
          
           <motion.p initial={{y:"50px",opacity:0}} animate={{y:"0px",opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.8,delay:1.2}}>DEVELOPER</motion.p> </h1>

          <motion.h1  className='text-right text-text text-[40px] leading-[40px] mr-6 mt-28 font-medium sm:text-[50px] sm:leading-[50px] sm:mr-16 sm:mt-12 md:leading-[60px] md:mt-24 md:text-[60px] lg:text-[130px] lg:leading-[120px] lg:mt-32 lg:mr-16 '> 
            <motion.p initial={{y:"50px",opacity:0}} animate={{y:"0px",opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.8,delay:1.4}}>YELUGAM </motion.p> 
          <motion.p initial={{y:"50px",opacity:0}} animate={{y:"0px",opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.8,delay:1.6}}>MANIDEEP</motion.p> </motion.h1>
          <motion.p initial={{y:"50px",opacity:0}} animate={{y:"0px",opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.8,delay:1.8}} className='font-regular text-[10px] text-right mr-6 mt-2 tracking-wide md:mt-2 lg:mt-6 lg:text-[18px] md:text-[14px] sm:mr-16 sm:mt-2 sm:text-[12px] lg:mr-16 '>Web Developer &nbsp; |  &nbsp; Web Designer</motion.p>
          
          <div className='flex gap-2 items-center lg:mt-[35px] md:mt-[125px] md:gap-4 sm:gap-2 sm:mt-[55px] mt-[110px] '>
          <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.8,delay:2.0}} class="material-symbols-outlined text-[60px]  ml-6  sm:ml-16 md:text-[60px] lg:text-[100px] text-text">arrow_downward</motion.span>

            <p className='font-regular tracking-wider text-[14px]  lg:text-[18px] md:text-[14px] sm:text-[12px]'> 
              <motion.p initial={{x:-60,opacity:0}} animate={{x:0,opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.8,delay:2.0}}>Based in Telangana,</motion.p>
               <motion.p  initial={{x:-60,opacity:0}} animate={{x:0,opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.8,delay:2.0}}>India</motion.p>
               
                </p>
          </div>



          <div className='w-full h-36 sm:h-32 md:h-40 lg:h-80'></div>


{/* 2nd page starts here */}


          <div className=' flex px-6 flex-col sm:px-16 lg:flex-row lg:px-20  min-h-[90vh] lg:mb-14 mb-20'> 

            <div className='lg:w-1/3 w-full lg:h-full h-10'>
                <motion.h1 initial={{y:"50px",opacity:0}} animate={{y:"0px",opacity:1}} transition={{ease:'easeInOut',duration:1}}  className='text-text text-[22px] lg:text-[25px] font-medium'>01/</motion.h1>
            </div>

            <div className='lg:w-3/5 w-full lg:h-full py-6 lg:py-0'>

                  {/* <p className='text-text font-regular text-[25px] tracking-wide text-wrap uppercase'>PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES. I CREATE MEMORABLE WEB EXPERIENCES.
                    <br /> <br />

                    MY JOURNEY BEGAN WITH CRAFTING VISUALLY COMPELLING DESIGNS THAT ENHANCE USER EXPERIENCES, AND EVOLVED INTO MASTERING THE INTRICATE CODING SKILLS REQUIRED TO BRING THOSE DESIGNS TO LIFE. 
                  </p> */}

<div  >
{<SplitText text={'PASSIONATE ABOUT WEB TECHNOLOGIES. I LOVE WORKING AT THE INTERSECTION OF CREATIVITY AND USER FRIENDLY INTERFACES. I CREATE MEMORABLE WEB EXPERIENCES '}/>} <br />
<br />
{<SplitText text={'MY JOURNEY BEGAN WITH CRAFTING VISUALLY COMPELLING DESIGNS THAT ENHANCE USER EXPERIENCES, AND EVOLVED INTO MASTERING THE INTRICATE CODING SKILLS REQUIRED TO BRING THOSE DESIGNS TO LIFE.'} />}
    </div>




                  <motion.div initial={{opacity:0}} whileInView={{opacity:1}}  transition={{duration:1,delay:0.4,ease:'easeIn'}} className='lg:w-4/5 w-full  my-8'>
                  <div className='flex w-full text-text flex-col sm:flex-row my-16' >
<div className='w-2/5 font-medium text-[25px] mb-5'>Disciplines</div>

<div className='w-3/5 font-regular text-[20px] flex justify-center'>Front-End<br /> <br />Web Design <br /> <br />UI/UX <br /> <br />User Experience Design <br /> <br /> Back-End</div>



</div>

<p className='text-text font-regular text-[22px] tracking-wide text-wrap '>I help designers, small agencies and businesses bring their ideas to life. Powered by Figma, VS Code and coffee, I turn your requirements into CMS-ified and ecommerce-ified websites - on time and on budget.</p>


<p className='text-text font-regular text-[20px] mt-10'>Got any questions ?? <a href="https://wa.me/+916303256757" className='font-medium'>&nbsp;Reach out to me !</a></p>
                          
                  </motion.div>


                 




            </div>
          </div>


          {/* page3 starts from here */}

          <div ref={box} className='flex px-6 flex-col sm:px-16 lg:flex-row lg:px-20  min-h-[90vh] '> 

            <div className='lg:w-1/3 w-full lg:h-full h-10'>
                   <h1 className='text-text text-[22px] lg:text-[25px] font-medium'>02/</h1>
            </div>

            <div className='lg:w-3/5 w-full lg:h-full py-6 lg:py-0'>

                {/* <p ref={para} className='gsa text-text font-regular text-[25px] tracking-wide text-wrap uppercase'>I’m Manideep, I work as a  freelance  web designer
                    specialized in the conception of custom and unique
                website. I love  designing interfaces with a beautiful
                and  strong user experience.
                   <br /> <br />

                   I am an undergraduate student currently pursuing my B.Tech in Computer Science and Engineering. I have a strong passion for designing and developing websites. With a keen eye for detail and a creative mindset, I enjoy transforming ideas into visually appealing and user-friendly web experiences. My journey in web design and development is driven by a desire to continuously learn and stay at the forefront of technological advancements.
                 </p> */}

<div  >
{<SplitText text={'I’m Manideep, I work as a  freelance  web designer specialized in the conception of custom and unique website. I love  designing interfaces with a beautiful and  strong user experience.'} />} <br />
<br />
{ <SplitText text={'I am an undergraduate student currently pursuing my B.Tech in Computer Science and Engineering. I have a strong passion for designing and developing websites. With a keen eye for detail and a creative mindset, I enjoy transforming ideas into visually appealing and user-friendly web experiences. My journey in web design and development is driven by a desire to continuously learn and stay at the forefront of technological advancements.'} />}

    </div>



             <motion.div className='lg:w-4/5 w-full  my-10' initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1,delay:0.4,ease:'easeIn'}}>
            <p className='text-text font-regular text-[22px] tracking-wide text-wrap '>My dedication to creating visually appealing and user-friendly web experiences fuels my enthusiasm for making websites for clients. I am committed to staying updated with the latest advancements in the field, ensuring that my skills and knowledge remain at the cutting edge.</p>

              
      </motion.div>
</div>
</div>







{/* page4 starts here */}
<div className='min-h-[90vh] w-full px-6 lg:px-20 flex items-center flex-col sm:mt-20 '>

<motion.div  className=' w-full lg:h-full h-10 flex items-start justify-between relative sm:mb-44 lg:mb-16'>
       <motion.h1 initial={{y:-40,opacity:0}} viewport={{once:true}} whileInView={{y:0,opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.6,delay:0.8}} className='text-text text-[16px] lg:text-[25px] font-medium sm:text-[16px] sm:leading-6'>03/ </motion.h1>

       <motion.p initial={{y:-40,opacity:0}} viewport={{once:true}} whileInView={{y:0,opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.6,delay:1}} className='text-text text-[14px] lg:text-[23px] font-medium leading-5 tracking-wide text-center ml-8 sm:text-[16px] sm:leading-6'>RECENT <br />PROJECTS</motion.p>
       <motion.p initial={{y:-40,opacity:0}} viewport={{once:true}} whileInView={{y:0,opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.6,delay:1.2}} className='text-text text-[14px] lg:text-[23px] font-medium leading-5 tracking-wide text-center sm:text-[16px] sm:leading-6 '>CREATIVE<br /> DEVELOPMENT</motion.p>

</motion.div>

<div className='min-h-[600px] lg:w-[1100px] mt-20 sm:mt-0  grid items-center grid-cols-1 lg:grid-cols-2 md:grid-cols-1 lg:mt-16' >

  <motion.div  initial={{x:-80,opacity:0}} viewport={{once:true}} whileInView={{x:0,opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.8,delay:0.6}}  className='flex justify-center items-center col-span-1 h-full w-full'>
  <Card projectname={"TwoGoodCo"} gitlink={"https://github.com/manideepyelugam/animation-web2"} livelink={"https://manideepyelugam.github.io/animation-web2/"} smallpara={"I've been always curious to make this website clone.Two Good Co creates quality products, supporting and empowering women overcoming homelessness and trauma"} bigpara={"I've been always curious to make this website clone.Two Good Co creates quality products, supporting and empowering women overcoming homelessness and trauma,fostering independence and self-worth.  By supporting Two Good Co, you are creating opportunities for someone to change their life and rebuild their self-worth and independence, in order to break free from the cycle of homelessness and disadvantage. "} stacks={"HTML - CSS - JS - GSAP - LocomotiveJs"} img={twogood}/>
  </motion.div>



  <motion.div initial={{x:80,opacity:0}} viewport={{once:true}} whileInView={{x:0,opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.8,delay:0.6}} className='flex justify-center items-center col-span-1 h-full w-full'>
  <Card projectname={"MavenMarg"} gitlink={""} livelink={"https://mavenmarg.com/"} smallpara={"Mavenmarg is a edutech platform where you can enhance your communication skills,life skills and many more important skills for life."} bigpara={"Mavenmarg is an edutech platform where you can enhance your communication skills, life skills, and many other essential skills for life. Our expert-led courses provide practical knowledge and interactive learning experiences, empowering you to excel personally and professionally. With a wide range of topics, including leadership, emotional intelligence, and critical thinking, Mavenmarg ensures you are equipped with the tools needed for success. Join Mavenmarg today and unlock your full potential, making every learning experience count towards a brighter future."} stacks={"Wordpress"} img={maven}/>
  </motion.div>


  <motion.div initial={{x:-80,opacity:0}} viewport={{once:true}} whileInView={{x:0,opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.8,delay:0.6}} className='flex justify-center items-center col-span-1 h-full w-full'>
  <Card projectname={"ShivJoinery"} gitlink={""} livelink={"https://shivmodernwardrobes.com.au/"} smallpara={"As a web designer and a developer, I loved the design idea of Shiv Modern Wardrobes and ensured the website was pixel-perfect."} bigpara={"As a web designer, I was thrilled to work with Shiv Modern Wardrobes, a company specializing in joinery designs. Their innovative design ideas inspired me to create a pixel-perfect website that truly represents their craftsmanship and attention to detail. I focused on ensuring a seamless user experience, highlighting their exquisite work and making the online presence as impressive as their physical creations."} img={shiv} stacks={"HTML - CSS - JS - Bootstrap"}/>
  </motion.div>


  <motion.div initial={{x:80,opacity:0}} viewport={{once:true}} whileInView={{x:0,opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.8,delay:0.6}} className='flex justify-center items-center col-span-1 h-full w-full'>
  <Card projectname={"Nakedfruits"} gitlink={""} livelink={"https://nakedfruits.in/"} smallpara={"I designed and developed website for Naked Fruits, a premium ice cream brand known for its fresh, natural ingredients and bold flavors. "} bigpara={"I designed and developed website for Naked Fruits, a premium ice cream brand known for its fresh, natural ingredients and bold flavors. The site showcases the brand's commitment to quality through vibrant visuals and a user-friendly interface. With a focus on highlighting the unique characteristics of each flavor, the website provides an engaging experience that reflects Naked Fruits' dedication to delicious, all-natural ice cream. This project allowed me to combine my skills in web design and development to create a pixel-perfect, responsive site that effectively represents the brand's identity."} img={img1} stacks={"HTML - CSS - JS - Bootstrap - GSAP"}/>
  </motion.div>



</div>



</div>









{/* page5 starts here */}

<div className='pb-10 lg:pb-10 px-6 sm:px-16 lg:px-20 min-h-[90vh] sm:pb-28  lg:min-h-[90vh] relative sm:mt-28 mt-20 sm:min-h-[60vh]'> 

<motion.div  className=' w-full lg:h-full h-10 flex items-start justify-between relative sm:mb-44 lg:mb-0'>
       <motion.h1 initial={{y:-40,opacity:0}} viewport={{once:true}} whileInView={{y:0,opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.6,delay:0.8}} className='text-text text-[16px] lg:text-[25px] font-medium sm:text-[16px] sm:leading-6'>04/ </motion.h1>

       <motion.p initial={{y:-40,opacity:0}} viewport={{once:true}} whileInView={{y:0,opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.6,delay:1}} className='text-text text-[14px] lg:text-[23px] font-medium leading-5 tracking-wide text-center ml-8 sm:text-[16px] sm:leading-6'>WANT TO WORK <br />TOGETHER?</motion.p>
       <motion.p initial={{y:-40,opacity:0}} viewport={{once:true}} whileInView={{y:0,opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.6,delay:1.2}} className='text-text text-[14px] lg:text-[23px] font-medium leading-5 tracking-wide text-center sm:text-[16px] sm:leading-6'>SEND ME <br /> A MESSAGE!!</motion.p>

</motion.div>

<div >


   <a href="mailto:yelugammanideep2005@gmail.com " className='text-center'>
    <span className='underline'> <motion.h1 initial={{opacity:0}} viewport={{once : true}} whileInView={{opacity:1}} transition={{ease:[0.76, 0, 0.24, 1],duration:0.9,delay:1}} className=' w-full text-xl font-medium text-text lg:text-6xl md:text-4xl sm:text-3xl text-center leading-[150px] lg:mt-40 mt-20 sm:mb-20' > yelugammanideep2005@gmail.com </motion.h1> 

    </span>
   

    </a> 
</div>



<div className='lg:h-64 h-40 w-full mt-2 lg:mt-20 flex items-center justify-center flex-col'>
    <motion.h1 initial={{y:50,opacity:0}} viewport={{once:true}} whileInView={{y:0,opacity:1}} transition={{duration:0.6, ease:[0.76, 0, 0.24, 1],delay:1}} className='font-regular text-text lg:text-[30px] sm:text-[20px] text-[20px] tracking-wide'>Let's be internet BFFs</motion.h1>

    <motion.div  className='text-text flex gap-4 mt-2'>
      <a href="https://wa.me/+916303256757">
      <motion.i initial={{y:50,opacity:0}} viewport={{once:true}} whileInView={{y:0,opacity:1}} transition={{duration:0.6, ease:[0.76, 0, 0.24, 1],delay:1.2}} class="fa-brands fa-whatsapp lg:text-3xl text-2xl "></motion.i>
      </a>
   

      <a href="https://github.com/manideepyelugam"><motion.i initial={{y:50,opacity:0}} viewport={{once:true}} whileInView={{y:0,opacity:1}} transition={{duration:0.6, ease:[0.76, 0, 0.24, 1],delay:1.3}} class="fa-brands fa-github lg:text-3xl text-2xl"></motion.i></a>
      

      <a href="https://www.linkedin.com/in/yelugam-manideep-5aa445319/">  <motion.i initial={{y:50,opacity:0}} viewport={{once:true}} whileInView={{y:0,opacity:1}} transition={{duration:0.6, ease:[0.76, 0, 0.24, 1],delay:1.4}} class="fa-brands fa-linkedin  lg:text-3xl text-2xl"></motion.i>
      </a>


      <a href="https://www.instagram.com/webdev.work/?igsh=MXFyNjVxbzJzM2l2cw%3D%3D">
      <motion.i initial={{y:50,opacity:0}} viewport={{once:true}} whileInView={{y:0,opacity:1}} transition={{duration:0.6, ease:[0.76, 0, 0.24, 1],delay:1.5}} class="fa-brands fa-instagram  lg:text-3xl text-2xl"></motion.i>
      </a>  
    </motion.div>

</div>

<div className='sm:h-32 w-full h-52 mt-14  sm:mt-28 flex justify-between sm:flex-row flex-col items-center sm:pb-44 lg:pb-0'>
   
   <motion.h1 initial={{x:-70,opacity:0}} viewport={{once:true}} whileInView={{x:0,opacity:1}} transition={{duration:0.9, ease:[0.76, 0, 0.24, 1],delay:1.2}} className=' w-full text-text font-regular tracking-wide text-[17px]'>Feel free to drop me a line with project <br /> details. It would be a pleasure to help you  <br />with your website!</motion.h1>


   <motion.h1 initial={{x:70,opacity:0}} viewport={{once:true}} whileInView={{x:0,opacity:1}} transition={{duration:0.9, ease:[0.76, 0, 0.24, 1],delay:1.2}} className='text-text font-regular tracking-wide text-[17px] text-right  w-full'>Always made with love by <br /> Yelugam Manideep.
</motion.h1>
     
</div>
</div>


         </div>

        
   </>
  )
}

export default App

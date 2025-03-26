'use client'

import Image from "next/image";
import { bebasNeue, oswald, anton } from "./fonts";
import { useState, useEffect, useRef } from "react";
import ContactForm from "./ContactForm"

export default function Home() {
  const [offsetY, setOffsetY] = useState<number>(0);
  const [isStyle, setIsStyle] = useState<boolean>(false);
  const [isStyle2, setIsStyle2] = useState<boolean>(false);
  const [isStyle3, setIsStyle3] = useState<boolean>(false);
  const [isStyle4, setIsStyle4] = useState<boolean>(false);
  
  const img = useRef<HTMLDivElement>(null);
  const img2 = useRef<HTMLDivElement>(null);
  const exp = useRef<HTMLDivElement>(null);
  const form = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imgRef = img.current;
    const img2Ref = img2.current;
    const expRef = exp.current;
    const formRef = form.current;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === imgRef) {
          setIsStyle(!entry.isIntersecting);
        } else if (entry.target === img2Ref) {
          setIsStyle2(!entry.isIntersecting);
        } else if (entry.target === expRef) {
          setIsStyle3(!entry.isIntersecting);
        } else if (entry.target === formRef) {
          setIsStyle4(!entry.isIntersecting);
        }
      });
    }, { root: null, rootMargin: "0px", threshold: 0.6 });

    const elements = [imgRef, img2Ref, expRef, formRef];
    elements.forEach(el => {
      if (el) observer.observe(el);
    });

    const handleScrollY = () => {
      setOffsetY(window.scrollY / 5);
    };
    window.addEventListener("scroll", handleScrollY);

    return () => {
      window.removeEventListener("scroll", handleScrollY);
      observer.disconnect();
    };
  }, []); 


  return (
    <section className="overflow-hidden">
      <div
        className="fixed top-0 left-0 w-screen h-screen bg-cover overflow-hidden bg-center bg-[url('/imagen-fondo4.jpg')] -z-10"
        style={{ scale: `${1 + offsetY / 900}` }}>
      </div>

      <section
        className=" flex flex-col relative h-screen w-screen overflow-hidden  ">
        <Image src="/ganchito.png" alt="ganchito" width={137} height={232}
          className=" absolute z-30 
          xl:top-[-8vh] xl:left-[50vw]
          lg:top-[0vh] lg:left-[61vw] lg:flex
          md:hidden
          top-[0vh] left-[61vw]
          hidden
          " />
        <div
          className="  bg-customWhite absolute  shadow-lg shadow-black flex flex-col items-end
          xl:h-[55vh] xl:w-[33vw] xl:top-[28vh] xl:left-[38.2vw]
          lg:h-[50vh] lg:w-[42vw] lg:top-[28vh] 
          md:h-[45vh] md:w-[47vw] md:top-[28vh] md:left-[47vw]
          h-[50vh] w-[70vw] top-[28vh] left-[20vw]
          ">
          <h2 className={`${bebasNeue.className} text-custonBlue text-4xl 
            xl:mt-[2vh]
            lg:mr-[1.5vw] lg:mt-[1vh]
            md:mr-[1.5vw] md:mt-[1vh]
            mr-[3vw] mt-[1vh]
          `}><strong>ABOUT ME</strong></h2>
          <p className={`${oswald.className} text-xl  text-right  text-black 
          xl:w-[24vw]
          lg:mr-[1.5vw] lg:w-[30vw]
          md:mr-[1.5vw] md:w-[27vw]
          mr-[3vw] w-[50vw]
          `}>I’m Ezequiel Zapata. I’m Frontend developer. Now I’m studying at MISIS University the software engineer career. I’m from Argentina, but I  live in Moscow cause I study here with a university scholarship. I want to develop and improve as a professional in the IT world. Now I  only work in the frontend but also I want to learn more about backend
          </p>
        </div>
        <Image src="/foto-perfil.png" alt="fondo-nombre2" width={550} height={790}
          className=" absolute z-20 
          xl:left-[16vw] 
          lg:left-[18vw] lg:top-[-1vh] lg:scale-50 
          md:left-[13vw] md:top-[10vh] md:scale-50 
          left-[-35vw] top-[13vh] scale-50 
          " />
        <div
          className="bg-customDarkBlue shadow-xl  w-max  flex flex-col shadow-black justify-end
          xl:h-[40vh]
          lg:h-[35vh] lg:ml-[3vw]
          md:h-[30vh] md:ml-[2vw] md:z-0
          h-[25vh] ml-[4vw] z-0
          ">
          <h1 className={`${anton.className} antialiased  text-customCream  lg:text-7xl md:text-6xl text-5xl tracking-wider shadow-lg lg:h-[11.5vh] md:h-[5.5vh] shadow-black z-20 `} ><strong>EZEQUIEL ZAPATA</strong></h1>
          <h2 className={`${bebasNeue.className} antialiased text-customWhiteBlue lg:text-5xl md:4xl text-3xl tracking-wider z-20 `}>developer frontend</h2>
        </div>
        <div
          style={{ top: `${-1 + offsetY / 4.5}vh`, }}
          className="absolute  xl:right-[6.5vw] lg:right-[-19.2vw] md:right-[-34.8vw] right-[-66vw] z-20 ">
          <Image src="/secuencia2.png" alt="flechas" height={600} width={600} className="  xl:mt-[7vh] lg:mt-[10vh] md:mt-[18vh] mt-[10vh]  " />
        </div>
      </section>

      <div className="bg-customDarkBlue lg:pt-[2vh]">
        <h2 className={`${anton.className} text-customWhiteBlue text-5xl
        lg:ml-[4vw] lg:pb-[3vh] lg:pt-[2vh]
        md:ml-[4vw] md:pb-[3vh] md:pt-[2vh]
        ml-[4vw] pb-[3vh] pt-[2vh]
        `} >PROYECTS</h2>
      </div>

      <section ref={img} className="bg-customDarkBlue flex h-auto relative">
        <div className={` bg-fixed h-auto flex flex-col z-10 bg-cover bg-[url('/imagen-fondo4.jpg')] overflow-hidden 
            xl:gap-[7vh] xl:pb-[2vh] xl:w-[70vw]
            lg:gap-[6vh] lg:pb-[0vh] lg:w-[72vw]
            md:gap-[4vh] md:pb-[0vh] md:w-[72vw]
            gap-[2vh] pb-[0vh] w-[70vw]
            transition-[margin-left]  duration-700 ease-in-out ${isStyle ? "lg:-ml-[200vw] md:-ml-[200vw] -ml-[200vw]" : "md:ml-[3vw] ml-[3vw] "}`}
            style={{ backgroundSize: `${70 + offsetY / 15}%` }}>
          <p className={`${oswald.className} text-customWhiteBlue shadow-2xl shadow-black text-3xl bg-customDarkBlue
            xl:ml-[40%] xl:p-[1.2%] xl:w-[60%]  
            lg:ml-[35%] lg:p-[2%] lg:w-[67%] 
            md:ml-[35%] md:p-[2%] md:w-[67%] 
            ml-[35%] p-[2%] w-[70%] 
          `}>NAME</p>
          <div className="  bg-customWhite flex items-center shadow-xl shadow-black
          xl:h-[50vh] xl:w-[57vw]  xl:ml-[6.5vw]
          lg:h-[45vh] lg:w-[63vw]  lg:ml-[4vw]
          md:h-[30vh] md:w-[63vw]  md:ml-[4vw]
          h-[20vh] w-[60vw]  ml-[5vw]
          ">
            <div className="  shadow-lg shadow-customDarkBlue  bg-[url('/GIF.gif')] bg-cover bg-center relative
            xl:h-[40vh] xl:w-[30vw] xl:ml-[2.5vw]
            lg:h-[35vh] lg:w-[35vw] lg:ml-[3vw]
            md:h-[25vh] md:w-[35vw] md:ml-[3vw]
            h-[15vh] w-[35vw] ml-[3vw]
            ">
            </div>
            <p>HOLA</p>
          </div>
        </div>
        <div className={` bg-custonBlue 
        xl:mt-[9.5vh]  xl:w-[19vw] xl:h-[65vh]
        lg:mt-[0vh]  lg:w-[19vw] lg:h-[66vh]
        md:mt-[0vh]  md:w-[19vw] md:h-[43vh]
        mt-[0vh]  w-[25vw] h-[30vh]
          transition-[margin-left]  duration-300 ease-in-out ${isStyle ? "lg:ml-[60vw] md:ml-[60vw] ml-[60vw]" : "lg:ml-[3.5vw] md:ml-[3vw] ml-[3vw]"}`}>
          <p className={` ${bebasNeue.className} md:text-4xl text-3xl text-customCream 
          lg:ml-[1vw] lg:mt-[2vh] 
          md:ml-[2vw] md:mt-[1vh]
          ml-[3vw] mt-[1vh]
          `}>SKILLS</p>
          <div className=" w-full items-center h-[80%]  flex flex-wrap justify-center gap-[3vw]  ">
          <img src="/html5.svg" alt="html5" className=" w-16 h-16" />
          <img src="/css3.svg" alt="css" className=" w-16 h-16" />
          <img src="/javascript.svg" alt="javascript" className=" w-16 h-16" />
          <img src="/sass.svg" alt="sass" className=" w-16 h-16" />
          <img src="/react.svg" alt="react" className=" w-16 h-16" />
          <img src="/firebase.svg" alt="firebase" className=" w-16 h-16" />
          </div>
        </div>
      </section>

      <section ref={img2} className="bg-customDarkBlue lg:pt-[4vh] lg:pb-[10vh] h-auto relative flex flex-row-reverse z-10 overflow-x-hidden  ">
        <div className={` bg-fixed h-auto  flex flex-col items-end  z-10 bg-cover bg-[url('/imagen-fondo4.jpg')]  
          xl:gap-[7vh] xl:pb-[2vh] xl:w-[70vw]
          lg:gap-[6vh] lg:mb-[0vh] lg:w-[72vw]
          md:gap-[4vh] md:mb-[2vh] md:w-[72vw] md:mt-[5vh]
          gap-[2vh] mb-[2vh] w-[70vw] mt-[5vh]
          overflow-hidden transition-[margin-right] duration-700 ease-in-out ${isStyle2 ? "md:-mr-[200vw] -mr-[200vw] " : "md:mr-[3vw] mr-[3vw]"} `}
          style={{ backgroundSize: `${100 + offsetY / 15}%` }}>
          <p className={`${oswald.className} text-customWhiteBlue   text-right  shadow-2xl shadow-black text-3xl bg-customDarkBlue
            xl:mr-[40%] xl:p-[1.2%] xl:w-[60%]  
            lg:mr-[35%] lg:p-[2%] lg:w-[67%] 
            md:mr-[35%] md:p-[2%] md:w-[67%]
            mr-[35%] p-[2%] w-[70%] 
            `}>NAME</p>
          <div className="  bg-customWhite flex flex-row-reverse items-center shadow-xl shadow-black
                    xl:h-[50vh] xl:w-[57vw]  xl:mr-[6.5vw]
                    lg:h-[45vh] lg:w-[63vw]  lg:mr-[4vw]
                    md:h-[30vh] md:w-[63vw]  md:mr-[4vw]
                    h-[20vh] w-[60vw]  mr-[5vw]
                    ">
            <div className="shadow-lg shadow-customDarkBlue  bg-[url('/GIF.gif')] bg-cover bg-center relative
              xl:h-[40vh] xl:w-[30vw] xl:mr-[2.5vw]
              lg:h-[35vh] lg:w-[35vw] lg:mr-[3vw]
              md:h-[25vh] md:w-[35vw] md:mr-[3vw]
              h-[15vh] w-[35vw] mr-[3vw]
              ">
            </div>
            <p>HOLA</p>
          </div>
        </div>
        <div className={` bg-custonBlue 
        xl:mt-[14.5vh]  xl:w-[19vw] xl:h-[65vh]
        lg:mt-[5vh]  lg:w-[19vw] lg:h-[65vh] lg:mb-0
        md:mt-[5vh]  md:w-[19vw] md:h-[43vh] 
        mt-[5vh] w-[25vw] h-[30vh] mb-[2vh]
          transition-[margin-right]  duration-300 ease-in-out ${isStyle2 ? "lg:mr-[60vw] md:mr-[60vw] mr-[60vw]" : "lg:mr-[3.5vw] md:mr-[3.5vw] mr-[3vw]"}`}>
          <p className={` ${bebasNeue.className} md:text-4xl text-3xl text-customCream 
          lg:ml-[1vw] lg:mt-[2vh] 
          md:ml-[2vw] md:mt-[1vh]
          ml-[3vw] mt-[1vh]
          `}>SKILLS</p>
                    <div className=" w-full items-center h-[80%]  flex flex-wrap justify-center gap-[3vw]  ">
          <img src="/html5.svg" alt="html5" className=" w-16 h-16" />
          <img src="/css3.svg" alt="css" className=" w-16 h-16" />
          <img src="/javascript.svg" alt="javascript" className=" w-16 h-16" />
          <img src="/typescript.svg" alt="typescript" className=" w-16 h-16" />
          <img src="/nextdotjs.svg" alt="nextjs" className=" w-16 h-16" />
          <img src="/tailwindcss.svg" alt="tailwindcss" className=" w-16 h-16" />
          
          
          </div>
        </div>
      </section>

      <section ref={exp} className={`w-screen  flex justify-center items-center bg-customDarkBlue bg-opacity-30 
      lg:h-[80vh] lg:mt-[10vh] lg:mb-[10vh] 
      md:h-[65vh] md:mt-[5vh] md:mb-[5vh] 
      h-[65vh] mt-[5vh] mb-[5vh] 
        transition-[gap] duration-500 ease-in-out ${isStyle3 ? "lg:gap-[110vw] md:gap-[110vw] gap-[110vw]" : "lg:gap-[4vw] md:gap-[4vw] gap-[4vw]"}`}>
        <div className="  flex bg-customWhite
        lg:h-[60vh] lg:w-[45vw]
        md:h-[55vh] md:w-[45vw]
        h-[55vh] w-[45vw]
        ">
          <p className={`${bebasNeue.className} text-custonBlue md:text-5xl text-3xl  bg-customCream
          lg:h-[12vh] lg:pl-[2vw] lg:pt-[3vh] lg:pb-[1vh] lg:w-[50%]
          md:h-[7vh] md:pl-[3vw] md:pt-[1.3vh] md:pb-[1vh] md:w-[28vw]
          h-[7vh] pl-[3vw] pt-[1.3vh] pb-[1vh] w-[28vw]
          `}>STUDIES</p>
        </div>
        <div className="  flex justify-end text-right bg-customWhite
        lg:h-[60vh] lg:w-[45vw]
        md:h-[55vh] md:w-[45vw]
        h-[55vh] w-[45vw]
        ">
          <p className={`${bebasNeue.className} text-custonBlue md:text-5xl text-3xl  bg-customCream
          lg:h-[12vh] lg:pr-[2vw] lg:pt-[3vh] lg:pb-[1vh] lg:w-[50%]
          md:h-[7vh] md:pr-[3vw] md:pt-[1.3vh] md:pb-[1vh] md:w-[28vw]
          h-[7vh] pr-[3vw] pt-[1.3vh] pb-[1vh] w-[28vw]
          `}>EXPERIENCE</p>
        </div>
      </section>
      <section ref={form} className=" flex justify-center items-end bg-transparent
      lg:w-[100vw] lg:h-[90vh]
      md:w-[100vw] md:h-[90vh]
      w-[100vw] h-[90vh]">
        <div className={`bg-customDarkBlue flex flex-col items-center lg:w-[90vw] md:w-[90vw] w-[90vw] transition-all duration-700 ease-in-out ${isStyle4 ? "lg:h-0 md:h-0 h-0" : "lg:h-[90vh] md:h-[90vh] h-[90vh]"}`}>
          <ContactForm></ContactForm>
        </div>
      </section>
    </section>
  );
}

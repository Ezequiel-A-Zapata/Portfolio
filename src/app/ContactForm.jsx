
"use client"
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { bebasNeue, oswald, anton } from "./fonts";
const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        fetch("https://formsubmit.co/ezezapata86@gmail.com", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
        toast.success("¡Operación exitosa!")
    };

    return (
        <section className=" w-[80vw] h-[80vh] mt-[5vh] bg-custonBlue 
        md:w-[85vw] md:mt-[3vh] ">
        <form className="flex flex-col items-center w-auto" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-[100%] flex justify-between mt-[5vh] 
            md:mt-[3vh]" >
                <div className=" h-[50vh] w-[35vw] ml-[2vw] flex flex-col items-center
                md:h-[40vh] md:ml-[2vw]">
                    <div className="w-[100%] flex flex-col gap-[2vh]">
                        <label className={` ${bebasNeue.className} text-4xl mt-[3vh] text-customWhiteBlue
                        md:text-6xl
                        lg:text-7xl
                        xl:text-6xl`}>NAME</label>
                        <input {...register("name",{ required: "El nombre es obligatorio" })} className={` ${anton.className} p-[0.5vw] text-sm bg-customWhite shadow-sm shadow-black tracking-wide w-[100%] h-[4.5vh] text-zinc-900
                        md:text-lg md:h-[3.5vh]
                        lg:text-xl lg:h-[5vh]
                        xl:h-[6vh]`} />
                    </div>
                    <div className="w-[100%] flex flex-col gap-[2vh] mt-[7vh]
                    md:mt-[3vh]
                    xl:mt-[5vh]">
                        <label className={` ${bebasNeue.className} mt-[3vh] text-4xl text-customWhiteBlue
                        md:text-6xl
                        lg:text-7xl
                        xl:text-6xl`}>EMAIL</label>
                        <input type="email" {...register("email", {
                        required: "El email es obligatorio",
                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Email inválido" },})} 
                        className={` ${anton.className} bg-customWhite p-[0.5vw] shadow-sm shadow-black text-sm tracking-wide w-[100%] h-[4.5vh] text-zinc-900
                        md:text-lg md:h-[3.5vh]
                        lg:text-xl lg:h-[5vh]
                        xl:h-[6vh]`} />
                    </div>
                </div>
                    <div className="h-[50vh] w-[40vw] mr-[2vw] gap-[2vh] flex flex-col items-end ">
                        <label className={`${bebasNeue.className} mt-[3vh] text-4xl text-customWhiteBlue
                        md:text-6xl
                        lg:text-7xl
                        xl:text-6xl`}>MESSAGE</label>
                        <textarea {...register("message",{ required: "El mensaje es obligatorio" })} className={` ${anton.className} bg-customWhite shadow-sm shadow-black p-[0.5vh] tracking-wide text-sm w-[100%] h-[27vh]
                        md:h-[20.5vh]
                        lg:h-[27vh]
                        xl:h-[32vh]`} />
                    </div>
            </div>
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            <button type="submit" className={` ${bebasNeue.className} bg-customDarkBlue text-customWhite shadow-lg shadow-black  hover:scale-105 transition duration-300 ease-in-out mr-[4vw] w-[30vw] text-3xl h-[7vh] 
            md:h-[6vh] md:text-5xl
            lg:h-[8vh] lg:w-[20vw]
            xl:mt-[8vh] xl:h-[8vh] xl:text-4xl`}>SEND</button>
        </form>
        </section>
    );
};

export default ContactForm;
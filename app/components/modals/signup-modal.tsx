"use client";
import useActiveModal from "@/hooks/use-active-modal";
import clsx from "clsx";
import { Loader2, X } from "lucide-react";
import { useEffect, useState } from "react";

import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";


const formSchema = zod.object({
    username : zod.string().min(3 , {message : "username must be more than 3 chars."}).max(20),
    password : zod.string().min(6).max(16),
    email : zod.string().email({message : "this email address is not valid"}),
});



const SignupModal = () => {
    const {activeModal , setActiveModal} = useActiveModal();
    const [loading , setLoading] = useState(false);
    const session = useSession();

    const {
        reset,
        register ,
        handleSubmit ,
        formState : { errors },
        setFocus,
        setError

    } = useForm< zod.infer<typeof formSchema> >({
        resolver : zodResolver(formSchema),
    });

    useEffect( () => {
        if(session.status === "authenticated"){
            setActiveModal("")
        }
    } , [activeModal === "signup"])


    const onSubmit = (values : zod.infer<typeof formSchema>) => {

        setLoading(true);
        axios.post("/api/register" , values).then( (res)=> {
            signIn("credentials" , {
                ...values,
                redirect : false
            }).then( (callback) => {
                if(callback?.ok){
                    toast.success("Wellcome to Fleet")
                    setLoading(false);
                    setActiveModal("");
                } else {
                    toast.error("Something went wrong")
                    setLoading(false)
                    reset()
                }
            })
            .catch( error => {
                if(error.response){
                    console.log("STATUS IS HERER" , error.response.status)
                }
                setLoading(false);
                toast.error("something went wrong")
            })
        })
        .catch( error => {
            if(error.response.status == 409){
                setLoading(false);
                toast.error("Duplicate Email");
                setFocus("email");
                setError("email" , {message : "duplicate email"})
            }
            if(error.response.status == 500){
                setLoading(false);
                toast.error("something went wrong");
            }
        })
    }

    
    return (
        <div
            className={clsx(
                "w-full h-full flex items-end justify-center sm:items-center p-4",
                activeModal === 'signup' ? "block" : "hidden"
            )}
        >
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className='w-full sm:w-[544px] h-max bg-[#FCFCFD] rounded-2xl p-6 relative'
            >
                <button
                    onClick={() => setActiveModal("")}
                >
                    <X className='text-rose-400'/>
                </button>

                {/* loading section */}
                <div className={clsx(
                    `w-full h-full bg-black/70 absolute top-0 left-0 items-center justify-center rounded-2xl
                    transition-all`,
                    loading ? "flex" : "hidden"
                )}>
                    <Loader2 
                        className="text-white animate-spin"
                        size={38}
                    />
                </div>


                {/*1- in this div user give me her information(email-phone-password) and if
                these information be accept user go to next step verification */}
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-[#141416] text-3xl sm:text-4xl font-bold mb-8'>
                        Sign up on Fleet
                    </h1>

                    <input 
                        type="text"
                        placeholder='Email'
                        className={clsx(
                            `rounded-full mb-4 p-4 border-2 text-[#777E90]
                            w-full outline-none font-medium text-base`,
                            errors.email?.message ? "border-red-500" : " border-[#B1B5C3]"
                        )} 
                        {...register("email")}
                    />

                    <input 
                        type="text"
                        placeholder='Password'
                        className={clsx(
                            `rounded-full mb-4 p-4 text-[#777E90] border-2  w-full
                            outline-none font-medium text-base`,
                            errors.password?.message ? "border-red-500" : "border-[#B1B5C3]"
                        )} 
                        {...register("password")}
                    />
                    
                    <input 
                        type="text"
                        placeholder='Username'
                        className={clsx(
                            `rounded-full mb-4 p-4 text-[#777E90] border-2  w-full
                            outline-none font-medium text-base`,
                            errors.username?.message ? "border-red-500" : "border-[#B1B5C3]"
                        )} 
                        {...register("username")} 
                    />

                    <button
                        type="submit"
                        className={clsx(
                            `bg-[#3B71FE] text-[#FCFCFD] w-full p-4 rounded-full font-medium text-lg
                            transition-all hover:bg-[#413bfe]`,
                        )}
                    >
                        Countinue
                    </button>


                    <div
                        onClick={() => setActiveModal("login") }
                        className='text-center text-[#3B71FE] text-sm mt-4 cursor-pointer'
                    >
                        Do you have an account?
                    </div>

                </div>

            </form>
        </div>
    )
}

export default SignupModal
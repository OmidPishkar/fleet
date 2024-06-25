"use client";

import useActiveModal from '@/hooks/use-active-modal';
import clsx from 'clsx';
import { X , Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react';

import * as zod from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


const formSchema = zod.object({
    email : zod.string().email(),
    password : zod.string().min(6).max(16)
});

const LoginModal = () => {
    const {activeModal , setActiveModal} = useActiveModal();
    const session = useSession();
    const [loading , setLoading] = useState(false);

    useEffect( () => {
        if(session.status === "authenticated") {
            setActiveModal("")
        }
        
    } , [activeModal === "login"]);

    const {

        register,
        formState : {errors},
        handleSubmit

    } = useForm< zod.infer<typeof formSchema> >({
        resolver : zodResolver(formSchema)
    }); 

    const onSubmit = (values : zod.infer<typeof formSchema>) => {
        setLoading(true);
        signIn("credentials" , {
            ...values,
            redirect : false
        })
        .then( callback => {
            if(callback?.error){
                toast.error("Invalid Credentials")
            }
            if(callback?.ok){
                toast.success("Wellcome back");
                setActiveModal("")
            }
        })
        .catch( error => {
            setLoading(false);
            toast.error("something went wrong")
        })
        .finally( () => {
            setLoading(false)
        })
    }

    return (
        <div
            className={clsx(
                "w-full h-full flex items-end justify-center sm:items-center p-4",
                activeModal === 'login' ? "block" : "hidden"
            )}
        >
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className='w-full sm:w-[544px] h-max bg-[#FCFCFD] rounded-2xl p-6 relative'
            >

                <div className={clsx(
                    'w-full h-full rounded-2xl bg-black/70 absolute top-0 left-0 items-center justify-center',
                    loading ? "flex" : "hidden"
                )}>
                    <Loader2 size={38} className='text-white animate-spin'/>
                </div>

                <button
                    onClick={() => setActiveModal("")}
                >
                    <X className='text-rose-400'/>
                </button>

                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-[#141416] text-3xl sm:text-4xl font-bold mb-8'>
                        Sign in
                    </h1>

                    <input 
                        type="email"
                        placeholder='Email'
                        className='rounded-full mb-4 p-4 text-[#777E90] border-2 border-[#B1B5C3] w-full
                        outline-none font-medium text-base' 
                        {...register("email")}
                    />

                    <input 
                        type="text"
                        placeholder='Password'
                        className='rounded-full mb-4 p-4 text-[#777E90] border-2 border-[#B1B5C3] w-full
                        outline-none font-medium text-base' 
                        {...register("password")}
                    />

                    <button
                        type='submit'
                        className='bg-[#3B71FE] text-[#FCFCFD] w-full p-4 rounded-full font-medium text-lg
                        transition-all hover:bg-[#413bfe]'
                    >
                        Login
                    </button>


                    <button
                        type='submit'
                        className='text-center text-[#353945] font-bold text-sm mt-8'
                    >
                        Forgot password?
                    </button>
                    <div
                        onClick={() => {
                            setActiveModal("signup")
                            console.log(activeModal)
                        }}
                        className='text-center text-[#3B71FE] text-sm mt-4 cursor-pointer'
                    >
                        Dont have an account?
                    </div>

                </div>

            </form>
        </div>
    )
}

export default LoginModal
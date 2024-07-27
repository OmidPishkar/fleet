"use client";

import {useEffect, useState} from 'react'
import { useSession } from 'next-auth/react';
import getCurrentUser from '@/actions/get/get-current-user';
import { User } from '@prisma/client';
import { RefreshCcw } from 'lucide-react';
import useActivePropertyForm from '@/hooks/use-active-property-form';
import HomePropertyForm from './home-property-form';
import CarPropertyForm from './car-property-form';
import clsx from 'clsx';

const Main = () => {
    const session = useSession();
    const [currentuser , setCurrentuser] = useState<null | User>(null);
    const {activePropertyForm , setActivePropertyForm} = useActivePropertyForm();


    useEffect( () => {
    
            const getUser = async () => {
                const user = await getCurrentUser().then(res => res);
    
                setCurrentuser(user);
            };
    
            getUser();
    } , [session.status]);


    return (
        <main className='w-full'>
            
            <div className='flex items-center '>
                <button
                    className={clsx(
                        `flex items-center border-2 border-[#E6E8EC] border-r-0 
                        rounded-l-full px-4 py-3 
                        text-sm font-medium hover:bg-[#E6E8EC] mb-5`,
                        activePropertyForm === "car" ? "bg-[#E6E8EC]" : ""
                    )}
                    onClick={() => setActivePropertyForm("car")}
                >
                    list your car
                </button>
                
                <button
                    className={clsx(
                        `flex items-center border-2 border-[#E6E8EC] border-l-0 
                        rounded-r-full px-4 py-3 
                        text-sm font-medium hover:bg-[#E6E8EC] mb-5`,
                        activePropertyForm === "home" ? "bg-[#E6E8EC]" : ""
                    )}
                    onClick={() => setActivePropertyForm("home")}
                >
                    list your home
                </button>
            </div>


            <h1 
                className='pt-5 text-4xl sm:text-5xl font-medium'
            >
                List your properties
            </h1>


            {activePropertyForm === "home" && (
                <HomePropertyForm/>
            )}
            {activePropertyForm === "car" && (
                <CarPropertyForm/>
            )}
        </main>
    )
}

export default Main
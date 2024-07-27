"use client";

import { useState } from 'react';
import Image from 'next/image'
import useLandingContent from '@/hooks/use-landing-content';
import useActiveModal from '@/hooks/use-active-modal';
import { Bell, Car, ChevronDown, Equal, Home, Plane } from 'lucide-react'
import clsx from 'clsx';
import { useSession } from 'next-auth/react';
import { useRouter , usePathname } from 'next/navigation';

const Navbar = () => {
    const [contentMenu , setContentMenu] = useState(false);
    const {activeContent , setActiveContent} = useLandingContent();
    const {setActiveModal} = useActiveModal();
    const session = useSession();
    const router = useRouter();
    const pathname = usePathname();

    const userPropertiesHandler = () => {
        if(session.status !== "unauthenticated"){
            router.push("/properties")
        }
        setActiveModal("login")
    }

    return (
        <nav className='flex justify-between items-center mt-12 mb-6 px-8 transition-all
        sm:mt-5 sm:mb-5 sm:px-20'>
            <div className='sm:flex sm:gap-5'>
                <Image
                    src={'/images/logo.png'}
                    width={94}
                    height={32}
                    alt='Fleet'
                    className='cursor-pointer hover:scale-95 transition-all'
                    onClick={() => router.push("/")}
                />
                <div className='flex relative'>
                    <div
                    onClick={() => setContentMenu(!contentMenu)} 
                    className='hidden sm:flex  items-center font-semibold text-[#777E90] cursor-pointer'>
                        <span className='text-sm mr-2'> 
                            {activeContent}
                        </span>
                        <ChevronDown 
                            size={16} 
                            className={clsx(
                                "transition-all",
                                contentMenu ? "rotate-180" : ""
                            )}
                        />
                    </div>
                    <ul
                        className={clsx(
                            'absolute top-full border left-0 w-[292px] h-max p-4 rounded-[20px] bg-white',
                            contentMenu ? "block" : "hidden",
                        )}
                    >
                        <li
                            onClick={() => {
                                setActiveContent('Homes')
                                setContentMenu(false)
                            }}
                            className={clsx(
                                'flex cursor-pointer items-center gap-3 py-3 px-5 rounded-3xl my-1',
                                activeContent === 'Homes' ? "bg-[#23262F] text-white" : ""
                            )}
                        >
                            <Home size={20}/>
                            <span className='text-sm'>Homes</span>
                        </li>
                        <li
                            onClick={() => {
                                setActiveContent('Cars')
                                setContentMenu(false)
                            }}
                            className={clsx(
                                'flex cursor-pointer items-center gap-3 py-3 px-5 rounded-3xl my-1',
                                activeContent === 'Cars' ? "bg-[#23262F] text-white" : ""
                            )}
                        >
                            <Car size={20}/>
                            <span className='text-sm'>Cars</span>
                        </li>
                        <li
                            onClick={() => {
                                setActiveContent('Flights')
                                setContentMenu(false)
                            }}
                            className={clsx(
                                'flex cursor-pointer items-center gap-3 py-3 px-5 rounded-3xl my-1',
                                activeContent === 'Flights' ? "bg-[#23262F] text-white" : ""
                            )}
                        >
                            <Plane size={20}/>
                            <span className='text-sm'>Flights</span>
                        </li>
                    </ul>
                </div>

            </div>

            <div> 
                <div className='flex items-center gap-5'>

                    <div 
                        onClick={userPropertiesHandler}
                        className={clsx(
                            'block rounded-[90px] border-[2px] px-4 py-3 text-sm font-bold cursor-pointer',
                            pathname === '/properties' ? "border-[#23262F] bg-[#23262F] text-[#FCFCFD]" : "border-[#E6E8EC]"
                        )}
                    >
                        Your property
                    </div>

                    <Image
                        src="/images/avatar.png"
                        width={40}
                        height={40}
                        alt='user'
                    />
                </div> 
            </div>
        </nav>
    )
}

export default Navbar
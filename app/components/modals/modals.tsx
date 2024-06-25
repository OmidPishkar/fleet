"use client";

import React from 'react'
import LoginModal from './login-modal'
import SignupModal from './signup-modal'
import clsx from 'clsx'
import useActiveModal from '@/hooks/use-active-modal'

const Modals = () => {
    
    const {activeModal} = useActiveModal();
    
    return (
        <section
            className={clsx(
                "transition-all",
                activeModal !== "" ? 'w-screen h-screen bg-[#141416e3] fixed z-[500] top-0 left-0' : "hidden"
            )}
        >
            <LoginModal/>
            <SignupModal/>
        </section>
    )
}

export default Modals
"use client"
import { SignIn, SignUp } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React from 'react'
import { SparklesCore } from "../ui/sparkles";


const Start = () => {
    const router = useRouter();

    const handleLoginClick = () => {
        router.push("/signin");
        window.location.href = "/signin";
    };
    const handleLogClick = () => {
        router.push("/signup");
        window.location.href = "/signup";

    };


    return (

        <div className=" relative w-full bg-black flex flex-col items-center justify-center p-0 m-0">
            <div className="w-full absolute inset-0 h-full">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <div className='items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              
                    <div className='flex flex-row items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-10 '>

                        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-white bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                            onClick={handleLoginClick}
                        >
                            Login
                        </button>
                        <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-white bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                            onClick={handleLogClick}
                        >
                            SignUp
                        </button>

                    </div>
               
                    <SignIn />
                    <SignUp />
            </div>
        </div>


    );
};


export default Start;

'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import { Typewriter } from 'nextjs-simple-typewriter';
import WelcomeForm from '@/components/elements/Forms/WelcomeForm';
import { getAuthName, setAuthName } from '@/utils/auth';

export default function Welcome() {
    const {theme, setTheme} = useTheme();
    useEffect(() => {
        const checkGuard = () => {
            if (getAuthName()) {
                router.push('/home');
            };
        };
        checkGuard();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps


    const router = useRouter();
    const handleSubmit:any = (values:any) => {
        if (values) {
            setAuthName(values?.name);
            router.push('/home');
        }
    };

    return (
        <div className="text-gray-700 dark:text-gray-300 container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
            <div className="flex justify-between">
                <h1 className="text-3xl font-medium">Showwedu</h1>
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="self-start px-3 py-2 leading-none text-gray-200 border border-gray-800 rounded-lg focus:shadow-outline bg-gradient-to-b hover:from-indigo-500 from-gray-900 to-black">
                    {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>

            <div className="h-32 md:h-40"></div>
            <div className="text-center h-12 overflow-hidden" tabIndex={0}>
                <p className="text-center text-nowrap font-sans text-4xl font-bold text-gray-500 dark:text-gray-200">
                    <Typewriter
                        words={['Hi there!', 'Welcome to your education showcase']}
                        loop={0}
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </p>
            </div>
            <div className="h-8"></div>
            <p className="text-center text-xl text-gray-400">
                Type your name and click {`"Enter"`} below to begin!
            </p>
            <WelcomeForm onSubmit={handleSubmit} />
        </div>
    )
}

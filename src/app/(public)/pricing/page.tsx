"use client";

import clsx from 'clsx';
import { Check} from 'lucide-react'
import { useState } from 'react';

function Pricing() {

    const [activeTab, setActiveTab] = useState('monthly');


  return (
    <main className="flex flex-col min-h-screen bg-white text-black dark:bg-black dark:text-white  pt-10 gap-y-8 overflow-hidden">

        <section className="flex flex-col justify-center items-center md:justify-start px-4">
            <h1 className='text-sm text-[#27ae60]'>PRICING</h1>
            <p className="text-4xl">Start your plan, pick a plan later</p>
            <p className="text-neutral-500 mt-2">
                Select the plan that suits you best and start your fitness journey today!
            </p>
        </section>

        <section className='grid grid-cols-2 md:w-4/12 mx-auto gap-1 mb-8 text-lg bg-neutral-100 dark:bg-neutral-900 text-white rounded-full p-2'>
           <button onClick={() => setActiveTab("monthly")} className={clsx('px-6 py-3 rounded-full transition-colors', {
                'bg-[#27ae60]': activeTab === 'monthly',
                'text-black hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white hover:text-black': activeTab !== 'monthly'
            })}>
                Monthly
            </button>
            <button onClick={() => setActiveTab("yearly")} className={clsx('px-6 py-3 rounded-full transition-colors', {
                'bg-[#27ae60]': activeTab === 'yearly',
                'text-black hover:bg-neutral-200 dark:hover:bg-neutral-800 dark:hover:text-white hover:text-black': activeTab !== 'yearly'
            })}>       
                Yearly (Save up to 20%)
            </button>
        </section>
        
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full md:w-8/12 mx-auto gap-x-6 gap-y-4 px-4">
            <div className="bg-neutral-100 hover:bg-neutral-200 text-black dark:text-white dark:bg-neutral-900 dark:hover:bg-neutral-800 transition-colors rounded-xl p-6 flex flex-col border-3 border-neutral-200">
                <h3 className="text-2xl font-semibold mb-4">Start-up</h3>
                <p className='text-sm'>
                    Perfect for individuals starting their fitness journey
                </p>
                <div className="text-2xl font-semibold flex items-center mt-2">
                    {activeTab === 'monthly' ? '$19' : '$15'}
                    <span className='text-xs text-neutral-500 ml-2'>/ month</span></div>
                 <div className='w-full h-[1px] bg-neutral-400 dark:bg-neutral-700 my-4'/> 
                <ul className=" mb-4 flex-1 flex flex-col gap-2 text-sm">
                    <li>
                        <Check size={16} className="inline mr-2 text-[#27ae60] rounded-full p-0.5 border border-[#27ae60]" />
                        Access to basic workout plans</li>
                    <li><Check size={16} className="inline mr-2 text-[#27ae60] rounded-full p-0.5 border border-[#27ae60]" />Nutrition guides</li>
                    <li><Check size={16} className="inline mr-2 text-[#27ae60] rounded-full p-0.5 border border-[#27ae60]" />Community support</li>
                    <li><Check size={16} className="inline mr-2 text-[#27ae60] rounded-full p-0.5 border border-[#27ae60]"/>Progress tracking</li>
                    <li><Check size={16} className="inline mr-2 text-neutral-700 rounded-full p-0.5 border border-neutral-700"/>Monthly webinars</li>
                    <li><Check size={16} className="inline mr-2 text-neutral-700 rounded-full p-0.5 border border-neutral-700" />Exclusive discounts</li>
                    <li><Check size={16} className="inline mr-2 text-neutral-700 rounded-full p-0.5 border border-neutral-700" />Access to app features</li>
                </ul>
                <div className='w-full h-[1px] bg-neutral-400 dark:bg-neutral-700'/>
                <button className="bg-[#27ae60] dark:bg-[#27ae60]/50 hover:bg-[#27ae60]  border border-neutral-400 dark:border-neutral-800 text-white px-6 py-3 rounded-lg mt-4">Get Started</button>
            </div>
            <div className="bg-neutral-100 hover:bg-neutral-200 text-black dark:text-white dark:bg-neutral-900 dark:hover:bg-neutral-800 transition-colors rounded-xl p-6 flex flex-col border-3 border-[#27ae60] md:scale-105">
                <div className='flex items-center justify-between mb-4'>
                    <h3 className="text-2xl text-[#27ae60] font-semibold">Growth </h3>
                    <span className="text-xs text-[#27ae60] dark:text-white px-2 py-1 rounded-full border-2 border-[#27ae60]/60">Most popular</span>
                </div>
                <p className='text-sm'>
                    Ideal for fitness enthusiasts looking for advanced features
                </p>
                <div className="text-2xl font-semibold flex items-center mt-2">
                    {activeTab === 'montly' ? '$29' : '$25'}
                    <span className='text-xs text-neutral-500 ml-2'>/ month</span></div>
                 <div className='w-full h-[1px] bg-neutral-400 dark:bg-neutral-700 my-4'/> 
                <ul className=" mb-4 flex-1 flex flex-col gap-2 text-sm">
                    <li>
                        <Check size={16} className="inline mr-2 text-[#27ae60] rounded-full p-0.5 border border-[#27ae60]" />
                        All features from Start-up</li>
                    <li><Check size={16} className="inline mr-2 text-[#27ae60] rounded-full p-0.5 border border-[#27ae60]" />Personalized training plans</li>
                    <li><Check size={16} className="inline mr-2 text-[#27ae60] rounded-full p-0.5 border border-[#27ae60]" />Nutrition coaching</li>
                    <li><Check size={16} className="inline mr-2 text-[#27ae60] rounded-full p-0.5 border border-[#27ae60]"/>Priority support</li>
                    <li><Check size={16} className="inline mr-2 text-neutral-700 rounded-full p-0.5 border border-neutral-700"/>Weekly live Q&A sessions</li>
                    <li><Check size={16} className="inline mr-2 text-neutral-700 rounded-full p-0.5 border border-neutral-700" />Exclusive webinars</li>
                    <li><Check size={16} className="inline mr-2 text-neutral-700 rounded-full p-0.5 border border-neutral-700" />Access to premium content</li>
                    <li><Check size={16} className="inline mr-2 text-neutral-700 rounded-full p-0.5 border border-neutral-700" />Discounts on merchandise</li>
                </ul>
                <div className='w-full h-[1px] bg-neutral-400 dark:bg-neutral-700'/>
                <button className="bg-[#27ae60] border border-neutral-400 dark:border-neutral-800 text-white px-6 py-3 rounded-lg mt-4">Get Started</button>
            </div>
            <div className="bg-neutral-100 hover:bg-neutral-200 text-black dark:text-white dark:bg-neutral-900 dark:hover:bg-neutral-800 transition-colors rounded-xl p-6  flex flex-col border-3 border-neutral-200">
                <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
                <p className='text-sm'>
                    Best for teams and organizations with advanced needs
                </p>
                <div className="text-2xl font-semibold flex items-center mt-2">
                    {activeTab === 'montly' ? '$49' : '$45'}
                    <span className='text-xs text-neutral-500 ml-2'>/ month</span></div>
                 <div className='w-full h-[1px] bg-neutral-400 dark:bg-neutral-700 my-4'/> 
                <ul className=" mb-4 flex-1 flex flex-col gap-2 text-sm">
                    <li>
                        <Check size={16} className="inline mr-2 text-[#27ae60] rounded-full p-0.5 border border-[#27ae60]" />
                        All features from Growth</li>
                    <li><Check size={16} className="inline mr-2 text-[#27ae60] rounded-full p-0.5 border border-[#27ae60]" />Custom training programs</li>
                    <li><Check size={16} className="inline mr-2 text-[#27ae60] rounded-full p-0.5 border border-[#27ae60]" />Dedicated account manager</li>
                    <li><Check size={16} className="inline mr-2 text-[#27ae60] rounded-full p-0.5 border border-[#27ae60]"/>Advanced analytics and reporting</li>
                    <li><Check size={16} className="inline mr-2 text-[#27ae60] rounded-full p-0.5 border border-[#27ae60]"/>24/7 support</li>
                    <li><Check size={16} className="inline mr-2 text-[#27ae60] rounded-full p-0.5 border border-[#27ae60]" />Custom integrations</li>
                    <li><Check size={16} className="inline mr-2 text-[#27ae60] rounded-full p-0.5 border border-[#27ae60]" />Team management features</li>
                    <li><Check size={16} className="inline mr-2 text-[#27ae60] rounded-full p-0.5 border border-[#27ae60]" />Exclusive access to beta features</li> 
                    <li><Check size={16} className="inline mr-2 text-[#27ae60] rounded-full p-0.5 border border-[#27ae60]" />Priority access to new features</li>
                </ul>
                <div className='w-full h-[1px] bg-neutral-400 dark:bg-neutral-700'/>
                <button className="bg-[#27ae60] dark:bg-[#27ae60]/50 hover:bg-[#27ae60] border border-neutral-400 dark:border-neutral-800 text-white px-6 py-3 rounded-lg mt-4">Get Started</button>
            </div>
        </section>

        <section className="bg-[#27ae60] rounded-t-4xl text-center py-10 px-4">
            <h2 className="text-3xl text-white dark:text-black font-semibold mb-4">Need Help?</h2>
            <p className="text-neutral-200 mb-6 w-8/12 mx-auto">
                If you have any questions or need assistance with choosing a plan, feel free to contact us.
                , we are here to help you make the best choice for your fitness journey.
            </p>
            <button className="bg-white text-[#27ae60] border-3 border-[#27ae60]/70 px-6 py-3 rounded-full hover:bg-neutral-700 transition-colors">
                Contact Support
            </button>
        </section>
        
    </main>
    )
}

export default Pricing
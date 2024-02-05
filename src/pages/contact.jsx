import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const contact = () => {
    return (
        <>
            <Head>
                <title>Gene&apos;s Portfolio - Contact Me</title>
                <meta
                    name="description"
                    content="Gene Howell - Digital media specialist skilled in video, graphics, web development, and radio production. Transforming ideas into captivating digital experiences for maximum impact. Let's create something extraordinary!"
                />
            </Head>
            <TransitionEffect />
            <main className="flex items-center text-dark w-full min-h-screen dark:text-light md:pt-4">
                <Layout className="pt-0">
                    <div className="flex items-center justify-between w-full lg:flex-col ">
                        {/* Contact Form Section */}
                        <div className="w-1/2 flex flex-col lg:w-full px-20 py-0">
                            <h1 className="text-2xl mb-3">Contact Gene Howell - Your Digital Media Specialist</h1>
                            <h1 className='text-xl mb-3'>Let's Create Something Extraordinary</h1>
                            <p className='text-lg mb-3'>Hello there! If you're looking for a seasoned Digital Media Specialist to bring your creative ideas to life, you're in the right place! I offer a wide range of services, including <Link className='hover:underline hover:font-bold' href="/webProjects">web development</Link>, <Link className='hover:underline hover:font-bold' href="/">programming</Link>, <Link className='hover:underline hover:font-bold' href="/">graphic design</Link>, <Link className='hover:underline hover:font-bold' href="/" >video production</Link>, and <Link className='hover:underline hover:font-bold' href="/" >radio</Link>.</p>
                            <p className='text-lg mb-3'>Whether you have a specific project in mind or you're seeking guidance on how digital media can elevate your brand, I'm here to help. Let's collaborate and transform your vision into a captivating digital experience.</p>
                            <h1 className='text-2xl mb-3'>Let's Connect!</h1>
                            <p>Ready to embark on a creative journey together? Connect with me via email or download my resume to learn more about what I bring to the table. I look forward to hearing from you and creating something extraordinary!</p>
                        </div>

                        {/* Contact Information Section */}
                        <div className="w-1/2 relative dark:z-10">
                            {/* Include your existing contact information section here */}
                            <div className="my-4">
                                <form action="#" method="post" className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-light">Name</label>
                                        <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-light">Email</label>
                                        <input type="email" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300" />
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-light">Message</label>
                                        <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default contact
import Layout from "@/components/Layout"
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/profilePic4.png"
import Link from "next/link";
import React from "react";

const contact = () => {
    return (
        <>
            <Head>
                <title>Gene&apos;s Portfolio - Contact Me</title>
                <meta
                    name="description"
                    content="Gene Howell - Digital media specialist skilled in video, graphics, web development, and radio production. Transforming ideas into captivating digital experiences for maximum impact. Let&apos;s create something extraordinary!"
                />
            </Head>
            <TransitionEffect />
            <main className="flex items-center text-dark w-full min-h-screen dark:text-light md:pt-4">
                <Layout className="pt-0">
                    <div className="flex items-center justify-center mb-8">
                        <Image
                            src={profilePic}
                            alt="Gene Howell"
                            className="w-auto h-auto rounded-full relative z-50 lg:flex-col lg:w-full md:pb-1 md:w-full lg:mb-16"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 20vw, 20vw"
                        />
                    </div>
                    <div className="flex items-center justify-between w-full lg:flex-col">
                        {/* Contact Form Section */}
                        <div className="w-full lg:w-1/2 flex flex-col items-center px-20 py-0">

                            <div className="text-left">
                                <h1 className="text-2xl mb-3">Contact Gene Howell - Your Digital Media Specialist</h1>
                                <p className="text-lg mb-3">Hello! I&apos;m Gene Howell, your experienced Digital Media Specialist. From web development to graphic design and video production, I offer a wide range of services. Let&apos;s collaborate to transform your vision into a captivating digital experience.</p>
                                <h1 className="text-2xl mb-3">Let&apos;s Connect!</h1>
                                <p className="text-lg mb-3">Reach out via email or download my resume to explore how I can contribute to your projects. I&apos;m excited to create something extraordinary together!</p>
                            </div>
                        </div>

                        {/* Contact Information Section */}
                        <div className="w-full lg:w-1/2 relative dark:z-10">
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


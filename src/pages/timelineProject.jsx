
import React from 'react'
import { CampIconsPic } from "../../public/images/projects/GraphicDesign/Icons2.png";
import Head from 'next/head';
import TransitionEffect from '@/components/TransitionEffect';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Timeline from '@/components/Timeline';

const events = [
    {
        title: 'Project Start',
        description: 'The project kicked off.',
        direction: "right",
        image: CampIconsPic,
    },
    {
        title: 'Design Phase',
        description: 'Designing the user interface.',
        direction: "left",
        image: CampIconsPic,
    },
    {
        title: 'Development Begins',
        description: 'Started coding the project.',
        direction: "right",
        image: CampIconsPic,
    },
    {
        title: 'Beta Testing',
        description: 'Testing the project with a select group of users.',
        direction: "left",
        image: CampIconsPic,
    },
    {
        title: 'Launch!',
        description: 'Project is live and ready for the public!',
        direction: "right",
        image: CampIconsPic,
    },
];


const timelineProject = () => {
    return (
        <>
            <Head>
                <title>Gene&apos;s Portfolio | Camp Icons Project Page</title>
                <meta
                    name="description"
                    content="Gene Howell - Digital media specialist skilled in video, graphics, web development, and radio production. Transforming ideas into captivating digital experiences for maximum impact. Let's create something extraordinary!"
                />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText
                        text='"Don’t wait for inspiration. It comes while working." – Henri Matisse'
                        className="mb-16 !text-6xl !text-center xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
                    />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-12 flex flex-col items-start justify-start xl:col-span-4 md:!order-2 md:!col-span-8">
                            <div className="container py-8">
                                <h1 className="font-bold text-7xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-164">Camp Icons Project Timeline</h1>
                                <Timeline events={events} />
                            </div>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default timelineProject
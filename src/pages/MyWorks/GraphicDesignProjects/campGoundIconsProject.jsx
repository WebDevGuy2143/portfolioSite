
import React from 'react'
import { CampIconsPic } from "../../../../public/images/Icons2.png";
import Head from 'next/head';
import TransitionEffect from '@/components/TransitionEffect';
import Layout from '@/components/Layout';
import AnimatedText from '@/components/AnimatedText';
import Timeline from '@/components/Timeline';

const events = [
    {
        title: '1. Project Brief',
        description: "In a project brief, I outline goals, requirements, and client expectations. I gather details on the client's objectives, target audience, and preferences, providing a clear roadmap for the design project.",
        direction: "right",
        image: CampIconsPic,
    },
    {
        title: '2. Research & Analysis Phase',
        description: 'During the Research and Analysis phase for campground graphic icons, I studid campground icons/logos and design trends to create and start a visual process for appealing icons that effectively convey the end goal.',
        direction: "left",
        image: CampIconsPic,
    },
    {
        title: '3. Concept Development Phase',
        description: "In the Concept Development phase, I brainstorm ideas and explore visuals based on project requirements. I experiment with typography, colors, and imagery to convey the message effectively.",
        direction: "right",
        image: CampIconsPic,
    },
    {
        title: '4. Feedback and Revisions Phase',
        description: "In the Feedback and Revisions phase, I incorporate client feedback to refine and iterate on the design.",
        direction: "left",
        image: CampIconsPic,
    },
    {
        title: '5. Finalization Phase!',
        description: "In the Finalization phase, I prepare the design for delivery, ensuring it meets all project specifications and client expectations.",
        direction: "right",
        image: CampIconsPic,
    },
    {
        title: '6. Presentation Phase!',
        description: "In the Presentation phase, I showcase the finalized design to the client, providing an opportunity for feedback and final approval.",
        direction: "left",
        image: CampIconsPic,
    },
    {
        title: '7. Client Approval Phase!',
        description: "In the Client Approval phase, I seek formal approval from the client for the finalized design, ensuring alignment with their expectations and requirements.",
        direction: "right",
        image: CampIconsPic,
    },
    {
        title: '8. Follow-up/Support Phase!',
        description: "In the Follow-up and Support phase, I provide ongoing assistance and guidance to the client, addressing any additional needs or questions related to the project and ensuring their satisfaction with the final deliverables.",
        direction: "left",
        image: CampIconsPic,
    },
];


const campgroundIconsProject = () => {
    return (
        <>
            <Head>
                <title>Gene&apos;s Portfolio | Campground Icons Project Page</title>
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

export default campgroundIconsProject;
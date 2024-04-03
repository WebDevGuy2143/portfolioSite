import React, { Fragment } from 'react';
import Image from 'next/image';
import IconsPic from "../../public/images/projects/GraphicDesign/Icons2.png";

const Timeline = ({ events }) => {

    return (
        <div className='flex flex-col gap-y-3 w-full my-4'>
            <Circle />
            {events.map((event, key) => {
                return <Fragment key={key}>
                    <div className='grid grid-cols-[1fr_auto_1fr] gap-x-5 items-center mx-auto'>
                        {event.direction === 'left' ? (<EventCard heading={event.title} subHeading={event.description} />) : (<div></div>)}
                        <Pillar />
                        {event.direction === 'right' ? (<EventCard heading={event.title} subHeading={event.description} />) : (<div></div>)}
                    </div>
                    {key < (event.length - 1) && <Circle />}
                </Fragment>
            })}
            <Circle />
        </div>
    )
}

const Circle = () => {
    return (<div className='stroke-dark dark:stroke-light animate-none'><div className='rounded-full w-4 h-4 bg-primary dark:bg-primaryDark mx-auto animate-pulse' ></div>

    </div>)
}

const Pillar = () => {
    return (<div className='bg-dark dark:bg-light w-[4px] h-full'>

    </div>)
}

const EventCard = ({ heading, subHeading }) => {
    return (
        <div className='flex flex-col gap-y-2 border shadow-md rounded-xl p-4'>
            <div className='capitalize font-bold text-2xl dark:text-light sm:text-xl xs:text-lg'>
                {heading}
            </div>
            <div><Image src={IconsPic} alt={heading} width={50} height={50} /></div>
            <div className='ont-medium w-full dark:text-light md:text-sm'>{subHeading}</div>
        </div>)
}

export default Timeline;

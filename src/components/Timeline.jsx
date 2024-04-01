import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Timeline = ({ events }) => {
    const [isVisible, setIsVisible] = useState([]);

    useEffect(() => {
        // Set the visibility of each stage to true after a delay
        const visibilityTimeouts = events.map((_, index) => setTimeout(() => setIsVisible(prevState => [...prevState, index]), index * 500));

        return () => {
            // Clear timeouts on component unmount
            visibilityTimeouts.forEach(timeout => clearTimeout(timeout));
        };
    }, [events]);

    return (
        <div className="w-full">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Timeline
            </h2>
            <div className="w-[75%] mx-auto relative lg:[90%] md:w-full">
                {/* Vertical line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-600"></div>
                <div className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 flex-wrap">
                    {/* Events */}

                    {events.map((event, index) => (
                        <div key={index} className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'} w-full relative mt-20`}>
                            {/* Timeline dot */}
                            <div className="absolute left-[200px] transform -translate-x-1/2 top-1/2">
                                <div className={`h-6 w-6 rounded-full bg-blue-600 border-2 border-white ${isVisible.includes(index) ? 'opacity-100' : 'opacity-0'}`}></div>
                            </div>
                            {/* Timeline content */}
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold">{event.title}</h3>
                                <p className="text-sm text-gray-600">{event.description}</p>
                                {event.image && <Image src={event.image} alt={event.title} className="mt-2" width={50} height={0} />}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
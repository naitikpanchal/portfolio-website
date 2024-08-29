'use client';
import React from 'react';
import SectionHeading from '@/components/section-heading';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useTheme } from '@/context/theme-context';

export default function Experience() {

    const { ref } = useSectionInView("Experience", 0.5);

    const { theme } = useTheme();

    return (
        <section ref={ref} id="experience" className="mb-28 max-w-[53rem] text-center sm:mb-40 scroll-mt-32 ">
            <SectionHeading>My Experiences</SectionHeading>
            <VerticalTimeline lineColor='' animate >
                {
                    experiencesData.map((item, index) => (
                        <React.Fragment key={index}>
                            <VerticalTimelineElement visible={true}
                                contentStyle={{ background: theme === "light" ?'f3f4f6' : "rgba(255,255,255,0.05)",
                                    boxShadow: "none",
                                    border: '1px solid rgba(0,0,0,0.05)',
                                    textAlign: 'left',
                                    padding: '1.3rem 2rem',
                                }}
                                contentArrowStyle={{ borderRight: theme === 'light' ? '0.4rem solid #9ca3af' : '0.4rem solid rgba(255,255,255,0.55)' }}
                                date={item.date}
                                dateClassName='mx-4'
                                icon={item.icon}
                                iconClassName='dark:!bg-gray-800 dark:bg-white/10'
                                iconStyle={{
                                    background: theme === 'light' ? 'white' : 'rgba(255,255,255,0.15)',
                                    fontSize: '1.5rem',
                                }}
                            >
                                <h3 className='font-semibold capitalize'>{item.title}</h3>
                                <p className='font-normal !mt-0'>{item.location}</p>
                                <p className='!mt-1 font-normal text-gray-700 dark:text-white/75 '>{item.description}</p>
                            </VerticalTimelineElement>
                        </React.Fragment>
                    ))
                }
            </VerticalTimeline>
        </section>
    )
}

'use client';
import React, { useState, createContext, useContext } from 'react';
import type { SectionName } from '@/lib/types';

type ActiveSectionContextProviderProps = {
    children: React.ReactNode;
}

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({ children }:ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>("Home");
    const [timeOfLastClick, setTimeOfLastClick] = useState(0); // time of last click in milliseconds to disable the observer when the user clicks on a link else the bubble in header goes through all the sections

    return (
        <ActiveSectionContext.Provider value={{activeSection,setActiveSection, timeOfLastClick, setTimeOfLastClick}}>
            {children}
        </ActiveSectionContext.Provider>
    );
}

export function useActiveSectionContext(){
    const context = useContext(ActiveSectionContext);
    
    if (context === null) {
        throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider');
    }
    return context;
}
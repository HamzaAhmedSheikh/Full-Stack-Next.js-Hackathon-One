"use client";
import { StateContext } from '@/context/StateContext';


function Context({children} : { children: React.ReactNode,  }) {
    return (
        <StateContext>
            {children}
        </StateContext>
    );
}

export default Context;
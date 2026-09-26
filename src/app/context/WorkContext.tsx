'use client';
import React, { ReactNode, SetStateAction, Dispatch} from 'react';
import { IWorkType } from '../types/WorkType';

interface IWorkProvidervalue {
    plan: IWorkType[];
    setPlan: Dispatch<SetStateAction<IWorkType[]>>;
    save: IWorkType[];
    setSave: Dispatch<SetStateAction<IWorkType[]>>;
}

export const WorkContext = React.createContext<IWorkProvidervalue>({
    plan: [],
    setPlan: () => undefined,
    save: [],
    setSave: () => undefined
});

const WorkProvider  = ({children}: {children: ReactNode}) => {

    const [plan, setPlan] = React.useState<IWorkType[]>([]);
    const [save, setSave] = React.useState<IWorkType[]>([]);

    const sharedData = {
        plan,
        setPlan,
        save,
        setSave
    };

    return (
        <div>
            <WorkContext.Provider value={sharedData}>
                {children}
            </WorkContext.Provider> 
        </div>
    );
};

export default WorkProvider;
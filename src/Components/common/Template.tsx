import React from 'react';
import { ChildComponentProps } from '@/Types/Interfaces';
import SimpleTab from '../Tabs/SimpleTab';
import ErrorTab from '../Tabs/ErrorTab';
import CMD from '@/Components/Tabs/CMD';
import { useStateManagement } from '@/hooks/StateContext';

const Template: React.FC<ChildComponentProps & { Tab: 'SimpleTab' | 'ErrorTab' | 'CMD' }> = ({ index, icon, Title, Tab }) => {
    const { Open, Min, Max, makeFalse, makeTrue } = useStateManagement();
    // const { OpenError, MinError, MaxError, IsFrontError, makeErrorFalse, makeErrorTrue } = useStateManagement();

    const renderTab = () => {
        switch (Tab) {
            case 'SimpleTab':
                return (
                    <SimpleTab
                        Title={Title}
                        icon={icon}
                        index={index}
                        Open={Open}
                        Max={Max}
                        Min={Min}
                        makeTrue={makeTrue}
                        makeFalse={makeFalse}
                    />
                );
            case 'ErrorTab':
                return <ErrorTab index={index} icon={icon} Title={Title}/>;
            case 'CMD':
                return <CMD index={index} icon={icon} Title={Title} />;
            default:
                return null;
        }
    };

    return (
        <div className={`${Max[index!] && Tab === 'SimpleTab' ? ' top-0 z-10 bg-transparent' : ''} `}>
            <div className='absoulte'>
                {renderTab()}
            </div>
        </div>
    );
};

export default Template;

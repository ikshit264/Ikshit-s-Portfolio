import RecentDoc from '@/../public/Recent_Documents.webp';
import Search from '@/../public/Search.webp';
import Run from '@/../public/Run.webp';
import MSN from '@/../public/MSN.webp';
import MyDoc from '@/../public/MyDocuments.webp';
import My_Pictures from '@/../public/My_Pictures.webp';
import My_Music from '@/../public/My_Music.webp';
import My_Computer from '@/../public/My_Computer.webp';
import Control_Panel from '@/../public/ControlPanel.webp';
import Default_Programs from '@/../public/Default_Programs.webp';
import Network_Connections from '@/../public/Network_Connections.webp';
import Printer from '@/../public/Printer.webp';
import Help_and_Support from '@/../public/Help_and_Support.webp';
import { StaticImageData } from 'next/image';

export interface StartMenuProps {
    title: string;
    IconClose ?: StaticImageData;
    IconOpen ?: StaticImageData;
    Component ?: React.ComponentType<any>;
    description ?: String;
    list ?: StartMenuProps[];
    Tab : 'SimpleTab' | 'ErrorTab' | 'CMD';
    Position : {x : number, y : number};
}

// Helper function to generate random positions between 1 and 150
const getRandomPosition = () => ({
    x: Math.floor(Math.random() * 400) + 400,
    y: Math.floor(Math.random() * 150) + 100,
});

export const ErrorData: StartMenuProps[] = [
    {
        title: 'My Documents',
        IconClose: MyDoc,
        Tab: 'ErrorTab',
        Position: {x:150, y:150},
    },
    {
        title: 'My Recent Documents',
        IconClose: RecentDoc,
        Tab: 'ErrorTab',
        list: [{ title: '(Empty)', Tab: 'ErrorTab', Position: getRandomPosition() }],
        Position: getRandomPosition(),
    },
    {
        title: 'My Picture',
        IconClose: My_Pictures,
        Tab: 'ErrorTab',
        Position: getRandomPosition(),
    },
    {
        title: 'My Music',
        IconClose: My_Music,
        Tab: 'ErrorTab',
        Position: getRandomPosition(),
    },
    {
        title: 'My Computer',
        IconClose: My_Computer,
        Tab: 'ErrorTab',
        Position: getRandomPosition(),
    },
    {
        title: 'none',
        IconClose: My_Computer,
        Tab: 'ErrorTab',
        Position: getRandomPosition(),
    },
    {
        title: 'Control Panel',
        IconClose: Control_Panel,
        Tab: 'ErrorTab',
        Position: getRandomPosition(),
    },
    {
        title: 'Set Program Access and Defaults',
        IconClose: Default_Programs,
        Tab: 'ErrorTab',
        Position: getRandomPosition(),
    },
    {
        title: 'Connect To',
        IconClose: Network_Connections,
        Tab: 'ErrorTab',
        Position: getRandomPosition(),
        list: [
            {
                title: 'MSN',
                IconClose: MSN,
                Tab: 'ErrorTab',
                Position: getRandomPosition(),
            },
            {
                title: 'Show all Connections',
                IconClose: Network_Connections,
                Tab: 'ErrorTab',
                Position: getRandomPosition(),
            }
        ],
    },
    {
        title: 'Printers and Faxes',
        IconClose: Printer,
        Tab: 'ErrorTab',
        Position: getRandomPosition(),
    },
    {
        title: 'none',
        IconClose: Printer,
        Tab: 'ErrorTab',
        Position: getRandomPosition(),
    },
    {
        title: 'Help and Support',
        IconClose: Help_and_Support,
        Tab: 'ErrorTab',
        Position: getRandomPosition(),
    },
    {
        title: 'Search',
        IconClose: Search,
        Tab: 'ErrorTab',
        Position: getRandomPosition(),
    },
    {
        title: 'Run...',
        IconClose: Run,
        Tab: 'ErrorTab',
        Position: getRandomPosition(),
    },
];

import React from 'react'
import * as AiIcons from 'react-icons/ai';

export const SidebarData=[
    {
        title: 'Home',
        path: '/home',
        icon:<AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Schedule',
        path: '/schedule',
        icon:<AiIcons.AiFillSchedule />,
        cName: 'nav-text'       
    },
    {
        title: 'Task Board',
        path: '/taskBoard',
        icon:<AiIcons.AiOutlineBars />,
        cName: 'nav-text'      
    },
    {},{},{},{},{},{},{},{},{},{},{},{},{},
    {
        title: 'Setting',
        path: '/setting',
        icon:<AiIcons.AiFillSetting />,
        cName: 'nav-text'      
    }
]
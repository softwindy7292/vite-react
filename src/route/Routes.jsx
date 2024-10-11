import React, { Component } from 'react';
import HomePage from '../pages/HomePage';
import BoardPage from '../pages/BoardPage';
import ProfilePage from '../pages/ProfilePage';
import PropsPage from '../pages/PropsPage';
import ThreePage from './../pages/ThreePage';
import CounterPage from '../pages/CounterPage';
import InputPage from './../pages/InputPage';
import GradePage from './../pages/GradePage';
import UseRefPage from '../pages/UseRefPage';
import UseRefPage2 from './../pages/UseRefPage2';
import UseArrayPage from './../pages/UseArrayPage';
import UserCrudPage from '../pages/UserCrudPage';
import AxiosPage from './../pages/AxiosPage';
import AxiosClientPage from './../pages/AxiosClientPage';
import UseEffectPage from './../pages/UseEffectPage';

//react routes, route 사용시 배열로 관리하기
const routes = [
    {
        path: '/',
        element: <HomePage />,
        title: 'Home',
    },

    {
        path: '/board',
        element: <BoardPage />,
        title: 'Board',
    },

    {
        path: '/profile',
        element: <ProfilePage />,
        title: 'Profile',
    },

    {
        path: '/props',
        element: <PropsPage />,
        title: '프롭스',
    },
    {
        path: '/three',
        element: <ThreePage />,
        title: '조건부랜더링',
    },
    {
        path: '/usestate',
        element: <CounterPage />,
        title: 'useState 연습',
    },
    {
        path: '/input',
        element: <InputPage />,
        title: 'input 연습',
    },
    {
        path: '/grade',
        element: <GradePage />,
        title: '성적표',
    },
    {
        path: '/useRef',
        element: <UseRefPage />,
        title: 'useRef 예제1',
    },
    {
        path: '/useRef2',
        element: <UseRefPage2 />,
        title: 'useRef 예제2',
    },
    {
        path: '/userpage',
        //element: <UseArrayPage />,
        element: <UserCrudPage />,
        title: '유저페이지(배열)',
    },
    {
        path: '/axiosget',
        element: <AxiosPage />,
        title: 'AxiosGet',
    },

    {
        path: '/axiosclient',
        element: <AxiosClientPage />,
        title: 'Axios클라이언트',
    },

    {
        path: '/effect',
        element: <UseEffectPage />,
        title: 'useEffect',
    },
];

export default routes;

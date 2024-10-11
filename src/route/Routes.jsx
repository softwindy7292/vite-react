import React, { Component } from 'react'
import HomePage from '../pages/HomePage'
import BoardPage from '../pages/BoardPage'
import ProfilePage from '../pages/ProfilePage'
import PropsPage from '../pages/PropsPage'
import ThreePage from '../pages/ThreePage'
import CounterPage from '../pages/CounterPage'
import InputPage from './../pages/InputPage'
import GradeInputPage from './../pages/GradeInputPage'
import UseRefPage from '../pages/UseRefPage'
import UseRefPage2 from '../pages/UseRefPage2'
import UserArrayPage from '../pages/UserArrayPage'
import UserCrudPage from '../pages/UserCrudPage'
import UseEffectPage from '../pages/UseEffectPage'
import AxiosPage from '../pages/AxiosPage'
import AxiosClientPage from '../pages/AxiosClientPage'

//React Routes, Route 사용시 배열로 관리하기
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
        path: '/useState',
        element: <CounterPage />,
        title: '숫자증감',
    },
    {
        path: '/input',
        element: <InputPage />,
        title: 'input연습',
    },
    {
        path: '/grade',
        element: <GradeInputPage />,
        title: '성적',
    },
    {
        path: '/useref',
        element: <UseRefPage />,
        title: 'useRef예제1',
    },
    {
        path: '/useref2',
        element: <UseRefPage2 />,
        title: 'useRef예제2',
    },
    {
        path: '/userpage',
        //element: <UserArrayPage />,
        element: <UserCrudPage />,
        title: 'user페이지',
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
        title: '유즈이펙트(useEffect)',
    },
]

export default routes

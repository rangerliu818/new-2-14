
import { lazy } from 'react'
import Home from '../view/home'
import Heart from '../view/heart'


// const Diary = lazy(()=>import('../views/diary'))
// const Music = lazy(()=>import('../views/music'))
// const DayPage = lazy(()=>import('../views/dayPage'))
// const MusicListDetail = lazy(()=>import('../views/musicListDetail'))
// const MusicPlay = lazy(()=>import('../views/musicPlay'))
// const PhotoGallery = lazy(()=>import('../views/photoGallery'))
// const TodoListPage = lazy(()=>import('../views/todoListPage'))
// const PhotoGalleriesList = lazy(()=>import('../views/photoGalleriesList'))
// const MessageBoard = lazy(()=>import('../views/messageBoard'))
// const TourView = lazy(()=>import('../views/tourView'))
 
export const routes = [
    {
        path: "/",
        element: <Home />
    },
    {
        path:"/heart",
        element: <Heart />
    }
    // { 
    //     path: "/diary", 
    //     element: <Diary />
    // },
    // { 
    //     path: "/music", 
    //     element: <Music />
    // },
    // { 
    //     path: "/dayPage", 
    //     element: <DayPage />
    // },
    // {
    //     path: '/musicListDetail/:id',
    //     element: <MusicListDetail />
    // },
    // {
    //     path: '/musicPlay/:id',
    //     element: <MusicPlay />
    // },
    // {
    //     path: '/photoGallery',
    //     element: <PhotoGallery />
    // },
    // {
    //     path: '/todoListPage',
    //     element: <TodoListPage />
    // },
    // {
    //     path: '/photoGalleriesList/*',
    //     element: <PhotoGalleriesList />
    // },
    // {
    //     path: '/messageBoard',
    //     element: <MessageBoard />
    // },
    // {
    //     path: '/tourView',
    //     element: <TourView />
    // }
]
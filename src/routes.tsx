import { createBrowserRouter } from "react-router-dom";
import {PublicLayout} from '@/components/layout/PublicLayout';
import { HomePage } from "@/components/pages/HomePage"; 

export const router = createBrowserRouter([
    {
        path:'/',
        element:<PublicLayout/>,
        children:[
            {
                index: true,
                element: <HomePage />,
            },
        ],
    },
])
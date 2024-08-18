import {createBrowserRouter} from "react-router-dom"
import LandingScreen from "../page/landingScreen"
import LoginScreen from "../page/loginScreen"
import MapEcoDashboard from "../page/mapEcoDashboard"
import MenuScreen from "../page/menuScreen"
import ChatbotScreen from "../page/chatbotScreen"
export const pageRoutes = createBrowserRouter([
    {
        path:'/',
        element:<LandingScreen/>
    },
    {
        path:'/login',
        element:<LoginScreen/>
    },
    {
        path:'/main',
        element:<MenuScreen/>
    },
    {
        path:'/ecodashboard/:hotelName',
        element:<MapEcoDashboard/>
    },
    {
        path:'/ecodashboard',
        element:<MapEcoDashboard/>
    },
    {
        path:'/chatbot',
        element:<ChatbotScreen/>
    }
])


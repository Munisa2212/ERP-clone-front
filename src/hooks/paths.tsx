import { NavLink } from "react-router-dom"
import {Groups, Home, Majors, Students, Teachers} from "../pages/Dashboard" 
import { AimOutlined, BookOutlined, UsergroupDeleteOutlined, UserOutlined } from "@ant-design/icons"

export const paths = {
    signIn: "/sign-in",
    home: "/",
    majors: "/majors",
    groups: "/groups",
    students: "/students",
    teachers: "/teachers"
}

export const DashboardRouteList = [
    {
        id: 1,
        path: paths.home,
        element: <Home/>
    },
    {
        id: 2,
        path: paths.majors,
        element: <Majors/>
    },
    {
        id: 3,
        path: paths.groups,
        element: <Groups/>
    },  
    {
        id: 4,
        path: paths.students,
        element: <Students/>
    },
    {
        id: 5,
        path: paths.teachers,
        element: <Teachers/>
    }
]

export const NavList = [
    {
        key: 1,
        label:<NavLink to={paths.groups}>Guruhlar</NavLink>,
        icon: <UsergroupDeleteOutlined />
    },
    {
        key: 2,
        label:<NavLink to={paths.majors}>Yo'nalishlar</NavLink>,
        icon: <AimOutlined />
    },
    {
        key: 3,
        label:<NavLink to={paths.students}>O'quvchilar</NavLink>,
        icon: <UserOutlined />
    },
    {
        key: 4,
        label:<NavLink to={paths.teachers}>Ustozlar</NavLink>,
        icon: <BookOutlined />
    },
]
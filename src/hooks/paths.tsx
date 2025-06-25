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
        id: 1,
        title: "Guruhlar",
        icon: <UsergroupDeleteOutlined />
    },
    {
        id: 2,
        title: "Yo'nalishlar",
        icon: <AimOutlined />
    },
    {
        id: 3,
        title: "O'quvchilar",
        icon: <UserOutlined />
    },
    {
        id: 4,
        title: "Ustozlar",
        icon: <BookOutlined />
    },
]

import { LayoutDashboard, Settings, UserCircleIcon, UsersIcon } from "lucide-react";
import { ReactNode } from "react";

export interface SidebarLinks {
    label: string;
    icon?: ReactNode;
    href: string;
    childs?: SidebarLinks[]
}

const sizeIconsSidebar = 18

export const sidebarLinks:SidebarLinks[] = [
    {
        label: 'Tablero',
        icon: <LayoutDashboard size={sizeIconsSidebar} className="min-w-[18px]"/>,
        href: "/",
    },
    {
        label: 'Usuarios',
        icon: <UsersIcon size={sizeIconsSidebar} className="min-w-[18px]"/>,
        href: "/users",
    },
    {
        label: 'Mi Perfil',
        icon: <UserCircleIcon size={sizeIconsSidebar} className="min-w-[18px]"/>,
        href: "/profile",
    },
    {
        label: 'Configuraciones',
        icon: <Settings size={sizeIconsSidebar} className="min-w-[18px]"/>,
        href: "/settings",
    }
]

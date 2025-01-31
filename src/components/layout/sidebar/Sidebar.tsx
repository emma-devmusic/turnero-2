import { sidebarLinks } from "../../../common/definitions/constants";
import { Avatar } from "../../shared/Avatar";
import { LinkItem } from "../../shared/LinkItem";
import { ArrowLeftCircle, LogOut } from "lucide-react";
import { profileImg } from "../../../common/helpers/dataInit";
import { useState } from "react";

export const Sidebar = () => {

    const [expanded, setExpanded] = useState(false);
    const toggleExpanded = () => setExpanded(!expanded);
    
    return (
        <div className={`absolute h-[calc(100vh-83px)] md:relative sm:translate-x-[0] flex md:h-full flex-col justify-between bg-white shadow-md transition-all ${expanded ? 'w-64 translate-x-[0] min-w-64 ' : '-translate-x-[100%] sm:w-16'}`}>
            <div className={`py-6 ${expanded ? 'px-2' : ''}`}>
                <ul className="flex flex-col gap-1.5">
                    {
                        sidebarLinks.map((link) => (
                            <li key={link.href}>
                                <LinkItem 
                                    to={link.href} 
                                    childs={link.childs} 
                                    icon={link.icon} 
                                    variant="sidebar"
                                    className={ `transition-all h-9 [&_div]:justify-start ${!expanded ? '[&_div]:!justify-center mx-1' : '[&_div]:animate-slideRight'}`}
                                >
                                    {!expanded ? '' : link.label}
                                </LinkItem>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <div className="flex items-center justify-end py-3 text-gray-600">
                    <div className="inline-flex translate-x-7" onClick={toggleExpanded}>
                        <span className="hover:cursor-pointer hover:text-secondary-hover transition-all bg-white p-1 pl-0 rounded-br-2xl rounded-tr-2xl">
                            <ArrowLeftCircle className={`transition-all ${expanded ? '' : 'rotate-180'}`} />
                        </span>
                    </div>
                </div>
                <div className="inset-x-0 bottom-0 border-t border-gray-200 flex items-center justify-between hover:bg-gray-100 hover:cursor-pointer h-16">
                    {
                        expanded &&
                        <Avatar
                            img={profileImg}
                            title='Cerrar Sesión'
                        />
                    }
                    <div className="">
                        <LogOut size={20} className={expanded ? 'mr-6' : 'm-5.5'} />
                    </div>
                </div>
            </div>
        </div>
    );
};

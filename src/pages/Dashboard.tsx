import { Content, Navbar, Sidebar } from "../components/layout";

export const Dashboard = () => {
    return (
        <div className='w-full h-full'>
            <Navbar />
            <div className='w-full'>
                <div className='w-full h-[calc(100vh-82px)] flex bg-gray-100'>
                    <Sidebar />
                    <div className='w-full sm:max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] mx-auto p-4 '>
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    );
};

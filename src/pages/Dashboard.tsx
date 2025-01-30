import { Content, Navbar, Sidebar } from "../components/layout";

export const Dashboard = () => {
    return (
        <div className='w-full h-[100vh] flex'>
            <div className='max-w-64 w-full'>
                <Sidebar />
            </div>
            <div className='w-full'>
                <Navbar />
                <div className='w-full bg-gray-100 h-[calc(100vh-80px)] p-4'>
                    <div className='w-full sm:max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] mx-auto'>
                        <Content />
                    </div>
                </div>
            </div>
        </div>
    );
};

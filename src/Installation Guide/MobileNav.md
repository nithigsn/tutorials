import { useLocation, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useRef, useState } from "react";





const MobileNav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const nodeRef = useRef(null);


    function handleNavigate(type) {
        if (type === 'home') {
            setIsOpen(!isOpen);
            navigate('/');

        }
        else if (type === 'about') {
            setIsOpen(!isOpen);
            navigate('/about');


        }


    }



    return (
        <div className="flex flex-col w-full items-center">

            <header className={`cursor-pointer flex justify-between h-12 w-[95vw] items-center  fixed z-[999]   backdrop-blur-[1px] ${location.pathname === '/projects/surrealstore' ? 'text-black' : ""}`}>
                <div className=" flex gap-x-2 items-center">

                    {
                        location.pathname === '/' ? (
                            <div className="flex profile items-center gap-x-2">
                                <img
                                    src="https://res.cloudinary.com/doqdlneyl/image/upload/v1729492388/2024-04-24_16.25.48_1_oidilp.jpg"
                                    alt="Description"
                                    className="size-8 object-cover rounded-full"
                                />
                                <p className="scale-in-center text-black hidden">Hello ??</p>
                            </div>

                        ) : (
                            <i className="fa-solid fa-arrow-left" onClick={()=>navigate(-1)}></i>
                        )
                    }


                </div>
                <i
                    className={`fa-solid text-black   ${isOpen ? 'fa-xmark' : 'fa-bars'}`}
                    onClick={() => setIsOpen(!isOpen)}
                />
            </header>



            <CSSTransition
                in={isOpen}
                timeout={300}
                classNames="fade"
                unmountOnExit
                nodeRef={nodeRef}
            >
                <div
                    ref={nodeRef}
                    className="h-screen w-full fixed flex flex-col  items-center z-[9999] bg-blg"
                >
                    <header className='w-[95vw] h-[48px] flex justify-between items-center fixed z-[999] cursor-pointer'>
                        <div className="flex gap-x-2">
                            <p className="animate-text">Nithish</p>

                        </div>
                        <i
                            className={`fa-solid  ${isOpen ? 'fa-xmark' : 'fa-bars'}`}
                            onClick={() => setIsOpen(!isOpen)}
                        />
                    </header>

                    <div className="flex flex-col w-[95vw] pt-[150px] cursor-pointer ">
                        <p className={`text-[30px] lg:text-[40px] animate-text ${location.pathname === '/' ? " font-semibold text-[50px]" : ""}`} onClick={() => handleNavigate('home')}>Home</p>
                        <p className={`text-[30px] lg:text-[40px] animate-text ${location.pathname === '/about' ? " font-semibold text-[50px]" : ""}`} onClick={() => handleNavigate('about')}>About</p>
                        <p className={`text-[30px] lg:text-[40px] animate-text ${location.pathname === '/projects' ? " font-semibold text-[50px]" : ""}`} >Projects</p>
                        <p className={`text-[30px] lg:text-[40px] animate-text ${location.pathname === '/skills' ? " font-semibold text-[50px]" : ""}`}>Skills</p>
                        <p className={`text-[30px] lg:text-[40px] animate-text ${location.pathname === '/contact' ? " font-semibold text-[50px]" : ""}`}>Contact</p>
                    </div>


                    <div className=" text-xs flex w-[95vw] h-full pt-[220px] pl-2">
                        <p className="">Made with love by me ;) </p>


                    </div>
                </div>
            </CSSTransition>
        </div>
    );
}

export default MobileNav;
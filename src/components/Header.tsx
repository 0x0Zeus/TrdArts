import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
// @ts-ignore
import format from "date-format";
import "./Header.css";
import { basic_url } from '@/stack/stack';
import { message } from 'antd';

function Header() {

    const [serverTime, setServerTime] = useState<number>(0);
    const ref = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        axios.get(`${basic_url}get_server_time`).then((res: AxiosResponse) => {
            setServerTime(new Date(res.data).getTime());
        }).catch(() => {
            message.error("Server Time Error")
        })

        ref.current = setInterval(() => {
            setServerTime(time => time + 1000);
        }, 1000);

        return () => {
            clearInterval(ref.current as ReturnType<typeof setInterval>);
        }

    }, [])

    return (
        <>
            <div className='fixed z-10 w-full bg-black'>
                <div className='container'>
                    <header>
                        <div className='flex items-center gap-6 max-md:h-[100px]'>
                            <Link to="/">
                                <div id='header-logo' className="w-[80px] h-[80px] cursor-pointer bg-[url('/icons/new-logo.png')] bg-no-repeat bg-[length:80px_80px]">
                                </div>
                            </Link>
                            <div className='grow text-2xl text-[white]'>
                                <div className='items-center hidden gap-6 py-4 pt-5 md:flex'>
                                    <div className="block text-center grow">
                                        GOLDEXCG is your gateway to a world of Gold news and financial commentary
                                    </div>
                                    <div className='hidden xl:block'>
                                        {format("yyyy : MM : dd", new Date(serverTime))}
                                    </div>
                                </div>
                                <div className='flex items-center justify-end sm:grid sm:grid-cols-2 xl:flex xl:justify-end'>
                                    <div className='hidden pb-2 text-right border-b-4 border-transparent sm:block xl:hidden'>
                                        {format("yyyy : MM : dd", new Date(serverTime))}
                                    </div>
                                    <div className='flex justify-end'>
                                        <Link to="/blogs" className='px-4 pb-2 border-b-4 hover:border-[white] border-transparent transition-colors duration-300 ease-in-out group'>
                                            <div className='px-2 py-1 transition-colors duration-300 ease-in-out bg-transparent rounded-lg group-hover:bg-gray-700 whitespace-nowrap'>Feature Articles</div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            <div className="w-full bg-black md:hidden block mt-[100px] pb-2 z-0">
                <div className="container">
                    <header>
                        <div className="static text-2xl text-[white] text-center">GOLDEXCG is your gateway to a world of Gold news and financial commentary</div>
                    </header>
                </div>
            </div>
            <div className="w-full h-[50px] lg:h-[120px]"></div>
        </>
    )
}
export default Header;


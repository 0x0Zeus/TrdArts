import {links4} from '@/stack/links';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser'

const TradingChart = () => {
    const [link, setLink] = useState<string>('');

    useEffect(() => {
        const random = Math.floor(Math.random() * length);
        setLink(links4[random]);
    }, [])

    return (
        <>
            <div>
                <div className="text-center py-4 mb-12 text-[white] text-4xl" style={{ backgroundColor: 'rgb(29, 67, 84)' }}>
                    NEWS
                </div>
                <div className="grid items-center gap-8 xl:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                    <iframe className="order-0 widget_preview_iframe" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen={true} scrolling="no" style={{ visibility: "visible", width: "100%", height: "623px" }} src="https://www.feedspot.com/widgets/lookup/dea1Uv6h3f03"></iframe>
                    <div className="flex items-center justify-center w-full px-4 md:order-last lg:order-none md:col-span-2 lg:col-span-1">
                        <div className="lg:max-w-[300px] max-w-[400px] w-full h-auto shadow-[0_0_20px_0] rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-200 ease-in">
                            {parse(link)}
                        </div>
                    </div>
                    <iframe className="widget_preview_iframe" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen={true} scrolling="no" style={{ visibility: "visible", width: "100%", height: "623px" }} src="https://www.feedspot.com/widgets/lookup/UvBgf648a2ac"></iframe>
                </div>
            </div>
        </>

    );
}

export default TradingChart;
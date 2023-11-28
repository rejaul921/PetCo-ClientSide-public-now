import bannerPic from '../assets/imgs/banner.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Banner = () => {

    useEffect(() => {
        AOS.init();
      }, []);


    return (
        <div className="">
            <div className=" relative h-[60vh] md:h-[85vh] w-full">
                <div className="h-full mx-auto"><img src={bannerPic} className="rounded-xl mx-auto h-full w-full" />
                </div>
                <div data-aos="zoom-in-right"
                    data-aos-duration="1500"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine"
                 className="absolute  top-1/3 ml-5">
                    <div>
                        <h4 className="text-lg font-bold text-white">We make your pets Happy</h4>
                        <h2 className="text-5xl font-bold text-white py-3">Taking Care of Your Furry Friends</h2>
                        <ScrollLink to="aboutUsSection" smooth={true} duration={1000}>
                            <button className="p-1 text-white bg-red-500 rounded-md font-bold">Know More About Us</button>
                        </ScrollLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
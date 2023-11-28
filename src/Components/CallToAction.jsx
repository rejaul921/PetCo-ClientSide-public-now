import { Link } from "react-router-dom";
import img1 from "../assets/imgs/inspiration1.webp"
import img2 from "../assets/imgs/inspiration2.jpg"
import img3 from "../assets/imgs/inspiration3.jpg"
import img4 from "../assets/imgs/inspiration4.jpg"
import img5 from "../assets/imgs/inspiration5.jpg"
import img6 from "../assets/imgs/inspiration6.jpg"


const CallToAction = () => {
    return (
        <div className="text-center mx-auto">
            <div  className="text-center mx-auto">
                <p className="italic text-2xl font-thin my-9">Welcome the unconditional love of a furry friend into your home. By choosing pet adoption, you are not only giving them a better life but also gaining a lifelong companion. Experience the joy of making a positive impact—adopt a pet today!</p>
            </div>
            <div className="w-11/12 text-center mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-3 ">
                <div className="mx-auto h-60 w-64"><img className="h-full mx-auto p-1  w-full" src={img1} alt="" /></div>
                <div className="mx-auto h-60 w-64"><img className="h-full mx-auto p-1  w-full" src={img2} alt="" /></div>
                <div className="mx-auto h-60 w-64"><img className="h-full mx-auto p-1  w-full" src={img3} alt="" /></div>
                <div className="mx-auto h-60 w-64"><img className="h-full mx-auto p-1  w-full" src={img4} alt="" /></div>
                <div className="mx-auto h-60 w-64"><img className="h-full mx-auto p-1  w-full" src={img5} alt="" /></div>
                <div className="mx-auto h-60 w-64"><img className="h-full mx-auto p-1  w-full" src={img6} alt="" /></div>
            </div>
            <Link to="/adoptpet"><button className="p-2 bg-red-600 text-white  rounded-xl my-5 font-bold">Adopt a pet</button></Link>
        </div>
    );
};

export default CallToAction;
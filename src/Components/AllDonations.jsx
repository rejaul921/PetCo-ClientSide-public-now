import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllDonations = () => {
    const [allCampaign, setAllCampaign] = useState([])
    useEffect(() => {
        fetch('https://petco-server.vercel.app/allCampaign')
            .then(res => res.json())
            .then(data => setAllCampaign(data))
    }, [])
    console.log(allCampaign);


    return (
        <div>
            <div className="mb-4 py-8 text-center">
                <h2 className="font-bold text-xl">Please try to help these pet to have a better life for them</h2>
            </div>
            <div className="flex flex-wrap -mx-4">
                {allCampaign.map((pet) => (

                    <div key={pet._id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                        <div className="bg-white p-4 border rounded-md">
                            <img src={pet.petImage} className="w-full h-48 object-cover mb-4"/>

                            <p className="text-lg font-bold mb-2">{pet.petName}</p>
                            <p>Maximum donate amount: {pet.MaxAmount}</p>
                            <p>Posted Date: {pet.addedDate}</p>
                            <p>Donated Amount: {pet.donated}</p>

                            <Link to={`/donationDetails/${pet._id}`}>
                                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none">
                                    Details
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
};

export default AllDonations;
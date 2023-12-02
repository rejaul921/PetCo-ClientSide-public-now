import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const MyDonationCapaign = () => {
    const { user } = useContext(AuthContext)
    const [allDonations, setAllDonations] = useState([])
    useEffect(() => {
        fetch('https://petco-server.vercel.app/allCampaign')
            .then(res => res.json())
            .then(data => setAllDonations(data))
    }, [])

    const myAddedDonations = allDonations.filter(donation => (donation.addedBy = user.email))
    console.log(myAddedDonations);

    return (
        <div className=" mx-auto mt-8 p-4 lg:w-4/5  bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">My Donation Campaigns</h2>
            {
                myAddedDonations.map(donation=> <div key={donation._id} className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Pet Name</th>
                            <th>Maximum Amount</th>
                            <th>Action buttons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                {donation.petName}
                            </th>
                            <th>
                                {donation.MaxAmount}
                            </th>
                            <th>
                                <div className="flex gap-1 justify-center">
                                    <button className="btn p-1 bg-red-500 text-white">Edit Campaign</button>
                                    <button className="btn p-1 bg-red-500 text-white">View Donors</button>
                                </div>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>)
            }
            
        </div>
    );
};

export default MyDonationCapaign;
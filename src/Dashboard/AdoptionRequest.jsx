import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const AdoptionRequest = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    const [allRequest, setAllRequest] = useState([])
    useEffect(() => {
        fetch('https://petco-server.vercel.app/adopttionRequest')
            .then(res => res.json())
            .then(data => setAllRequest(data))
    }, [])
    console.log(allRequest)

    return (
        <div className=" mx-auto mt-8 p-4 lg:w-4/5  bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">My Pet Adoption Request</h2>
            {
                allRequest.map(adopter=> <div key={adopter._id} className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Requester Name</th>
                            <th>Requester Phone</th>
                            <th>Requester Email</th>
                            <th>Requester location</th>
                            <th>Action buttons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                {adopter.name}
                            </th>
                            <th>
                                {adopter.phoneNumber}
                            </th>
                            <th>
                                {adopter.email}
                            </th>
                            <th>
                                {adopter.location}
                            </th>
                            <th>
                                <div className="flex gap-1 justify-center">
                                    <button className="btn p-1 bg-red-500 text-white">Accept</button>
                                    <button className="btn p-1 bg-red-500 text-white">Decline</button>
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

export default AdoptionRequest;
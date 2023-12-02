import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const MyAddedPet = () => {
    const { user } = useContext(AuthContext)
    const [allPets, setAllPets] = useState([])
    useEffect(() => {
        fetch('https://petco-server.vercel.app/allPets')
            .then(res => res.json())
            .then(data => setAllPets(data))
    }, [])

    const myAddedPets = allPets.filter(Pet => (Pet.addedBy = user.email))
    console.log(myAddedPets);
    return (
        <div className=" mx-auto mt-8 p-4 lg:w-4/5  bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">My Added all Pets</h2>
            {/* display in tabular format */}
            {
                myAddedPets.map(pet => <div key={pet._id} className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Pet Category</th>
                                <th>Pet Image</th>
                                <th>Pet Name</th>
                                <th>Adoption Status</th>
                                <th>Action buttons</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    {pet.petCategory}
                                </th>
                                <td>
                                    <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={pet.petImage}/>
                                            </div>
                                    </div>
                                </td>
                                <td>
                                    {pet.petName}
                                </td>
                                <td>
                                    {
                                        pet.adopted? "Adopted":"Not Adopted"
                                    }
                                </td>
                                <th>
                                    <div className="flex gap-1 justify-center">
                                        <button className="btn p-1 bg-red-500 text-white">Update</button>
                                        <button className="btn p-1 bg-red-500 text-white">Delete</button>
                                        <button className="btn p-1 bg-red-500 text-white">Mark Adopted</button>
                                    </div>
                                </th>
                            </tr>

                        </tbody>
                        {/* foot */}
                    </table>
                </div>
                )
            }
        </div>
    );
};

export default MyAddedPet;
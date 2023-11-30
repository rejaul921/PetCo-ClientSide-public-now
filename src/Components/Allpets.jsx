import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Allpets = () => {
    const [allPets, setAllPets] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/allPets')
            .then(res => res.json())
            .then(data => setAllPets(data))
    }, [])
    console.log(allPets);



    return (
        <div>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by name"
                    className="px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                />
                <select
                    className="ml-2 px-4 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
                >
                    <option value="All">All Categories</option>
                    <option value="Cat">Cat</option>
                    <option value="Dog">Dog</option>
                    <option value="Rabbit">Rabbit</option>
                    <option value="Bird">Bird</option>
                </select>
            </div>
            <div className="flex flex-wrap -mx-4">
                {allPets.map((pet) => (

                    <div key={pet._id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                        <div className="bg-white p-4 border rounded-md">
                            <img src={pet.petImage} className="w-full h-48 object-cover mb-4"/>

                            <p className="text-lg font-bold mb-2">{pet.petName}</p>
                            <p>Age: {pet.petAge}</p>
                            <p>Posted Date:{pet.addedDate}</p>
                            <p>Location: {pet.petLocation}</p>

                            <Link to={`/petDetails/${pet._id}`}>
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

export default Allpets;
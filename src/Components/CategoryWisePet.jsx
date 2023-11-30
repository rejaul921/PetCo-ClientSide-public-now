import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";


const CategoryWisePet = () => {
    const[categoryWisePets, setCategoryWisePets]=useState([]);
    const {name}=useParams();

    useEffect(()=>{
        fetch(`http://localhost:5000/categories/${name}`)
        .then(res=>res.json())
        .then(data=>setCategoryWisePets(data))

    },[name])

    return (
        <div>
            <div className="flex flex-wrap -mx-4">
            {
                categoryWisePets.map((pet) => (

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
                ))
            }
            </div>
            
        </div>
    );
};

export default CategoryWisePet;
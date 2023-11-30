import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const PetDetails = () => {
    const { user } = useContext(AuthContext);
    const pet = useLoaderData();
    console.log(pet);


    const handleRuquest=e=>{
        e.preventDefault();
        const form = document.getElementById('my_modal_5_form');

        const formData = new FormData(form);
        const name = user.displayName
        const location = formData.get('location')
        const phoneNumber = formData.get('phoneNumber')
        const petId=pet._id
        const email = user.email
        const userInfo={name, location, phoneNumber, email, petId};
        console.log(userInfo)

        // Saving adoption request
        fetch('https://petco-server.vercel.app/addAdoptionRequest', {
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body:JSON.stringify(userInfo)
                })
                .then(res=>res.json())
                .then(data=>{
                    // console.log(data)
                    if(data.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "You have sent Successfully adoption request",
                            showConfirmButton: false,
                            timer: 1500
                          });}
                })


        document.getElementById('my_modal_5').close();
    }

    return (
        <div className="container mx-auto my-8">
            <div className="flex items-center justify-center">
                <div className="w-full md:w-2/3 lg:w-1/2">
                    <img src={pet.petImage} alt={pet.petName} className="w-full h-64 object-cover mb-4"
                    />
                    <h2 className="text-3xl font-bold mb-2">{pet.petName}</h2>
                    <p className="text-gray-600 mb-4">{pet.shortDescription}</p>
                    <div className="mb-4 flex justify-center gap-3">
                        <p className="font-bold">Age:</p>
                        <p>{pet.petAge} years</p>
                    </div>
                    <div className="mb-4 flex justify-center gap-3">
                        <p className="font-bold">Location:</p>
                        <p>{pet.petLocation}</p>
                    </div>
                    <div className="mb-8">
                        <p className="font-bold">Description:</p>
                        <p>{pet.longDescription}</p>
                    </div>
                    <div>
                        {/* Modal Button */}
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
                            onClick={() => document.getElementById('my_modal_5').showModal()}
                            >Adopt Now
                        </button>

                        {/* modal */}
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Hello {user.displayName}!</h3>


                        {/* asking for return date */}
                                <div className="modal-action">
                                    <form id="my_modal_5_form" method="dialog">
                                        {/* user Loaction */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Location to Meet</span>
                                            </label>
                                            <input type="text" required placeholder="Location" name="location" className="input input-bordered"/>
                                        </div>
                                        {/* Phone number */}
                                        <div className="form-control">
                                        <label className="label">
                                                <span className="label-text">Phone Number</span>
                                            </label>
                                            <input type="text" required placeholder="Your Number" name="phoneNumber" className="input input-bordered"/>
                                        </div>
                                        {/* name */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Your Name is</span>
                                            </label>
                                            <input type="text" placeholder={user.displayName} readOnly name="name" className="input input-bordered" required />
                                        </div>
                                        {/* email */}
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Your Name Email is</span>
                                            </label>
                                            <input type="text" placeholder={user.email} readOnly name="email" className="input input-bordered" required />
                                        </div>
                                        
                                        <button onClick={handleRuquest} className="btn mt-1">Send Adopt Request</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import Modal from 'react-modal'
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const DonateCampaDetails = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const donateCamp = useLoaderData();
    console.log(donateCamp);
    const [isModalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };



    return (
        <div className="container mx-auto my-8">
            <div className="flex items-center justify-center">
                <div className="w-full md:w-2/3 lg:w-1/2">
                    <img src={donateCamp.petImage} alt={donateCamp.petName} className="w-full h-64 object-cover mb-4"
                    />
                    <h2 className="text-3xl font-bold mb-2">{donateCamp.petName}</h2>
                    <p className="text-gray-600 mb-4">{donateCamp.shortDescription}</p>
                    <div className="mb-4 flex justify-center gap-3">
                        <p className="font-bold">Last donation Date:</p>
                        <p>{donateCamp.lastDate}</p>
                    </div>
                    <div className="mb-4 flex justify-center gap-3">
                        <p className="font-bold">Donated:</p>
                        <p>{donateCamp.donated} $</p>
                    </div>
                    <div className="mb-4 flex justify-center gap-3">
                        <p className="font-bold">Maximum donation Amount:</p>
                        <p>{donateCamp.MaxAmount} $</p>
                    </div>
                    <div className="mb-8">
                        <p className="font-bold">Description:</p>
                        <p>{donateCamp.longDescription}</p>
                    </div>
                    <div>
                        {/* Modal Button */}
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded-md focus:outline-none"
                            onClick={openModal}
                        >
                            Donate Now
                        </button>
                        {/* Modal */}

                        <Modal
                            isOpen={isModalOpen}
                            onRequestClose={closeModal}
                            contentLabel="Donate Modal"
                        >
                            <Elements stripe={stripePromise}>
                                <CheckoutForm closeModal={closeModal} />
                            </Elements>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonateCampaDetails;
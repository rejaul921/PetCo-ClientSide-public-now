import { useState } from "react";


const SubscriptionSection = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubscribe = (e) => {
        e.preventDefault();
        // console.log(`Subscribed with email: ${email}`);
        setName('');
        setEmail('');
    };


    return (
        <div className="my-10">
            <section className="subscription-section bg-gray-200">
                <div className="container mx-auto flex flex-col items-center py-16">
                    <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
                    <p className="text-lg text-gray-700 mb-8">
                        Subscribe to receive updates on the latest donation campaigns, new pets available for adoption, and more.
                    </p>
                    <form onSubmit={handleSubscribe} className="grid lg:flex items-center">
                        <input
                            type="text"
                            placeholder="Your name"
                            value={name}
                            onChange={handleNameChange}
                            className="rounded-l-md py-2 px-4 mb-2 md:mb-0 md:mr-2 focus:outline-none"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your email address"
                            value={email}
                            onChange={handleEmailChange}
                            className="rounded-l-md py-2 px-4 focus:outline-none"
                            required
                        />
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default SubscriptionSection;
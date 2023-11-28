

const FrequentAsk = () => {
    return (
        <div>
            {/* Faq */}
            <div className="my-7">
                <h2 className="text-center text-5xl font-bold">
                    FAQ's
                </h2>
            </div>

            {/* accordian */}
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    How do I adopt a pet?
                </div>
                <div className="collapse-content">
                    <p>Browse available pets in the 'Pet Listing' section.Click on the pet profile to view details.Click the "Adopt request" button to initiate the adoption process.Follow the instructions to complete the adoption application.The pet owner will review your application, and if approved, you'll be notified to arrange a meeting.</p>
                </div>
            </div>
{/* 2nd */}
            <div className="collapse collapse-arrow my-3 bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                How can I list my pet for adoption?
                </div>
                <div className="collapse-content">
                    <p>Listing your pet for adoption is easy:Navigate to your profile dashboard.Select "Add Pet".Fill in details about your pet, including photos and Submit.Done, your pet will be visible to potential adopters.</p>
                </div>
            </div>
{/* 3rd */}

            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Is my personal information secure on this platform?
                </div>
                <div className="collapse-content">
                    <p>Yes, we take the security and privacy of your information seriously. Our platform employs robust security measures to safeguard your personal details. We use encryption protocols, secure servers, and follow best practices to ensure a secure and private experience for all users. For more information, please refer to our Privacy Policy.</p>
                </div>
            </div>
        </div>
    );
};

export default FrequentAsk;
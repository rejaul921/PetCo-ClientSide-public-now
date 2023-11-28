
const AboutUsSection = () => {
  return (
    <section  id="aboutUsSection" className="about-us-section mt-8 bg-gray-100">
      <div className="container mx-auto py-16">
        <h2 className="text-4xl font-bold mb-8 text-red-600">About Us</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 pr-8 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">How It Works</h3>
            <p className="text-gray-700">
              Our platform connects pet lovers with pets in need. Here is how it works:
            </p>
            <ul className=" ml-6 text-gray-700">
              <li>Browse pets available for adoption by category.</li>
              <li>Express your interest in adopting a pet.</li>
              <li>Connect with pet owners and complete the adoption process.</li>
              <li>Participate in fundraising campaigns to support pet welfare.</li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4">Why We Exist</h3>
            <p className="text-gray-700">
              Our mission is to create a loving community where every pet finds a caring home.
            </p>
            <p className="text-gray-700">
              We believe in the transformative power of pet adoption and aim to make the process
              simple and accessible for everyone. By connecting pet owners and potential adopters,
              we contribute to building happier homes and healthier communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

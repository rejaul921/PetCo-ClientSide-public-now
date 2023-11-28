import AboutUsSection from "../Components/AboutUsSection";
import Banner from "../Components/Banner";
import CallToAction from "../Components/CallToAction";
import CategoryBrowse from "../Components/CategoryBrowse";
import FrequentAsk from "../Components/FrequentAsk";
import SubscriptionSection from "../Components/SubscriptionSection";


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <FrequentAsk></FrequentAsk>
            <hr className="border-1 border-red-600 w-3/6 mx-auto my-10" />
            <CategoryBrowse></CategoryBrowse>
            <CallToAction></CallToAction>
            <AboutUsSection id="aboutUsSection"></AboutUsSection>
            <SubscriptionSection></SubscriptionSection>
        </div>
    );
};

export default HomePage;
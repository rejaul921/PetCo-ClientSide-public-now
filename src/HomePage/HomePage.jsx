import Banner from "../Components/Banner";
import CategoryBrowse from "../Components/CategoryBrowse";
import FrequentAsk from "../Components/FrequentAsk";


const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <FrequentAsk></FrequentAsk>
            <hr className="border-1 border-red-600 w-3/6 mx-auto my-10" />
            <CategoryBrowse></CategoryBrowse>
            All home page item will be here.
        </div>
    );
};

export default HomePage;
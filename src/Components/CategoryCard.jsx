import { Link } from "react-router-dom";


const CategoryCard = ({category}) => {
    const{name}=category
    return (
        <div>
            <div className="h-60 mx-auto text-center shadow-xl">
            <Link to={`/categories/${name}`}>
                <div className="h-36 w-52"><img className="h-full p-1 rounded-full w-full" src={category.img} alt="" /></div>
                <div className="mt-2 h-8"><h2 className="text-xl font-bold">{category.name}</h2></div>
                <button className="p-1 mb-1 rounded-xl bg-red-500 font-bold text-white">Browse Category</button>
            </Link>
        </div>
        </div>
    );
};

export default CategoryCard;
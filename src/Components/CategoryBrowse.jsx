import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";


const CategoryBrowse = () => {

    const[categories,setCategory]=useState([]);
    useEffect(()=>{
        fetch(`https://petco-server.vercel.app/categories`)
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])

    return (
        <div>
            <div className="mx-auto text-center">
                <h3 className="text-3xl font-bold my-10 text-center">
                    Browse pets By Category
                </h3>
            </div>
            {/* Pet Category Card display */}
            <div>
            <div className="w-4/5 grid gap-4 md:grid-cols-2 lg:grid-cols-4 mx-auto">
                    {
                        categories.map(category=> <CategoryCard key={category.id} category={category}></CategoryCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryBrowse;
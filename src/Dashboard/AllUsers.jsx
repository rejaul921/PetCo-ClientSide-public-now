import { useEffect, useState } from "react";


const AllUsers = () => {

    const [allUsers, setAllUsers] = useState([])
    useEffect(() => {
        fetch('https://petco-server.vercel.app/allUsers')
            .then(res => res.json())
            .then(data => setAllUsers(data))
    }, [])
    console.log(allUsers)
    return (
        <div className=" mx-auto mt-8 p-4 lg:w-4/5  bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">All Users</h2>
            {
                allUsers.map(User=> <div key={User._id} className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>User Status</th>
                            <th>Action buttons</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>
                                {User.displayName}
                            </th>
                            <th>
                                {User.email}
                            </th>
                            <th>
                                {User.isAdmin? "An Admin":"A User"}
                            </th>
                            <th>
                                <div className="flex gap-1 justify-center">
                                    <button className="btn p-1 bg-red-500 text-white">Make Admin</button>
                                </div>
                            </th>
                        </tr>

                    </tbody>
                </table>
            </div>)
            }
        </div>
    );
};

export default AllUsers;
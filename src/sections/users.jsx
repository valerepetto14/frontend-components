import React from "react";
import CardUsers from "../components/CardUsers";

import user from "../assets/user.jpeg";
import user2 from "../assets/user2.jpeg";
import user3 from "../assets/user3.jpeg";

function Users () {
    return (
        <div className="w-full h-screen bg-slate-100 p-5 flex items-center justify-center">
            <div className="flex h-[545px] flex-wrap justify-center gap-24 items-center overflow-auto group">
                <CardUsers
                  img={user}
                />
                <CardUsers
                  img={user2}
                />
                <CardUsers
                  img={user3}
                />
            </div>
        </div>
    )
}

export default Users;
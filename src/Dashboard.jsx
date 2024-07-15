import React from "react";
import './Dashboard.css'

import AddUser from './reagistration/AddUsers'
import TakeUserPage from './reagistration/TakeUsers'

function DashFunc() {
    return (
        <div className="dashContainer">

            {/*<AddUser />*/}
            <TakeUserPage />
        </div>
    )
}

export default DashFunc;
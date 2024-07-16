import React from "react";
import './Dashboard.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import {Link} from "react-router-dom";

import AddUser from './reagistration/AddUsers'
import TakeUserPage from './reagistration/TakeUsers'

function DashFunc() {
    return (
        <div className="dashContainer">

            <Router>
                <Routes>
                    <Route path="/" element={<TakeUserPage />}></Route>
                    <Route path="/add" element={<AddUser />}></Route>
                    <Route path="/table" element={<TakeUserPage />}></Route>
                </Routes>
            </Router>
            {/*<AddUser />*/}
            {/*<TakeUserPage />*/}

        </div>
    )
}

export default DashFunc;
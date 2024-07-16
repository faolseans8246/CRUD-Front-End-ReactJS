import React, {useEffect, useState} from "react";
import './TakeUsers.css'


function TakeUsersFunc() {
    // functional part
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch("http://localhost:7172/addStudent/takes")
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error("Xatolik", error))
    }, []);


    // body part
    return (
        <div className="takeUserContainer">

            <div className="taken-users">

                {/*Olingan userlarning jadvali teksti qimsi*/}
                <div className="take-user-note-text">
                    <h1 className="take-user-text">
                        Your users
                    </h1>
                </div>

                {/*Olingan userlar jadvali qismi*/}
                <div className="take-users-table-part">
                    <table className="take-user-all" border="1">
                        {/*Jadvalning bosh qismi*/}
                        <thead className="take-user-table-part-of-head">
                        <tr className="take-user-table-tr-head">
                            <th className="take-user-th-cols">No</th>
                            <th className="take-user-th-cols">Firstname</th>
                            <th className="take-user-th-cols">Lastname</th>
                            <th className="take-user-th-cols">Day</th>
                            <th className="take-user-th-cols">Month</th>
                            <th className="take-user-th-cols">Year</th>
                            <th className="take-user-th-cols">Address</th>
                            <th className="take-user-th-cols">Gender</th>

                            {/*Buttons part*/}
                            <th className="take-user-th-cols">Delete</th>
                            <th className="take-user-th-cols">Update</th>
                        </tr>
                        </thead>

                        {/*Jadvalning tana qismi*/}
                        <tbody className="take-user-table-part-of-body">
                        {users.map((user, index) => (
                            <tr className="take-user-table-tr-body" key={index}>
                                <td className="take-use-td-cols">{index + 1}</td>
                                <td className="take-use-td-cols">{user.names}</td>
                                <td className="take-use-td-cols">{user.surname}</td>
                                <td className="take-use-td-cols">{user.day}</td>
                                <td className="take-use-td-cols">{user.month}</td>
                                <td className="take-use-td-cols">{user.years}</td>
                                <td className="take-use-td-cols">{user.address}</td>
                                <td className="take-use-td-cols">{user.poll}</td>

                                {/*buttons part*/}
                                <td className="take-user-td-cols-button">
                                    <div className="take-user-td-cols-button-block">
                                        <button className="take-user-delete-rows-button delete-but">
                                            Delete
                                        </button>
                                    </div>
                                </td>
                                <td className="take-user-td-cols-button">
                                    <div className="take-user-td-cols-button-block">
                                        <button className="take-user-delete-rows-button update-but">
                                            Update
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default TakeUsersFunc;
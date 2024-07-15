import React, {useState} from "react";
import './AddUsers.css'

function AddUserFunc() {
    // Vazifalar qismini shakllantiramiz
    const [formData, setFormData] = useState({
        names: "",
        surname: "",
        day: "",
        month: "",
        years: "",
        address: "",
        poll: ""
    })

    // button vazifa qismi bilan ishlash
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value});
    }

    // API qismi bilan ishlash qismi
    const handleSubmit = (e) => {
        e.preventDefault();

        // Back-End API manzili
        fetch("http://localhost:7172/addStudent/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Muvaffaqiyatli!", data)
            })

            .catch(err => {
                console.error("Xatolik", err)
            });
    };


    // asosiy web qismi bilan ishlash qismi
    return (
        <div className="addUserContainer">

            {/*User form block*/}
            <div className="add-user-part">

                {/*User form block main text*/}
                <div className="add-user-main-text">
                    <h1 className="add-user-text">
                        Add Student
                    </h1>
                </div>

                {/*User form enter notes*/}
                <div className="add-user-entrece-form">
                    {/*User form part*/}
                    <form onSubmit={handleSubmit} action="" className="add-user-complate-form">
                        {/*Firstname's place*/}
                        <div className="add-user-notes-part firstname-part">
                            <label htmlFor="firstname" className="add-user-notes-label add-firstname-label">Firstname: </label>
                            <input name="names" value={formData.names} onChange={handleChange} type="text" id="firstname" className="add-user-notes-input add-firstname-input" placeholder="Enter your firstname ..."/>
                        </div>

                        {/*Lastneame's place*/}
                        <div className="add-user-notes-part lastname-part">
                            <label htmlFor="lastname" className="add-user-notes-label add-lastname-label">Lastname: </label>
                            <input name="surname" value={formData.surname} onChange={handleChange} type="text" id="lastname" className="add-user-notes-input add-lastname-input" placeholder="Enter your lastname ..."/>
                        </div>

                        {/*User birthday notes*/}
                        <div className="add-user-dates-note-place">

                            {/*User birthday selection part*/}
                            <div className="add-user-date-note-text">
                                <p className="add-user-date-text">
                                    Enter user birthdate (<b>dd.MM.yyyy</b>)
                                </p>
                            </div>

                            {/*User slection part for date*/}
                            <div className="add-user-data-notes">

                                {/*Selection day*/}
                                <div className="add-user-date-day-select">
                                    <select name="day" value={formData.day} onChange={handleChange} id="day" className="add-user-date-day-slect">
                                        <option value="" className="add-user-one-day" disabled selected>--</option>

                                        {
                                            [...Array(31)].map((_, i) => (
                                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                                            ))
                                        }

                                        {/*<option value="1" className="add-user-one-day">1</option>*/}
                                        {/*<option value="2" className="add-user-one-day">2</option>*/}
                                        {/*<option value="3" className="add-user-one-day">3</option>*/}
                                        {/*<option value="4" className="add-user-one-day">4</option>*/}
                                        {/*<option value="5" className="add-user-one-day">5</option>*/}
                                        {/*<option value="6" className="add-user-one-day">6</option>*/}
                                        {/*<option value="7" className="add-user-one-day">7</option>*/}
                                        {/*<option value="8" className="add-user-one-day">8</option>*/}
                                        {/*<option value="9" className="add-user-one-day">9</option>*/}
                                        {/*<option value="10" className="add-user-one-day">10</option>*/}
                                        {/*<option value="11" className="add-user-one-day">11</option>*/}
                                        {/*<option value="12" className="add-user-one-day">12</option>*/}
                                        {/*<option value="13" className="add-user-one-day">13</option>*/}
                                        {/*<option value="14" className="add-user-one-day">14</option>*/}
                                        {/*<option value="15" className="add-user-one-day">15</option>*/}
                                        {/*<option value="16" className="add-user-one-day">16</option>*/}
                                        {/*<option value="17" className="add-user-one-day">17</option>*/}
                                        {/*<option value="18" className="add-user-one-day">18</option>*/}
                                        {/*<option value="19" className="add-user-one-day">19</option>*/}
                                        {/*<option value="20" className="add-user-one-day">20</option>*/}
                                        {/*<option value="21" className="add-user-one-day">21</option>*/}
                                        {/*<option value="22" className="add-user-one-day">22</option>*/}
                                        {/*<option value="23" className="add-user-one-day">23</option>*/}
                                        {/*<option value="24" className="add-user-one-day">24</option>*/}
                                        {/*<option value="25" className="add-user-one-day">25</option>*/}
                                        {/*<option value="26" className="add-user-one-day">26</option>*/}
                                        {/*<option value="27" className="add-user-one-day">27</option>*/}
                                        {/*<option value="28" className="add-user-one-day">28</option>*/}
                                        {/*<option value="29" className="add-user-one-day">29</option>*/}
                                        {/*<option value="30" className="add-user-one-day">30</option>*/}
                                        {/*<option value="31" className="add-user-one-day">31</option>*/}
                                    </select>
                                </div>

                                {/*Month part*/}
                                <div className="add-user-date-month-selection">
                                    <select name="month" value={formData.month} onChange={handleChange} id="month" className="add-user-date-month-selection">
                                        <option value="" className="add-user-select-option" disabled selected>month</option>

                                        {["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avgust", "sentabr", "oktabr", "noyabr", "dekabr"].map((month, i) => (
                                            <option key={i} value={month}>{month}</option>
                                        ))}

                                        {/*<option value="yanver" className="add-user-select-option">yanvar</option>*/}
                                        {/*<option value="fevral" className="add-user-select-option">fevral</option>*/}
                                        {/*<option value="mart" className="add-user-select-option">mart</option>*/}
                                        {/*<option value="aprel" className="add-user-select-option">aprel</option>*/}
                                        {/*<option value="may" className="add-user-select-option">may</option>*/}
                                        {/*<option value="iyun" className="add-user-select-option">iyun</option>*/}
                                        {/*<option value="iyul" className="add-user-select-option">iyul</option>*/}
                                        {/*<option value="avgust" className="add-user-select-option">avgust</option>*/}
                                        {/*<option value="sentabr" className="add-user-select-option">sentabr</option>*/}
                                        {/*<option value="oktabr" className="add-user-select-option">oktabr</option>*/}
                                        {/*<option value="noyabr" className="add-user-select-option">noyabr</option>*/}
                                        {/*<option value="dekabr" className="add-user-select-option">dekabr</option>*/}
                                    </select>
                                </div>

                                {/*Year part*/}
                                <div className="add-user-date-year-input">
                                    <input name="years" value={formData.years} onChange={handleChange} type="text" className="add-user-input-place" placeholder="year"/>
                                </div>
                            </div>
                        </div>

                        {/*Add user address part*/}
                        <div className="add-user-address-part">
                            <label htmlFor="" className="add-user-address-label">Address: </label>
                            <input name="address" value={formData.address} onChange={handleChange} type="text" className="add-user-address-input-place" placeholder="Enter your address ..."/>
                        </div>

                        {/*Gender part*/}
                        <div className="add-user-gender-part">
                            {/*main gender text*/}
                            <div className="add-user-gender-text-part">
                                <p className="add-user-gender-text">Select your gender:</p>
                            </div>

                            {/*Select gender type*/}
                            <div className="add-user-gender-select-part">
                                {/*male type*/}
                                <div className="add-user-gender-jeans-part male-pol">
                                    <label htmlFor="male" className="add-user-gender-label">Male</label>
                                    <input name="poll" value="male" checked={formData.poll === "male"} onChange={handleChange} type="radio" id="male" className="add-user-gender-input"/>
                                </div>

                                {/*Female type*/}
                                <div className="add-user-gender-jeans-part famale-pol">
                                    <label htmlFor="female" className="add-user-gender-label">Famele</label>
                                    <input name="poll" value="female" checked={formData.poll === "female"} onChange={handleChange} type="radio" id="female" className="add-user-gender-input"/>
                                </div>
                            </div>
                        </div>

                        {/*Save notes button*/}
                        <div className="add-user-notes-button-part">
                            <button type="submit" className="add-user-button">
                                <div className="add-user-button-text">
                                    Save
                                </div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default AddUserFunc;
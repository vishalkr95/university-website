import React, { useState } from 'react';
const date = new Date();
const ptag = document.getElementById("ptag");
// ptag.appendChild = date;
const TimeCot = (props) => {
    // const Notice = "Notice and Circular"
    const [dateTime, setDate] = useState(date.toLocaleDateString())

    // setDate(date)
    return (
        <>
            <div id="TimeshowNav">
                <h1 id="noticeAd" style={{ color: "mediumblue" }}>{props.allInOne}</h1>
                <div id="dateTime">
                    <p>{dateTime}</p>
                </div>
            </div>
            <hr />
        </>
    )
}
export default TimeCot;
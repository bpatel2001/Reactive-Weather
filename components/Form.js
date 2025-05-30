import React, { useState, useEffect } from "react";

function Form({ location, setLocation }) {
    const [typedLocation, setTypedLocation] = useState("");
    handleSubmit = (e) => {
        e.preventDefault();
        if (typedLocation.trim() !== "") {
            setLocation(typedLocation);
            setTypedLocation("");
        }
    };
    return (
        <div className = "form">
            <form onSubmit={handleSubmit}>
                <label className = "city">City:
                    <input onChange = {e => setTypedLocation(e.target.value)} type="text" value={typedLocation}/>
                </label>
                <button className = "btn btn-primary" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;

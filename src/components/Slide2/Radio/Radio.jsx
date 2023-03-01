import { useState } from "react";

import "./Radio.scss";

const Radio = () => {
    const [value, setValue] = useState("option1");
    const handleChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <form className="slide2__form">
            <div className="radio">
                <label className="radio-label">
                    <input type="radio" 
                        value="option1" 
                        checked={value === "option1"}
                        onChange={handleChange}
                        className="radio-input" />
                    <span className="custom-radio"></span>
                    Hidden
                </label>
            </div>
            <div className="radio">
                <label className="radio-label">
                    <input type="radio" 
                        value="option2" 
                        checked={value === "option2"}
                        onChange={handleChange}
                        className="radio-input"/>
                    <span className="custom-radio"></span>    
                    U:Move
                </label>
            </div>
        </form>
    )
    }
export default Radio
import React, { useState } from 'react';
import icon_all from '../icons/icon_all.png';
import './buttonBox.css'

const ButtonBox = (props) => {
    console.log({props});
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div className="box_btn">
            <img src={props?.iconName} className="icon_btn"/>
            <div className="text_btn">{props?.textItem}</div>
        </div>
    );
}
export default ButtonBox;
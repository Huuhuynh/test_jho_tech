import React, { useState } from 'react';
import icon_box_calendar from '../icons/icon_box_calendar.png';
import './boxDate.css'
import moment from 'moment';

const BoxDate = () => {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div className="boxContainer">
            <div className="box_icon">
                <img src={icon_box_calendar} className="icon_calendar"/>
            </div>
            <div>{moment().format('LTS')} - </div>
             
            <div> {moment().subtract(10, 'days').calendar()}</div>

        </div>
    );
}
export default BoxDate;
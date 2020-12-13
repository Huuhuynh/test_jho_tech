import React, { useState } from 'react';


function Modal(props) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    console.log({ props });

    return (
        <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
<div style={{flexDirection: "row"}}>
    <div style={{backgroundColor: 'red'}}></div>
    <div style={{backgroundColor: 'blue'}}></div>
</div>
        </div>

    );
}

export default Modal;
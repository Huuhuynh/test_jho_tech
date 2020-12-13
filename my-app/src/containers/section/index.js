import React, { useState } from 'react';

const Section =()=> {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <nav className="navbar navbar-header navbar-expand navbar-light">
                <a className="sidebar-toggler" href="#"><span className="navbar-toggler-icon" /></a>
            </nav>
            <div className="main-content container-fluid">
                <section className="section">
                </section></div>
        </div>
    );
}

export default Section;
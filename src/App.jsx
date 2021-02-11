import React from 'react';

function App() {
    const date = new Date();
    const time = date.getHours();

    const heading = {
        display: 'flex',
        justifyContent: 'Center',
    };

    const wish = {};

    var greet = '';

    if (time >= 0 && time < 12) {
        greet = " Good Morning";
        wish.color = "Blue";
    } else if (time >= 12 && time < 16) {
        greet = " Good Afternoon";
        wish.color = "Red";
    } else if (time >= 16 && time < 20) {
        greet = " Good Evening";
        wish.color = "Green";
    } else {
        greet = " Good Night";
        wish.color = "#161d6f";
    }

    return (
        <>
            <div>
                <h1 style={heading}> Hello Friends, <span style={wish} > {greet}</span> </h1>
            </div>
        </>
    )
}

export default App;
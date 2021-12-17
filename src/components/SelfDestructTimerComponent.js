import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SelfDestructTimerComponent() {

    var intervalID = setInterval(changeColor, 2500);
    
    function changeColor() {
        const oElem = document.getElementById("dest");
        oElem.style.backgroundColor = "Red";
        clearInterval(intervalID);
    }

    return (
        <div className="container">
            <div className="row">
                <table style={{"width": "auto", "border": "1px solid black"}}>
                    <thead>
                        <tr>
                            <th>Description:</th>
                            <th>Result:</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Cell to destroy:</td>
                            <td id="dest">&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    );
}

export default SelfDestructTimerComponent;
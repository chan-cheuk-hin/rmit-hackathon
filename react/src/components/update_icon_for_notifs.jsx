import React from "react";
import "./../icon_for_notifs.css"; // Assuming you'll put the CSS in a separate file

const FeatureBox1 = () => {
    return (
        <div className="icon">
            {" "}
            {/* Outer box wrapper */}
            <div className="icon_design">
                <p>
                    <strong>Have you finished any projects?</strong>
                </p>

                <button className="join-button">UPDATE</button>
            </div>
        </div>
    );
};

export default FeatureBox1;
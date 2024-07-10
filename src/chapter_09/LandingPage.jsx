import React, { useState } from "react";
import Toolbar from "./Toolbar";
import WarningBanner from "./WarningBanner";

function LandingPage(props) {
    const [isLoggedIn, setLoggedIn] = useState(false);

    const onClickLogin = () => {
        setLoggedIn(true);
    }

    const onClickLogout = () => {
        setLoggedIn(false);
    }

    const [showWarning, setShowWarning] = useState(false)

    const handleToggleClick = () => {
        setShowWarning(prevShowWarning=>!prevShowWarning)
    }

    
    return (
        <div>
            <Toolbar 
                isLoggedIn={isLoggedIn}
                onClickLogin={onClickLogin}
                onClickLogout={onClickLogout}
            />
            <div style={{ padding: 16 }}>리액트 공부</div>

            <div>
            <WarningBanner warning={showWarning} />
            <button onClick={handleToggleClick}>
                {showWarning ? "감추기" : "보이기"}
            </button>
        </div>
        </div>
    )
}

export default LandingPage;
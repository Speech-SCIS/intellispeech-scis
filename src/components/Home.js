import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className = 'home'>
            <div className = 'home_text'>
                SPEECH@SCIS<br/>
                Welcomes You
            </div>
            <div className = 'btn'>
                <button>Record your Video</button>
                <button>Record your Audio</button>
            </div>
        </div>
    )
}

export default Home
import { useState } from "react";

import './style/heart.scss'

function Heart () {
    return (
        <div className="container">
            <svg xmlns="http://www.w3.org/2000/svg">
                <path d="M 400 160 A 2 2 90 0 0 260 160 A 2 2 90 0 0 120 160 C 120 230 260 270 260 350 C 260 270 400 230 400 160" className="line" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg">
                <path d="M 400 160 A 2 2 90 0 0 260 160 A 2 2 90 0 0 120 160 C 120 230 260 270 260 350 C 260 270 400 230 400 160" className="line line2" />
            </svg>
        </div>
    )
}

export default Heart
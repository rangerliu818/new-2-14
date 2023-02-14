import React from 'react';

import './style/index.scss'

export const Loading = () => {


    const skins = document.querySelectorAll(".skins");
    const rainbowPig = document.querySelector(".loader-container svg");
    const pig = document.querySelector(".pig");
    const stateButton = document.querySelector(".state-button");
    const loaderState = document.querySelector(".loader-state");


    skins.forEach((skin) => {
        skin.addEventListener("click", ({ target }) => {
            skins.forEach((skin) => {
                if (skin === target) {
                    skin.classList.add("active");
                    skin.setAttribute("aria-selected", "true");
                    skin.setAttribute("tabindex", "-1");
                } else {
                    skin.classList.remove("active");
                    skin.setAttribute("aria-selected", "false");
                    skin.setAttribute("tabindex", "0");
                }
            });
            rainbowPig?.setAttribute("class", (target).dataset?.skin);
        });
    });

    // Click on pig => ❤

    pig?.addEventListener("click", () => {
        let newHeart = document.createElementNS("http://www.w3.org/2000/svg", "g");
        newHeart.classList.add("heart");
        newHeart.innerHTML =
            '<rect width="1" height="1" transform="translate(32 3)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(31 2)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(33 2)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(34 1)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(34)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(30)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(30 1)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(32)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(33 -1)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(31 -1)" fill="#1c1c1c"/><rect width="1" height="1" transform="translate(31)" fill="#cf2626"/><rect width="1" height="1" transform="translate(31 1)" fill="#cf2626"/><rect width="1" height="1" transform="translate(32 1)" fill="#cf2626"/><rect width="1" height="1" transform="translate(33 1)" fill="#cf2626"/><rect width="1" height="1" transform="translate(33)" fill="#cf2626"/><rect width="1" height="1" transform="translate(32 2)" fill="#cf2626"/>';
        pig.appendChild(newHeart);
        setTimeout(() => {
            pig.removeChild(newHeart);
        }, 600);
    });
    const clickExit = () => {
        stateButton?.classList.toggle("active");
        loaderState?.classList.toggle("enter-exit");
    }

    return (
        <div className='loading'>
            <main className="loader-container">
                <div className="loader-state">
                    <svg className="nyan pig-zz" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 47 20">
                        <defs>
                            <linearGradient id="rainbow-colors" x1="0.5" x2="0.5" y2="1">
                                <stop className="rainbow-color1" offset="0" />
                                <stop className="rainbow-color1" offset="0.167" />
                                <stop className="rainbow-color2" offset="0.167" />
                                <stop className="rainbow-color2" offset="0.335" />
                                <stop className="rainbow-color3" offset="0.335" />
                                <stop className="rainbow-color3" offset="0.5" />
                                <stop className="rainbow-color4" offset="0.5" />
                                <stop className="rainbow-color4" offset="0.669" />
                                <stop className="rainbow-color5" offset="0.669" />
                                <stop className="rainbow-color5" offset="0.833" />
                                <stop className="rainbow-color6" offset="0.833" />
                                <stop className="rainbow-color6" offset="1" />
                            </linearGradient>
                        </defs>
                        <g className="rainbow">
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                            <rect />
                        </g>
                        <g className="pig">
                            <g className="foot" transform="translate(52)">
                                <rect width="1" height="3" transform="translate(6 13)" />
                                <rect width="1" height="3" transform="translate(8 13)" />
                                <rect width="1" height="3" transform="translate(14 13)" />
                                <rect width="1" height="3" transform="translate(12 13)" />
                            </g>
                            <g className="tail">
                                <rect width="1" height="1" transform="translate(4 10)" />
                                <rect width="1" height="1" transform="translate(3 11)" />
                            </g>

                            <g transform="translate(52)">
                                <rect className="body1" width="8" height="8" transform="translate(7 6)" />
                                <rect className="body1" width="10" height="8" transform="translate(6 7)" />
                                <rect className="body1" width="12" height="6" transform="translate(5 8)" />
                                <rect className="body2" width="10" height="6" transform="translate(6 8)" />
                                <rect className="body2" width="8" height="6" transform="translate(7 7)" />
                                <rect className="stains" width="4" height="1" transform="translate(7 13)" />
                                <rect className="stains" width="2" height="1" transform="translate(8 12)" />
                                <rect className="stains" width="2" height="1" transform="translate(6 9)" />
                                <rect className="stains" width="3" height="1" transform="translate(6 8)" />
                                <rect className="stains" width="3" height="1" transform="translate(7 7)" />
                                <rect className="stains" width="1" height="1" transform="translate(14 7)" />
                            </g>
                            <g className="ears" transform="translate(52)">
                                <rect width="1" height="3" transform="translate(10 5)" />
                                <rect width="1" height="3" transform="translate(15 5)" />
                            </g>
                            <g className="snout">
                                <rect className="snout1" width="5" height="3" transform="translate(13 10)" />
                                <rect className="snout-holes" width="1" height="3" transform="translate(17 11) rotate(90)" />
                                <rect className="snout2" width="1" height="1" transform="translate(16 11) rotate(90)" />
                            </g>
                            <g className="eyes">
                                <rect width="1" height="1" transform="translate(12 9)" />
                                <rect width="1" height="1" transform="translate(15 9)" />
                            </g>
                        </g>
                    </svg>
                </div>
                <span className="loader-text">Loading...</span>
                <div className="stars-container"></div>
            </main>
        </div>
    )
}
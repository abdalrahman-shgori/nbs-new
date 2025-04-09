import React from "react";
import bg from "../assets/bgImg.svg";
import splashImage from "../assets/splashImage.svg";

export default function SplashPage() {
    return (
        <div
            className="flex items-center justify-center h-screen w-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <img
                src={splashImage}
                alt="Splash"
                className="max-w-[90%] max-h-[90%] object-contain"
            />
        </div>
    );
}
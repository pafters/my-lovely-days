import { useEffect, useState } from "react";
import MainScreen from "../pages/main/MainScreen";
import SplashScreen from "../pages/splash/SplashScreen";

export default function ScreenSwitcher() {
    const [screenName, updateScreen] = useState('Splash');

    useEffect(() => {
      setTimeout(() => {
        updateScreen('Main');
      }, 3000);
    }, []);

    return (
        <div>
            {screenName === 'Splash' ?
                <SplashScreen updateScreen={updateScreen} /> :
                screenName === 'Main' ?
                    <MainScreen /> :
                    <div></div>
            }
        </div>

    )
}
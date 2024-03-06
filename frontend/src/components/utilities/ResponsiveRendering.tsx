// this just checks if screen is smaller than 600px. And adjusts accordingly. So display based on phone or desktop

import UserPassBox from "../pages/UserPassBoxD";
import UserPassBoxM from "../pages/UserPassBoxM";

function ResponsiveRendering() {
    const isMobile = window.innerWidth <= 600;

    return isMobile ? <UserPassBoxM /> : <UserPassBox />;
}

export default ResponsiveRendering;

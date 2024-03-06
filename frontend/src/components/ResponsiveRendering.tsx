// this just checks if screen is smaller than 600px. And adjusts accordingly. So display based on phone or desktop

import UserPassBox from "./UserPassBox";
import UserPassBoxMobile from "./UserPassBoxMobile";

function ResponsiveRendering() {
    const isMobile = window.innerWidth <= 600;

    return isMobile ? <UserPassBoxMobile /> : <UserPassBox />;
}

export default ResponsiveRendering;

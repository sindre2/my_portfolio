import { Route, Routes, Navigate } from "react-router-dom";
import { NonRoute } from "../pages/landingPage/404/404_Page";
import { About_Me } from "../pages/landingPage/aboutMe_Page/AboutMe_Page";
import { Contact_Me } from "../pages/landingPage/contactMe_Page/ContactMe_Page";
import { CreationRender } from "../pages/landingPage/creations_Page/Creations_Render";
import { Home_Page } from "../pages/landingPage/home_Page/Home_Page";
import { TEXT } from "../textContent/content";
import { Wrapper } from "./styledComponents/Wrapper";

const CustomRoutes = () => {
  const navigation = TEXT.NAVBAR_TEXT_NAVIGATION;
  return (
    <Wrapper className="appWrapper">
      <Routes>
        <Route path="/" element={<Navigate to={"/" + navigation.HOME}/>} />
        <Route path={"/" + navigation.HOME} element={<Home_Page />} />
        <Route path={"/" + navigation.ABOUT_ME} element={<About_Me />} />
        <Route path={"/" + navigation.CREATIONS} element={<CreationRender />} />
        <Route path={"/" + navigation.CONTACT_ME} element={<Contact_Me />} />
        <Route path="*" element={<NonRoute />} />
      </Routes>
    </Wrapper>
  );
};

export default CustomRoutes;

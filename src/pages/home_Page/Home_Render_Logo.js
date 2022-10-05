import { homeData } from "./Home_Data";

const LogoRender = (props) => {
  return <img src={props.image} alt={props.alt} />;
};

const logoMap = homeData.map((props) => {
  return <LogoRender key={props.key} alt={props.alt} image={props.image} />;
});

export const Logo = () => {
  return <>{logoMap}</>;
};

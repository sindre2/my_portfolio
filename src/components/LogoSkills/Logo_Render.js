import { logo_Data } from "./Logo_Data";
import { Logo_Styles } from "./Logo_Styles";

//LogoRender is a component that prints out an image with props set to image and alt.
const LogoRender = (props) => {
  return <img src={props.image} alt={props.alt} />;
};

//Logo_Map simply maps through the array from logo_Data and uses the array object's data: "logo_Data.key" etc.
const Logo_Map = logo_Data.map((props) => {
  return <LogoRender key={props.key} alt={props.alt} image={props.image} />;
});

//Logo is then exported as a clean export since all neccesary operations are happening here. I can put in as many entries in logo_Data as I want and they will be rendered inside the div with classname "logo-container".
export const Logo = (props) => {
  return (
    <Logo_Styles visualMode={props}>
      <div className="logo-container">{Logo_Map}</div>
    </Logo_Styles>
  );
};

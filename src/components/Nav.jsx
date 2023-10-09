import { useRef, useState } from "react";
import data from "./data";

//Components
import Header from "./Header"
import ModalPhone from "./ModalPhone";
import ModalTablet from "./ModalTablet";


const Nav = () => {
  const [active, setActive] = useState(true);
  const [modal, setModal] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [showMisc, setMisc] = useState(false);

  const miscRef= useRef(null)

  return (
    <div className=" max-w-xlg ">
      <Header  props={{active, setActive, modal, setModal}}></Header>
      <ModalPhone
        props= {{active, setActive, setModal,  modal, showSetting, setShowSetting}}
      ></ModalPhone > 
      <ModalTablet props={{ miscRef, showMisc,  setMisc, showSetting, setShowSetting }}></ModalTablet>
    </div>
  );
};
export default Nav;

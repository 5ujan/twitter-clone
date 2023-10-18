import { useRef, useState } from "react";
import {data} from "./data";

//Components
import Header from "./navComponents/Header"
import ModalPhone from "./navComponents/ModalPhone";
import ModalTablet from "./navComponents/ModalTablet";
import BottomNav from "./navComponents/BottomNav";


const Nav = () => {
  const [active, setActive] = useState(true);
  const [modal, setModal] = useState(false);
  const [showSetting, setShowSetting] = useState(false);
  const [showMisc, setMisc] = useState(false);

  const miscRef= useRef(null)
  console.log(data);
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

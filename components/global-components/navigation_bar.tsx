import React, { useState, useEffect } from "react";
import Link from "next/link";

//Zustand
import { useGeneralStore } from "../../zustand/general";

//--> Functional Component
const NavigationBar = ({ navigationTabs }): React.ReactElement => {
  //Zustand
  const openModal = useGeneralStore((state) => state.openModal);

  //State
  const [loaded, setLoaded] = useState(false);

  //Effects
  useEffect(() => {
    setLoaded(true);
  }, []);

  const renderTab = (tab, index) => {
    const commonProps = {
      role: tab.type,
      tabIndex: index,
      className: `py-2 px-6 cursor-pointer my-3 w-full text-2xl hover:opacity-80 transform transition-transform transition-opacity ease-in-out duration-700 ${
        loaded ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`,
      style: { transitionDelay: `${index * 0.3}s` },
    };

    const key = `navbar_link_${tab.name}_${index}`;

    if (tab.type === "link") {
      return (
        <Link href={tab.link} key={key}>
          <div {...commonProps}>{tab.name}</div>
        </Link>
      );
    } else if (tab.type === "modal") {
      return (
        <div {...commonProps} key={key} onClick={() => openModal(tab.modal)}>
          {tab.name}
        </div>
      );
    }
  };

  return (
    <div className="text-white  flex w-36 flex-col justify-center overflow-x-hidden md:absolute md:right-14 md:h-screen">
      {navigationTabs.map((tab, index) => renderTab(tab, index))}
    </div>
  );
};

export default NavigationBar;

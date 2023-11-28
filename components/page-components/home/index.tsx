import React, { useEffect } from "react";
import { TabType } from "../../../types/general-types";

//Components
import NamePlate from "./name-plate";
import NavigationBar from "../../global-components/navigation_bar";
import Ocean from "./ocean";
import RubberDuck from "../../page-components/assets/Rubber-Duck";

const navigationTabs: TabType[] = [
  { name: "About", modal: "about", type: "modal" },
  { name: "Journal", link: "/journal", type: "link" },
  { name: "Sandbox", link: "/sandbox/glowing-cards", type: "link" },
  //   { name: "Contact", modal: "contact", type: "modal" },
];

const HomePage = () => {
  return (
    <div className="h-screen w-screen overflow-hidden bg-blue bg-cover">
      <NamePlate />
      <NavigationBar navigationTabs={navigationTabs} />
      <RubberDuck />
      <Ocean />
    </div>
  );
};

export default HomePage;

import React from "react";
import { TabType } from "../../../types/general-types";

//Components
import NamePlate from "./name-plate";
import NavigationBar from "../../global-components/navigation_bar";

const navigationTabs: TabType[] = [
  { name: "About", modal: "about", type: "modal" },
  { name: "Articles", link: "/articles", type: "link" },
  { name: "Sandbox", link: "/sandbox/glowing-cards", type: "link" },
  //   { name: "Contact", modal: "contact", type: "modal" },
];

const HomePage = () => {
  return (
    <div className="overflow-scroll-none overflow-none h-screen w-screen bg-blue bg-cover">
      <NamePlate />
      <NavigationBar navigationTabs={navigationTabs} />
    </div>
  );
};

export default HomePage;

import { ContentType } from "../data/enums";
import React from "react";
import Navigation from "./navigation";
import Content from "./content/content";

const Layout: React.FC = () => {
  const [selectedContent, setSelectedContent] = React.useState<ContentType>(ContentType.Config);

  return (
    <div className={"pageContentWrapper"}>
      <Navigation selectedContent={selectedContent} setSelectedContent={setSelectedContent} />
      <Content selectedContent={selectedContent} setSelectedContent={setSelectedContent} />
    </div>
  );
}

export default Layout;
import { ContentType } from "../data/enums";
import React from "react";

interface IProps {
  selectedContent: ContentType;
  setSelectedContent: (type: ContentType) => void;
}

const Navigation: React.FC<IProps> = ({selectedContent, setSelectedContent}) => {
  return (
    <div className={"navigationButtons"}>
      <button className={selectedContent === ContentType.Config ? "selected" : ""} type={"button"} onClick={() => setSelectedContent(ContentType.Config)}>Config</button>
      <button className={selectedContent === ContentType.Result ? "selected" : ""} type={"button"} onClick={() => setSelectedContent(ContentType.Result)}>Result</button>
    </div>
  );
}

export default Navigation;
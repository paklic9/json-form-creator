import React from "react";
import {ContentType} from "../../data/enums";
import useForm from "../../hooks/useForm";
import ConfigContent from "./configContent";
import ResultContent from "./resultContent";

interface IProps {
  selectedContent: ContentType;
  setSelectedContent: (type: ContentType) => void;
}

const Content: React.FC<IProps> = ({selectedContent, setSelectedContent}) => {
  const {
    fromTitle,
    formItems,
    formButtons,
    jsonText,
    setJsonText,
    handleJsonApply,
    handleFromButtonClicked,
  } = useForm(setSelectedContent);

  return (
    <div className={"content"}>
      {selectedContent === ContentType.Result ? (
        <ResultContent fromTitle={fromTitle} formItems={formItems} formButtons={formButtons} handleFromButtonClicked={handleFromButtonClicked} />
      ) : (
        <ConfigContent jsonText={jsonText} setJsonText={setJsonText} handleJsonApply={handleJsonApply} />
      )}
    </div>
  );
}

export default Content;
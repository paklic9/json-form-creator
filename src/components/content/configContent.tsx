import React from "react";

interface IProps {
  jsonText: string;
  setJsonText: (text: string) => void;
  handleJsonApply: () => void;
}

const ConfigContent: React.FC<IProps> = ({jsonText, setJsonText, handleJsonApply}) => {
  return (
    <div className={"configWrapper"}>
      <div className={"textareaWrapper"}>
        <textarea value={jsonText} onChange={(value) => setJsonText(value.currentTarget.value)} />
      </div>
      <div className={"applyConfigBtnWrapper"}>
        <button type={"button"} onClick={handleJsonApply}>Apply</button>
      </div>
    </div>
  );
}

export default ConfigContent;
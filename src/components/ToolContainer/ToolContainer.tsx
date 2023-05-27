import React from "react";
import { ITools } from "../../screens/Home/Home";

interface IToolContainer {
  content: ITools;
}

const ToolContainer: React.FC<IToolContainer> = ({ content }) => {

  console.log(content)
  return (<div>ToolContainer</div>);
};

export default ToolContainer;

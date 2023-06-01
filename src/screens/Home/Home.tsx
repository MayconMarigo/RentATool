import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import ToolContainer from "../../components/ToolContainer/ToolContainer";
import { calcHeight } from "../../utils/utils";
import { toolsArray } from "./ToolsArray";

export interface ITools {
  img: string;
  id: number;
}

export default function Home() {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    setHeight(calcHeight(["header"]));
  }, []);

  return (
    <>
      <Header height={80} renderImage/>
      {height > 0 && (
        <Grid container direction="column" p={10} height={height}>
          <Grid container flex={1} gap={{xs: 5, sm: 15}} justifyContent="center">
            {toolsArray?.map((tool: ITools) => (
              <ToolContainer key={tool.id} content={tool} />
            ))}
          </Grid>
        </Grid>
      )}
    </>
  );
}

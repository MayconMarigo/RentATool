import { Grid } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ToolContainer from "../../components/ToolContainer/ToolContainer";
import { useEffect, useState } from "react";
import { calcHeight } from "../../utils/utils";

interface ITools {
  img: string;
  id: number;
}

export default function Home() {
  const toolsArray: ITools[] = [{ id: 0, img: "https://google.com.br/" }];

  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    setHeight(calcHeight(["header", "footer"]));
  }, []);

  return (
    <>
      <Header height={80} />
      {height > 0 && (
        <Grid
          container
          direction="column"
          p={10}
          height={height}
        >
          {toolsArray?.map((tool: ITools) => (
            <ToolContainer key={tool.id} tool={tool} />
          ))}
        </Grid>
      )}

      <Footer />
    </>
  );
}

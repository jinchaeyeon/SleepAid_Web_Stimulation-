import { Box } from "@mui/material";
import React from "react";
import ExperimentMachineListPageHeader from "../../organisms/ExperimentsMachinePage/ExperimentMachineListPageHeader";
import ExperimentMachinePageFooter from "../../organisms/ExperimentsMachinePage/ExperimentMachinePageFooter";
import ExperimentMachinePageMiddle from "../../organisms/ExperimentsMachinePage/ExperimentMachinePageMiddle";
import ExperimentMachinePageHeader from "../../organisms/ExperimentsMachinePage/ExperimentMachinePageHeader";
import ExperimentMachineListPageMiddle from "../../organisms/ExperimentsMachinePage/ExperimentMachineListPageMiddle";

function ExperimentsMachinePage() {
  const [state, setState] = React.useState(false);
  const [data, setData] = React.useState([]);
  const hightFunction = (
    t,
    B3_5_EEG1,
    B6_8_EEG2,
    B9_11_PPG_avg,
    B27_28_X,
    B29_30_Y,
    B31_32_Z
  ) => {
    setState(true);
    setData([
      { t, B3_5_EEG1, B6_8_EEG2, B9_11_PPG_avg, B27_28_X, B29_30_Y, B31_32_Z },
    ]);
  };
  return (
    <>
      {state == false ? (
        <>
          <Box style={{ backgroundColor: "#191919", padding: "1.rem 2rem", height: "auto" }}>
            <ExperimentMachinePageHeader />
            <ExperimentMachinePageMiddle propFunction={hightFunction} />
            <ExperimentMachinePageFooter />
          </Box>
        </>
      ) : (
        <Box style={{ backgroundColor: "#191919", padding: "1.rem 2rem", height: "auto" }}>
          <ExperimentMachineListPageHeader />
          <ExperimentMachineListPageMiddle data={data} />
          <ExperimentMachinePageFooter />
        </Box>
      )}
    </>
  );
}

export default ExperimentsMachinePage;

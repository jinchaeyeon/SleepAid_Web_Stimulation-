import * as React from "react";
import {
  Box,
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function ExperimentSubPageChangeModalHeader(props) {
  return (
    <Box style={{color: "#CCCCCC", height: 62}}>
        <h4 style={{display: 'inline'}}>피험자 정보입력</h4>
        <CloseIcon style={{float: 'right'}} onClick={() => props.propFunction(false)}/>
    </Box>
  );
}

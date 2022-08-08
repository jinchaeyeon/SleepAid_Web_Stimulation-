import * as React from "react";
import {
  Box,
  TextField,
  Button,
  Select,
  FormControl,
  MenuItem,
} from "@mui/material";

export default function ExperimentSubPageChangeModalMiddle(props) {
  const [name, setName] = React.useState("");
  const [sex, setSex] = React.useState("여성");
  const [birthday, setBirthday] = React.useState("");
  const [maindiagnosis, setMaindiagnosis] = React.useState("");
  const [link, setLink] = React.useState("");
  const [file, setFile] = React.useState("");
  const FileInput = React.useRef();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSexChange = (event) => {
    setSex(event.target.value);
  };

  const handleBirthdayChange = (event) => {
    setBirthday(event.target.value);
  };

  const handleMaindiagnosisChange = (event) => {
    setMaindiagnosis(event.target.value);
  };

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const FileChange = () => {
    const Files = FileInput.current.files;
    setFile(Files);
  };

  const handleup = () => {
    if (name == "" || name == null || name == undefined) {
      alert("이름은 필수 항목입니다.");
    } else if (sex == "" || sex == null || sex == undefined) {
      alert("성별은 필수 항목입니다.");
    } else if (birthday == "" || birthday == null || birthday == undefined) {
      alert("생년월일은 필수 항목입니다.");
    } else if (link == "" || link == null || link == undefined) {
      alert("링크는 필수 항목입니다.");
    } else if (
      link[0] != "h" ||
      link[1] != "t" ||
      link[2] != "t" ||
      link[3] != "p"
    ) {
      alert("링크 형식이 맞지 않습니다.");
    } else {
      props.propFunction(name, sex, birthday, maindiagnosis, link, file);
    }
  };
  return (
    <Box style={{ color: "#CCCCCC", height: 300 }}>
      <Box
        style={{
          padding: "10px 10px 30px 10px",
          marginBottom: 24,
          border: "1px solid black",
          borderRadius: 5,
        }}
      >
        <Box style={{ display: "block", height: 37 }}>
          <h4 style={{ display: "inline", paddingLeft: "15%" }}>이름:</h4>
          <TextField
            value={name}
            size="small"
            style={{
              float: "right",
              width: "40%",
              marginRight: "10%",
              backgroundColor: "white",
            }}
            onChange={handleNameChange}
          />
        </Box>
        <Box style={{ display: "block", height: 37, marginTop: 10 }}>
          <h4 style={{ display: "inline", paddingLeft: "15%" }}>성별:</h4>
          <FormControl
            style={{ float: "right", width: "40%", marginRight: "10%" }}
          >
            <Select
              size="small"
              value={sex}
              style={{
                backgroundColor: "white",
              }}
              onChange={handleSexChange}
            >
              <MenuItem value={"남성"}>남성</MenuItem>
              <MenuItem value={"여성"}>여성</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box style={{ display: "block", height: 37, marginTop: 10 }}>
          <h4 style={{ display: "inline", paddingLeft: "15%" }}>
            생년월일(8자리)
          </h4>
          <TextField
            value={birthday}
            size="small"
            style={{
              float: "right",
              width: "40%",
              marginRight: "10%",
              backgroundColor: "white",
            }}
            onChange={handleBirthdayChange}
          />
        </Box>
        <Box style={{ display: "block", height: 37, marginTop: 10 }}>
          <h4 style={{ display: "inline", paddingLeft: "15%" }}>주진단명</h4>
          <TextField
            value={maindiagnosis}
            size="small"
            style={{
              float: "right",
              width: "40%",
              marginRight: "10%",
              backgroundColor: "white",
            }}
            onChange={handleMaindiagnosisChange}
          />
        </Box>
        <Box style={{ display: "block", height: 37, marginTop: 10 }}>
          <h4 style={{ display: "inline", paddingLeft: "15%" }}>
            설문조사(구글링크)
          </h4>
          <TextField
            value={link}
            size="small"
            style={{
              float: "right",
              width: "40%",
              marginRight: "10%",
              backgroundColor: "white",
            }}
            onChange={handleLinkChange}
          />
        </Box>
        <Box style={{ display: "block", height: 37, marginTop: 10 }}>
          <h4 style={{ display: "inline", paddingLeft: "15%" }}>
            동의서 파일선택
          </h4>
          <input
            style={{
              float: "right",
              width: "40%",
              marginRight: "10%",
              backgroundColor: "white",
            }}
            id="file"
            name="file"
            type="file"
            ref={FileInput}
            onChange={FileChange}
          />
        </Box>
      </Box>
      <Box>
        <Button
          style={{
            color: "white",
            borderRadius: 10,
            backgroundColor: "#2877b9",
            marginRight: 5,
            float: "right",
          }}
          onClick={handleup}
        >
          save
        </Button>
      </Box>
    </Box>
  );
}

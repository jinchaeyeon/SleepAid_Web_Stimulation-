import * as React from "react";
import {
  Button,
  Box,
  Modal,
  TableRow,
  TablePagination,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Table,
  Paper,
  TextField,
  InputAdornment,
} from "@mui/material";
import ExperimentPageChangeModalHeader from "../../molecules/ExperimentsPage/ExperimentPageChangeModalHeader";
import ExperimentPageChangeModalMiddle from "../../molecules/ExperimentsPage/ExperimentPageChangeModalMiddle";
import ExperimentPageModalHeader from "../../molecules/ExperimentsPage/ExperimentPageModalHeader";
import ExperimentPageModalMiddle from "../../molecules/ExperimentsPage/ExperimentPageModalMiddle";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "40%",
  minWidth: 400,
  bgcolor: "#383b40",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const columns = [
  { id: "id", label: "번호", minWidth: 100 },
  { id: "name", label: "실험 프로토콜 명", minWidth: 200 },
  {
    id: "content",
    label: "상세설명",
    minWidth: 300,
  },
  {
    id: "manager",
    label: "담당자",
    minWidth: 100,
  },
  {
    id: "button",
    label: "-",
    minWidth: 200,
  },
];

export default function ExperimentPageMiddle() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([
    createData(1, "vns", undefined, "송하윤","button"),
    createData(2, "innea vns", undefined, "송하윤","button"),
    createData(3, "vns", undefined, "한태성","button"),
    createData(4, "innea vns", undefined, "한태성","button"),
    createData(5, "test2", "인증", "허재욱ㅠㅠ","button"),
    createData(6, "ecg patch", "ecg 패치 테스트", "조동혁","button"),
    createData(7, "김성철", undefined, "김현지","button"),
    createData(8, "조정훈", undefined, "송하윤","button"),
    createData(9, "ECG PATCH EXP", undefined, "조동혁","button"),
    createData(10, "박산하", undefined, "한태성","button"),
    createData(11, "teasdfa", undefined, "한태성","button"),
    createData(12, "teasdfasaaaaaaaa", undefined, "한태성","button"),
  ]);
  const [open, setOpen] = React.useState(false);
  const [openProtocol, setOpenProtocol] = React.useState(false);
  const [state, setState] = React.useState([]);
  const [Search, setSearch] = React.useState("");

  function createData(id, name, content, manager, button) {
    return { id, name, content, manager, button };
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleOpen = (row) => {
    setOpen(true);
    setState(row);
  };
  const handleClose = () => setOpen(false);

  const handleOpenProtocol = (row) => {
    setOpenProtocol(true);
    setState(row);
  };
  const handleProtocolClose = () => setOpenProtocol(false);

  const handleProtocol = (id, name, manager, content) => {
    setRows(
      rows.map((users) =>
        users.id === id
          ? { ...users, name: name, manager: manager, content: content }
          : users
      )
    );
    alert("정보가 변경되었습니다.");
    handleClose();
  };

  const SearchProtocol = (Search) => {
    console.log(Search);
    setRows([
      createData(1, "vns", undefined, "송하윤", "button"),
      createData(2, "innea vns", undefined, "송하윤", "button"),
      createData(3, "vns", undefined, "한태성", "button"),
      createData(4, "innea vns", undefined, "한태성", "button"),
      createData(5, "test2", "인증", "허재욱ㅠㅠ", "button"),
    ]);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleAddProtocol = (name, manager, content) => {
    setRows([
      ...rows,
      createData(rows[rows.length - 1].id + 1, name, content, manager, "button"),
    ]);
    alert("프로토콜이 추가되었습니다.");
    handleProtocolClose();
  };

  const handleDeleteAccount = (row) => {
    setRows(rows.filter((users) => users.id !== row.id));
    alert(row.id + "번이 삭제 되었습니다");
  };

  function cell(value, row) {
    if (value == "button") {
      return (
        <Box>
          <Link to={`../ExperimentsSub/${row.id}`}>
            <Button
              style={{
                color: "white",
                borderRadius: 10,
                backgroundColor: "#2877b9",
                marginRight: 5,
              }}
            >
              실험관리
            </Button>
          </Link>
          <Button
            style={{
              color: "#CCCCCC",
              borderRadius: 10,
              backgroundColor: "#5e646b",
              marginRight: 5,
            }}
            onClick={() => handleOpen(row)}
          >
            수정
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            BackdropProps={{ style: { opacity: 0.2 } }}
          >
            <Box sx={style}>
              <ExperimentPageChangeModalHeader propFunction={handleClose} />
              <ExperimentPageChangeModalMiddle
                data={state}
                propFunction={handleProtocol}
              />
            </Box>
          </Modal>
          <Button
            style={{
              color: "#CCCCCC",
              borderRadius: 10,
              backgroundColor: "#393939",
            }}
            onClick={() => handleDeleteAccount(row)}
          >
            삭제
          </Button>
        </Box>
      );
    } else {
      return value;
    }
  }

  React.useEffect(() => {}, []);

  return (
    <Paper
      style={{ height: "70vh", width: "100%", backgroundColor: "#131313" }}
    >
      <TextField
        value={Search}
        onChange={handleSearchChange}
        placeholder="실험명으로 검색"
        size="small"
        style={{ backgroundColor: "white", marginLeft: 50 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon
                style={{ color: "#2877b9" }}
                onClick={() => SearchProtocol(Search)}
              />
            </InputAdornment>
          ),
        }}
      />
      <Button
        style={{
          color: "white",
          borderRadius: 10,
          backgroundColor: "#2877b9",
          marginRight: 40,
          marginBottom: 10,
          float: "right",
        }}
        onClick={() => handleOpenProtocol()}
      >
        프로토콜 추가
      </Button>
      <Modal
        open={openProtocol}
        onClose={handleProtocolClose}
        BackdropProps={{ style: { opacity: 0.2 } }}
      >
        <Box sx={style}>
          <ExperimentPageModalHeader propFunction={handleProtocolClose} />
          <ExperimentPageModalMiddle propFunction={handleAddProtocol} />
        </Box>
      </Modal>
      <TableContainer
        style={{
          width: "95%",
          height: "58.7vh",
          marginLeft: 50,
          backgroundColor: "#131313",
        }}
      >
        <Table>
          <TableHead style={{ backgroundColor: "#2877b9" }}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth, color: "white" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody style={{ backgroundColor: "#131313" }}>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} style={{ color: "#c0c0c0" }}>
                          {cell(value, row)}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        style={{
          backgroundColor: "#131313",
          paddingRight: 20,
          color: "white",
          borderBottom: "2px solid #333333",
        }}
        component="div"
        rowsPerPageOptions={[10]}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </Paper>
  );
}

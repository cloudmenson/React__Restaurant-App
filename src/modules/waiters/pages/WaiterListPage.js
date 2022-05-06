import React, { useState } from "react";
import {
  Button,
  Collapse,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  createTheme,
  ThemeProvider,
} from "@mui/material/";
import WaiterForm from "../components/WaiterForm/WaiterForm";
import AllWaiterList from "../components/AllWaiterList/AllWaiterList";
import useWaiterList from "../hooks/useWaiterList";

export default function WaiterListPage() {
  const { waiterList, addWaiter, deleteWaiter } = useWaiterList();
  const [open, setOpen] = useState(false);

  const theme = createTheme({
    typography: {
      fontSize: 18,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Edit waiter</TableCell>
            <TableCell align="right">Delete waiter</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <AllWaiterList waiterList={waiterList} deleteWaiter={deleteWaiter} />
        </TableBody>
      </Table>
      <Button
        sx={{ m: 3 }}
        variant="contained"
        onClick={() => setOpen(!open)}
        aria-controls="formWaiter"
        aria-expanded={open}
      >
        Add Waiter
      </Button>
      <Collapse in={open}>
        <div id="formWaiter">
          <WaiterForm addWaiter={addWaiter} setOpen={setOpen} open={open} />
        </div>
      </Collapse>
    </ThemeProvider>
  );
}

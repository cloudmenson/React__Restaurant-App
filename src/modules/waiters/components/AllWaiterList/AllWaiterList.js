import React, { useState } from "react";
import { TableCell, TableRow, Button, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/DeleteForever";
import { Link, useLocation } from "react-router-dom";
import WaiterEditForm from "../../components/WaiterForm/WaiterEditForm";

export default function AllWaiterList({ waiterList, deleteWaiter }) {
  const { pathname } = useLocation();
  const [edit, setEdit] = useState();
  const [editName, setEditName] = useState([]);

  function onDelete(e, id) {
    e.preventDefault();
    deleteWaiter(id);
  }

  function onEdit(e, id, name) {
    setEditName({ id, name });
    setEdit(name);
  }

  return (
    <>
      {waiterList.map((item) => {
        return (
          <TableRow key={item.id}>
            <TableCell align="left">
              <p>{item.id}</p>
            </TableCell>
            <TableCell align="left">
              <Link to={`waiter/${item.id}`}>
                <p className="App__waiter-name">{item.name}</p>
              </Link>
            </TableCell>
            <TableCell align="right">
              <Button
                sx={{
                  margin: "10px",
                }}
                color="error"
                variant="outlined"
                size="medium"
                onClick={(e) => onEdit(e, item.id, item.name)}
              >
                <EditIcon />
              </Button>
            </TableCell>
            <TableCell align="right">
              <Button
                sx={{
                  margin: "10px",
                }}
                color="error"
                variant="outlined"
                size="medium"
                onClick={(e) => onDelete(e, item.id)}
              >
                <DeleteIcon />
              </Button>
            </TableCell>
            <WaiterEditForm editName={editName} edit={edit} setEdit={setEdit} />
          </TableRow>
        );
      })}
    </>
  );
}

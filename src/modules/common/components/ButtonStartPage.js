import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Item from "@mui/material/ListItem";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function ButtonStartPage() {
  const navigate = useNavigate();
  return (
    <Item>
      <Button
        sx={{ width: "100%" }}
        onClick={() => navigate("/")}
        variant="outlined"
        type="submit"
        color="error"
        startIcon={<ExitToAppIcon />}
      >
        Quit
      </Button>
    </Item>
  );
}

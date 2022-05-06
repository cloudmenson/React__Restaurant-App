import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Item from "@mui/material/ListItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBackIos";

export default function ButtonNavBack() {
  const navigate = useNavigate();
  return (
    <Item>
      <Button
        sx={{ width: "100%" }}
        onClick={() => navigate(-1)}
        variant="outlined"
        type="submit"
        startIcon={<ArrowBackIcon />}
      >
        Back
      </Button>
    </Item>
  );
}

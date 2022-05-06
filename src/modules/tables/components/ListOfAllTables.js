import React from "react";
import { Box, Button } from "@mui/material";
import Item from "@mui/material/ListItem";
import InfoIcon from '@mui/icons-material/Info';

export default function ListOfAllTables({ tableList }) {
  return (
    <>
      {tableList.map((item) => {
        return (
          <Box className="table" key={item.id}>
            <Item>{item.name}</Item>
            <Item>
              <Button variant="outlined" startIcon={<InfoIcon />}>
                Info
              </Button>
            </Item>
          </Box>
        );
      })}
    </>
  );
}

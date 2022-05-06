import React from "react";
import useMenu from "../../menu/hooks/useMenu";
import { Grid, Typography, Button } from "@mui/material";
import Item from "@mui/material/ListItem";
import AddIcon from "@mui/icons-material/Add";

export default function AddItemToTable() {
  const { menuList } = useMenu();
  return (
    <div>
      {/* 2 */}
      <Grid>
        {menuList.map((item) => {
          return (
            <Item key={item.id}>
              <Grid sx={{ display: "grid" }}>
                <Typography sx={{ margin: "10px 0" }} value={item.id}>
                  {item.name}
                </Typography>
                <Button variant="outlined" type="submit" endIcon={<AddIcon />}>
                  Add
                </Button>
              </Grid>
            </Item>
          );
        })}
      </Grid>
    </div>
  );
}

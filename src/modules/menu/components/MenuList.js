import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material/";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Upgrade";
import InfoIcon from "@mui/icons-material/Info";

export default function MenuList({ menuList, updateItemMenu, deleteItemMenu }) {
  return (
    <>
      {menuList.map((item) => {
        return (
          <Card key={item.id} sx={{ maxWidth: 345, margin: "25px 0" }}>
            <CardMedia
              component="img"
              height="250"
              src={item.img}
              alt="Food-img"
            />
            <CardContent>
              <Typography
                sx={{ display: "flex", justifyContent: "space-between" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                <p>{item.name}</p>
                <p>{item.price}$</p>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Button onClick={() => updateItemMenu(item.id)} size="small">
                  <UpdateIcon />
                </Button>
                <Button onClick={() => deleteItemMenu(item.id)} size="small">
                  <DeleteIcon />
                </Button>
              </Box>
              <Button size="small">
                <InfoIcon />
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
}

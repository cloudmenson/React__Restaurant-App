import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import FormMenuSchema from "./validation/AddToMenuFormSchema";
import { Box, Button, Grid, styled } from "@mui/material";
import Item from "@mui/material/ListItem";
import AppIcon from "@mui/icons-material/ArrowUpward";

export default function AddToMenuForm({ addMenu, open, setOpen }) {
  const initValue = {
    name: "",
    price: 0,
    description: "",
    img: "",
  };

  function onMySubmit(values, handleReset) {
    handleReset.resetForm();
    addMenu(values.name, values.price, values.description, values.img);
    setOpen(!open);
  }

  const Input = styled("input")({
    display: "none",
  });

  return (
    <Box>
      <Formik
        initialValues={initValue}
        onSubmit={onMySubmit}
        validationSchema={FormMenuSchema}
      >
        <Grid container sx={{ mb: 2 }}>
          <Form>
            <Box>
              <Grid>
                <Item>Name</Item>
                <Field
                  className="App__food-add-form"
                  name="name"
                  placeholder="Name of the dish"
                />
                <Item sx={{ width: "300px" }}>
                  <ErrorMessage
                    className="App__waiter-add-form-error-validate"
                    name="name"
                    component="div"
                  />
                </Item>
              </Grid>
            </Box>
            <Box>
              <Grid>
                <Item>Price</Item>
                <Field
                  className="App__food-add-form"
                  name="price"
                  placeholder="Meal cost"
                />
                <Item>
                  <ErrorMessage
                    className="App__waiter-add-form-error-validate"
                    name="price"
                    component="div"
                  />
                </Item>
              </Grid>
            </Box>
            <Box>
              <Grid>
                <Item>Description</Item>
                <Field
                  className="App__food-add-form"
                  name="description"
                  placeholder="Description"
                />
                <Item>
                  <ErrorMessage
                    className="App__waiter-add-form-error-validate"
                    name="description"
                    component="div"
                  />
                </Item>
              </Grid>
            </Box>
            <Box>
              <Item>
                <label htmlFor="contained-button-file">
                  <Input
                    name="img"
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                  />
                  <Button variant="contained" component="span">
                    Upload image
                  </Button>
                </label>
              </Item>
            </Box>
            <Item>
              <Button
                sx={{ margin: "5px 0" }}
                variant="outlined"
                type="submit"
                className="btn btn-primary"
                endIcon={<AppIcon />}
              >
                Add
              </Button>
            </Item>
          </Form>
        </Grid>
      </Formik>
    </Box>
  );
}

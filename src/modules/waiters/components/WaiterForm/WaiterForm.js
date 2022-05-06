import React from "react";
import { Button } from "@mui/material/";
import Item from "@mui/material/ListItem";
import AddIcon from "@mui/icons-material/Add";
import { ErrorMessage, Field, Form, Formik } from "formik";
import WaiterFormSchema from "./validation/WaiteFormSchema";

export default function WaiterForm({ addWaiter, setOpen, open }) {
  const initValue = {
    name: "",
  };

  function onMySubmit(values, handleReset) {
    handleReset.resetForm();
    addWaiter(values.name);
    setOpen(!open);
  }

  return (
    <div>
      <Formik
        initialValues={initValue}
        onSubmit={onMySubmit}
        validationSchema={WaiterFormSchema}
      >
        <Item sx={{ mb: 2 }}>
          <Form>
            <Item sx={{ width: "100%" }}>
              <Field
                className="App__waiter-add-form"
                name="name"
                placeholder="Your name"
              />
            </Item>
            <Item sx={{ pt: 0 }}>
              <ErrorMessage
                className="App__waiter-add-form-error-validate"
                name="name"
                component="div"
              />
            </Item>
            <Item sx={{ width: "100%" }}>
              <Button variant="outlined" type="submit" endIcon={<AddIcon />}>
                Add
              </Button>
            </Item>
          </Form>
        </Item>
      </Formik>
    </div>
  );
}

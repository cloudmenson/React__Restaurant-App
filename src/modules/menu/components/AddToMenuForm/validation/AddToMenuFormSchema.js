import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("name is a required")
    .matches(/^[A-Z|А-Я]/g, "first leter should be big")
    .min(2),
  price: yup.string().required("price is a required"),
  description: yup
    .string()
    .matches(/^[A-Z|А-Я]/g, "first leter should be big")
    .required("description is a required"),
});

import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("name is a required")
    .min(2)
    .matches(/^[A-Z|А-Я]/g, "first leter should be big"),
});

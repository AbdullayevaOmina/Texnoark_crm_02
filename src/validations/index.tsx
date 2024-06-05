import * as Yup from "yup";

// ---------------------- Signin ----------------------
export const schemaSignin = Yup.object().shape({
  PhoneNumber: Yup.string()
    .min(19, "Invalid phone number")
    .required("Phone is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
      "Password must be at least 6 characters and contain at least one uppercase and one lowercase letter"
    )
    .required("Password is required"),
});

// ---------------------- Signup ----------------------
export const schemaSignup = Yup.object().shape({
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
  phone_number: Yup.string()
    .min(19, "Invalid phone number")
    .required("Phone is required"),
  email: Yup.string().email("Email invalit ").required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
      "Password must be at least 6 characters and contain at least one uppercase and one lowercase letter"
    )
    .required("Password is required"),
});

// ---------------------- Category ----------------------
export const schemaCatgory = Yup.object().shape({
  name: Yup.string().required("Category name is required"),
  parent_category_id: Yup.number().required("Parent Category is required"),
});

// ---------------------- Brand ----------------------
export const schemaBrand = Yup.object().shape({
  name: Yup.string().required("Brand name is required"),
  parent_category_id: Yup.number().required("Parent Brand is required"),
  description: Yup.string().required("Description is required"),
  category_id: Yup.number().required("Parent Brand is required"),
  file: Yup.string().required("Brand file is required"),
});

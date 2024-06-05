"use client";
import { Button, Card, Spinner, TextInput } from "flowbite-react";
import { DarkModeButton } from "@dark-mode";
import { schemaSignup } from "@validations";
import { Signup } from "@auth-interface";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterStore } from "@store";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { MaskedInput } from "@ui";
import { toast } from "react-toastify";

export default function Signin() {
  const navigate = useNavigate();
  const { signup, signin } = useRegisterStore();

  const initialValues: Signup = {
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
  };

  const handleSubmit = async (values: Signup) => {
    const phone_number = values.phone_number.replace(/\D/g, "");
    const payload = { ...values, phone_number: `+${phone_number}` };

    try {
      const response = await signup(payload);
      if (response.status === 201) {
        const resSignIn: any = signin({
          PhoneNumber: payload.phone_number,
          password: payload.password,
        });
        if (resSignIn === 200) {
          toast.success("You registrated! 🤗");
          navigate("/main");
        }
      }
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <Card className="w-96">
        <h1 className="text-center text-[#0e7490] my-3 text-2xl font-semibold dark:text-white">
          Sign Up
        </h1>
        <Formik
          initialValues={initialValues}
          validationSchema={schemaSignup}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="grid gap-1">
              <Field
                name="first_name"
                type="text"
                as={TextInput}
                placeholder="First name"
                helperText={
                  <ErrorMessage
                    name="first_name"
                    component="small"
                    className="text-[red]"
                  />
                }
              />

              <Field
                name="last_name"
                type="text"
                as={TextInput}
                placeholder="Last name"
                helperText={
                  <ErrorMessage
                    name="last_name"
                    component="small"
                    className="text-[red]"
                  />
                }
              />

              <MaskedInput
                name="phone_number"
                type="tel"
                mask="+998 (__) ___-__-__"
                placeholder="+998 (__) ___-__-__"
              />

              <Field
                name="email"
                type="email"
                as={TextInput}
                placeholder="Email"
                helperText={
                  <ErrorMessage
                    name="email"
                    component="small"
                    className="text-[red]"
                  />
                }
              />
              <Field
                name="password"
                type="password"
                as={TextInput}
                placeholder="Password"
                helperText={
                  <ErrorMessage
                    name="password"
                    component="small"
                    className="text-[red]"
                  />
                }
              />

              <div className="flex justify-between mb-4">
                <small className="dark:text-gray-300 ">
                  Are you already registered?
                </small>
                <Link to="/" className="text-[13px] text-sky-500">
                  Sign In
                </Link>
              </div>

              <Button type="submit">
                {isSubmitting ? (
                  <>
                    <Spinner aria-label="Spinner button example" size="sm" />{" "}
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </Card>
      <DarkModeButton />
    </div>
  );
}

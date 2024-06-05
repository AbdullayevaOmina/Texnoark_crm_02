"use client";
import { Button, Card, Spinner, TextInput } from "flowbite-react";
import { DarkModeButton } from "@dark-mode";
import { schemaSignin } from "@validations";
import { Signin } from "@auth-interface";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterStore } from "@store";
import { ErrorMessage, Field, Form, Formik } from "formik";
import frame1 from "../../assets/img.png";
import Logo from "../../assets/logo2.png";
import "./style.css";
import { MaskedInput } from "@ui";

export default function SignIn() {
  const { signin } = useRegisterStore();
  const navigate = useNavigate();

  const initialValues: Signin = {
    PhoneNumber: "",
    password: "Ominaweb12@",
  };

  const handleSubmit = async (values: Signin) => {
    console.log(values);

    const phNumber = values.PhoneNumber.replace(/\D/g, "");
    const payload = { ...values, PhoneNumber: `+${phNumber}` };
    const status = await signin(payload);
    if (status === 200) {
      navigate("/main");
    } else if (status === 404) navigate("/signup");
  };

  return (
    <div className="flex items-center justify-between w-screen h-screen px-5">
      <div className="hidden lg:relative w-[50%] bg-gra-200 p-28  lg:flex items-center justify-center">
        <img src={frame1} className="rotate-clockwise absolute w-[720px]" />
        <img src={Logo} className="fixed z-10 w-[350px]" />
      </div>
      <div className="w-[100%] lg:w-[50%] bg-gra-200 flex justify-center">
        <Card className="w-96 shadow-lg">
          <h1 className="text-center text-[#0e7490] my-3 text-3xl font-semibold dark:text-white">
            Sign In
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={schemaSignin}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="grid gap-2">
                <MaskedInput
                  name="PhoneNumber"
                  type="tel"
                  mask="+998 (__) ___-__-__"
                  placeholder="+998 (__) ___-__-__"
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
                  <small className="dark:text-gray-300">
                    Not registered yet?
                  </small>
                  <Link to="/signup" className="text-[13px] text-sky-500">
                    Sign Up
                  </Link>
                </div>

                <Button type="submit">
                  {isSubmitting ? (
                    <>
                      <Spinner aria-label="Default status example" size="md" />{" "}
                    </>
                  ) : (
                    "Submit"
                  )}
                </Button>
              </Form>
            )}
          </Formik>
        </Card>
      </div>
      <DarkModeButton />
    </div>
  );
}

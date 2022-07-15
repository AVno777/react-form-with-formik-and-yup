import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import "./form.css";

const Form = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            name: "",
            phone: "",
            password: "",
            confirmedPassword: "",
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required("Required")
                .min(4, "Must be 4 characters or more"),
            email: Yup.string()
                .required("Required")
                .matches(
                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    "Please enter a valid email address"
                ),
            password: Yup.string()
                .required("Required")
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{8,20}$/,
                    "Password must be 8-20 characters and contain at least one letter, one number and a special character"
                ),
            confirmedPassword: Yup.string()
                .required("Required")
                .oneOf([Yup.ref("password"), null], "Password must match"),
        }),
        onSubmit: (values) => {
            window.alert("Form submitted");
            //console.log(values);
        },
    });
    
    return (
        <section>
            <form className="infoform" onSubmit={formik.handleSubmit}>

                <label> Your name </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    placeholder="Enter your name"
                />
                {formik.errors.name && (
                    <p className="errorMsg"> {formik.errors.name} </p>
                )}

                <label> Email address </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Enter your email"
                />
                {formik.errors.email && (
                    <p className="errorMsg"> {formik.errors.email} </p>
                )}

                <label> Password </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    placeholder="Enter your password"
                />
                {formik.errors.password && (
                    <p className="errorMsg"> {formik.errors.password} </p>
                )}

                <label> Confirm Password </label>
                <input
                    type="password"
                    id="confirmedPassword"
                    name="confirmedPassword"
                    value={formik.values.confirmedPassword}
                    onChange={formik.handleChange}
                    placeholder="Confirm your password"
                />
                {formik.errors.confirmedPassword && (
                    <p className="errorMsg"> {formik.errors.confirmedPassword} </p>
                )}

                <button className="btn" type="submit"> Register </button>
            </form>
        </section>
    );
}
export default Form;
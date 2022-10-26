import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function LoginForm() {

    // pass useFormik hook initial form values and a submit function that will be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(25, 'Must be between 4 and 25 characters')
                .min(4, 'Must be between 4 and 25 characters')
                .required('Required'),
            password: Yup.string()
                .max(25, 'Must be between 6 and 25 characters')
                .min(6, 'Must be between 6 and 25 characters')
                .required('Required'),
        }),
        onSubmit: values => {
            // pass these values to a function for the form values to be used

        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input id="username" name="username" type="text" onChange={formik.handleChange} value={formik.values.username} onBlur={formik.handleBlur} />
            {formik.touched && formik.errors.username ? <div>{formik.errors.username}</div> : null}

            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />
            {formik.touched && formik.errors.password ? <div>{formik.errors.password}</div> : null}

            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;
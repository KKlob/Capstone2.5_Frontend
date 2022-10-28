import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import API_Routes from '../Utilities/apiRoutes';

function Form({ setToken, lastMember }) {

    const navigate = useNavigate();

    const path = useLocation().pathname;

    console.log(lastMember);

    // Login Form
    if (path.includes("login")) {

        return (
            <div id="loginFormContainer">
                <Formik
                    initialValues={{ username: "", password: "" }}
                    validationSchema={
                        Yup.object({
                            username: Yup.string()
                                .max(25, 'Must be between 4 and 25 characters')
                                .min(4, 'Must be between 4 and 25 characters')
                                .required('Required'),
                            password: Yup.string()
                                .max(25, 'Must be between 6 and 25 characters')
                                .min(6, 'Must be between 6 and 25 characters')
                                .required('Required'),
                        })}
                    onSubmit={async (values) => {
                        const { username, password } = values;
                        const url = API_Routes.baseURL + API_Routes.user.login;
                        try {
                            const token = await axios({
                                method: 'post',
                                url,
                                data: { username, password }
                            });

                            setToken(token.data)
                            navigate(lastMember);
                        } catch (error) {
                            console.log(error);
                            navigate("/login");
                        }
                    }}
                >
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.username}
                                name="username"
                            />
                            {props.errors.username && <div className="feedback">{props.errors.username}</div>}

                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.password}
                                name="password"
                            />
                            {props.errors.password && <div className="feedback">{props.errors.password}</div>}

                            <button type="submit">Login</button>

                        </form>
                    )}
                </Formik>
            </div>
        )
        // SignUp Form
    } else if (path.includes("signup")) {

        return (
            <div id="signupFormContainer">
                <Formik
                    initialValues={{ username: "", password: "", confirmPassword: "" }}
                    validationSchema={
                        Yup.object({
                            username: Yup.string()
                                .max(25, 'Must be between 4 and 25 characters')
                                .min(4, 'Must be between 4 and 25 characters')
                                .required('Required'),
                            password: Yup.string()
                                .max(25, 'Must be between 6 and 25 characters')
                                .min(6, 'Must be between 6 and 25 characters')
                                .required('Required'),
                            confirmPassword: Yup.string()
                                .test('passwordTest', 'Passwords must match', function (value) {
                                    return value === this.parent.password;
                                })
                        })}
                    onSubmit={async (values) => {
                        const { username, password } = values;
                        const url = API_Routes.baseURL + API_Routes.user.signup;
                        try {
                            const token = await axios({
                                method: 'post',
                                url,
                                data: { username, password }
                            });

                            setToken(token.data)
                            navigate(lastMember);
                        } catch (error) {
                            console.log(error);
                            navigate("/signup");
                        }
                    }}
                >
                    {props => (
                        <form onSubmit={props.handleSubmit}>
                            <labl htmlFor="username">Username:</labl>
                            <input
                                type="text"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.username}
                                name="username"
                            />
                            {props.errors.username && <div classnName="feedback">{props.errors.username}</div>}

                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.password}
                                name="password"
                            />
                            {props.errors.password && <div className="feedback">{props.errors.password}</div>}

                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input
                                type="password"
                                onChange={props.handleChange}
                                onBlur={props.handleBlur}
                                value={props.values.confirmPassword}
                                name="confirmPassword"
                            />
                            {props.errors.confirmPassword && <div className="feedback">{props.errors.confirmPassword}</div>}

                            <button type="submit">Login</button>

                        </form>
                    )}
                </Formik>
            </div>
        )
    }

}

export default Form;